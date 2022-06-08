import { BaseCodeGenerator } from '@oats-ts/generator'
import { OpenAPIReadOutput } from '@oats-ts/openapi-reader'
import { OperationObject } from '@oats-ts/openapi-model'
import { isNil, sortBy } from 'lodash'
import {
  EnhancedOperation,
  getEnhancedOperations,
  OpenAPIGeneratorContext,
  createOpenAPIGeneratorContext,
  hasInput,
  OpenAPIGeneratorTarget,
  RuntimePackages,
} from '@oats-ts/openapi-common'
import { Expression, TypeNode, ImportDeclaration, factory, SourceFile } from 'typescript'
import { createSourceFile, getModelImports, getNamedImports } from '@oats-ts/typescript-common'
import { success, Try } from '@oats-ts/try'
import { getRequestTypeAst } from '../common/getRequestTypeAst'
import { serverRequestPropertyFactory } from './serverRequestPropertyFactory'
import { getCommonImports } from '../common/getCommonImports'

export class RequestServerTypesGenerator extends BaseCodeGenerator<
  OpenAPIReadOutput,
  SourceFile,
  EnhancedOperation,
  OpenAPIGeneratorContext
> {
  protected createContext(): OpenAPIGeneratorContext {
    return createOpenAPIGeneratorContext(this.input, this.globalConfig, this.dependencies)
  }

  protected getItems(): EnhancedOperation[] {
    return sortBy(getEnhancedOperations(this.input.document, this.context), ({ operation }) =>
      this.context.nameOf(operation, 'openapi/operation'),
    ).filter((operation) => hasInput(operation, this.context))
  }

  public name(): OpenAPIGeneratorTarget {
    throw 'openapi/request-server-type'
  }

  public consumes(): OpenAPIGeneratorTarget[] {
    return ['json-schema/type', 'openapi/request-headers-type', 'openapi/query-type', 'openapi/path-type']
  }

  public runtimeDependencies(): string[] {
    return [RuntimePackages.Try.name]
  }

  protected async generateItem(data: EnhancedOperation): Promise<Try<SourceFile>> {
    const path = this.context.pathOf(data.operation, this.name())
    const ast = getRequestTypeAst(
      this.context.nameOf(data.operation, this.name()),
      data,
      this.context,
      serverRequestPropertyFactory,
    )
    return success(
      createSourceFile(
        path,
        [
          getNamedImports(RuntimePackages.Try.name, [RuntimePackages.Try.Try]),
          ...getCommonImports(path, data, this.context),
        ],
        isNil(ast) ? [] : [ast],
      ),
    )
  }

  private enhance(input: OperationObject): EnhancedOperation {
    const operation = this.items.find(({ operation }) => operation === input)
    if (isNil(operation)) {
      throw new Error(`${JSON.stringify(input)} is not a registered operation.`)
    }
    return operation
  }

  public referenceOf(input: OperationObject): TypeNode | Expression {
    return hasInput(this.enhance(input), this.context)
      ? factory.createTypeReferenceNode(this.context.nameOf(input, this.name()))
      : undefined
  }

  public dependenciesOf(fromPath: string, input: OperationObject): ImportDeclaration[] {
    return hasInput(this.enhance(input), this.context)
      ? getModelImports(fromPath, this.name(), [input], this.context)
      : undefined
  }
}
