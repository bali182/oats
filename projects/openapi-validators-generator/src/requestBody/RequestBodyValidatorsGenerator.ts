import { Result, GeneratorConfig } from '@oats-ts/generator'
import { mergeTypeScriptModules, TypeScriptModule } from '@oats-ts/typescript-writer'
import { OpenAPIReadOutput } from '@oats-ts/openapi-reader'
import { OperationObject } from '@oats-ts/openapi-model'
import { flatMap, isNil, negate, sortBy } from 'lodash'
import { generateRequestBodyValidator } from './generateRequestBodyValidator'
import {
  EnhancedOperation,
  getEnhancedOperations,
  OpenAPIGenerator,
  OpenAPIGeneratorContext,
  createOpenAPIGeneratorContext,
  hasResponses,
  hasRequestBody,
} from '@oats-ts/openapi-common'
import { OpenAPIGeneratorTarget } from '@oats-ts/openapi'
import { Expression, TypeNode, ImportDeclaration, factory } from 'typescript'
import { getModelImports } from '@oats-ts/typescript-common'

export class RequestBodyValidatorsGenerator implements OpenAPIGenerator<'openapi/request-body-validator'> {
  private context: OpenAPIGeneratorContext = null
  private config: GeneratorConfig
  private operations: EnhancedOperation[]

  public readonly id = 'openapi/request-body-validator'
  public readonly consumes: OpenAPIGeneratorTarget[] = ['openapi/type', 'openapi/type-validator']

  public constructor(config: GeneratorConfig) {
    this.config = config
  }

  public initialize(data: OpenAPIReadOutput, generators: OpenAPIGenerator[]): void {
    this.context = createOpenAPIGeneratorContext(data, this.config, generators)
    const { document, nameOf } = this.context
    this.operations = sortBy(getEnhancedOperations(document, this.context), ({ operation }) =>
      nameOf(operation, this.id),
    )
  }

  public async generate(): Promise<Result<TypeScriptModule[]>> {
    const { context } = this

    const data: TypeScriptModule[] = mergeTypeScriptModules(
      flatMap(this.operations, (operation: EnhancedOperation): TypeScriptModule[] =>
        [generateRequestBodyValidator(operation, context)].filter(negate(isNil)),
      ),
    )

    return {
      isOk: true,
      issues: [],
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

  public referenceOf(input: OperationObject): TypeNode | Expression {
    const { context } = this
    const { nameOf } = context
    return hasRequestBody(this.enhance(input), context) ? factory.createIdentifier(nameOf(input, this.id)) : undefined
  }

  public dependenciesOf(fromPath: string, input: OperationObject): ImportDeclaration[] {
    const { context } = this
    return hasRequestBody(this.enhance(input), context) ? getModelImports(fromPath, this.id, [input], this.context) : []
  }
}
