import { TypeScriptModule, mergeTypeScriptModules } from '@oats-ts/typescript-writer'
import { OpenAPIReadOutput } from '@oats-ts/openapi-reader'
import { validateParameters } from '@oats-ts/openapi-validators'
import { flatMap, isEmpty, isNil, negate, sortBy } from 'lodash'
import {
  generateHeaderParametersType,
  generatePathParametersType,
  generateQueryParametersType,
} from './generateOperationParameterType'
import {
  EnhancedOperation,
  getEnhancedOperations,
  OpenAPIGenerator,
  OpenAPIGeneratorContext,
  createOpenAPIGeneratorContext,
} from '@oats-ts/openapi-common'
import { OpenAPIGeneratorTarget, OpenAPIGeneratorConfig } from '@oats-ts/openapi'
import { ParameterTypesGeneratorConfig } from './typings'
import { Result } from '@oats-ts/generator'
import { OperationObject } from 'openapi3-ts/dist'
import { TypeNode, ImportDeclaration, factory } from 'typescript'
import { getModelImports } from '@oats-ts/typescript-common'
import { isOk } from '@oats-ts/validators'

export class ParameterTypesGenerator implements OpenAPIGenerator {
  public static id = 'openapi/parameterTypes'
  private static consumes: OpenAPIGeneratorTarget[] = ['openapi/type']
  private static produces: OpenAPIGeneratorTarget[] = [
    'openapi/headers-type',
    'openapi/path-type',
    'openapi/query-type',
  ]

  private context: OpenAPIGeneratorContext = null
  private config: OpenAPIGeneratorConfig & ParameterTypesGeneratorConfig
  private operations: EnhancedOperation[]

  public readonly id: string = ParameterTypesGenerator.id
  public readonly produces: string[] = ParameterTypesGenerator.produces
  public readonly consumes: string[] = ParameterTypesGenerator.consumes

  public constructor(config: OpenAPIGeneratorConfig & ParameterTypesGeneratorConfig) {
    this.config = config
  }

  public initialize(data: OpenAPIReadOutput, generators: OpenAPIGenerator[]): void {
    this.context = createOpenAPIGeneratorContext(data, this.config, generators)
    const { document, nameOf } = this.context
    this.operations = sortBy(getEnhancedOperations(document, this.context), ({ operation }) =>
      nameOf(operation, 'openapi/operation'),
    )
  }

  public async generate(): Promise<Result<TypeScriptModule[]>> {
    const { context, config } = this

    const issues = config.skipValidation
      ? []
      : validateParameters(
          flatMap(this.operations, (operation) => [
            ...operation.cookie,
            ...operation.header,
            ...operation.path,
            ...operation.query,
          ]),
          context,
        )

    const data: TypeScriptModule[] = isOk(issues)
      ? mergeTypeScriptModules(
          flatMap(this.operations, (operation: EnhancedOperation): TypeScriptModule[] => {
            return [
              generatePathParametersType(operation, context, config),
              generateQueryParametersType(operation, context, config),
              generateHeaderParametersType(operation, context, config),
            ].filter(negate(isNil))
          }),
        )
      : undefined

    return {
      isOk: isOk(issues),
      issues,
      data,
    }
  }

  private enhance(input: OperationObject): EnhancedOperation {
    const operation = this.operations.find(({ operation }) => operation === input)
    if (isNil(operation)) {
      throw new Error(`${JSON.stringify(input)} is not a registered operation.`)
    }
    return operation
  }

  public reference(input: OperationObject, target: OpenAPIGeneratorTarget): TypeNode {
    const { context } = this
    const { nameOf } = context
    switch (target) {
      case 'openapi/headers-type': {
        const { header } = this.enhance(input)
        return isEmpty(header) ? undefined : factory.createTypeReferenceNode(nameOf(input, target))
      }
      case 'openapi/path-type': {
        const { path } = this.enhance(input)
        return isEmpty(path) ? undefined : factory.createTypeReferenceNode(nameOf(input, target))
      }
      case 'openapi/query-type':
        const { query } = this.enhance(input)
        return isEmpty(query) ? undefined : factory.createTypeReferenceNode(nameOf(input, target))
      default:
        return undefined
    }
  }

  public dependencies(fromPath: string, input: OperationObject, target: OpenAPIGeneratorTarget): ImportDeclaration[] {
    switch (target) {
      case 'openapi/headers-type': {
        const { header } = this.enhance(input)
        return isEmpty(header) ? [] : getModelImports(fromPath, 'openapi/headers-type', [input], this.context)
      }
      case 'openapi/path-type': {
        const { path } = this.enhance(input)
        return isEmpty(path) ? [] : getModelImports(fromPath, 'openapi/path-type', [input], this.context)
      }
      case 'openapi/query-type':
        const { query } = this.enhance(input)
        return isEmpty(query) ? [] : getModelImports(fromPath, 'openapi/query-type', [input], this.context)
      default:
        return []
    }
  }
}
