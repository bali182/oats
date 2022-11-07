import { OpenAPIGeneratorTarget, EnhancedOperation } from '@oats-ts/openapi-common'
import { SdkGeneratorConfig } from '../utils/sdkTypings'
import { OpenAPIObject } from '@oats-ts/openapi-model'
import {
  TypeNode,
  Expression,
  factory,
  ImportDeclaration,
  SourceFile,
  Statement,
  SyntaxKind,
  MethodSignature,
  ParameterDeclaration,
  TypeReferenceNode,
} from 'typescript'
import { createSourceFile, documentNode, getModelImports } from '@oats-ts/typescript-common'
import { success, Try } from '@oats-ts/try'
import { DocumentBasedCodeGenerator } from '../utils/DocumentBasedCodeGenerator'
import { RuntimeDependency } from '@oats-ts/oats-ts'
import { flatMap, isNil } from 'lodash'

export class SdkTypeGenerator extends DocumentBasedCodeGenerator<SdkGeneratorConfig> {
  public name(): OpenAPIGeneratorTarget {
    return 'oats/sdk-type'
  }

  public consumes(): OpenAPIGeneratorTarget[] {
    return ['oats/operation', 'oats/request-type', 'oats/response-type']
  }

  public runtimeDependencies(): RuntimeDependency[] {
    return []
  }

  public async generateItem(operations: EnhancedOperation[]): Promise<Try<SourceFile>> {
    const path = this.context().pathOf(this.input.document, this.name())
    return success(
      createSourceFile(path, this.getImportDeclarations(path, operations), [this.getSdkTypeAst(operations)]),
    )
  }

  protected getImportDeclarations(path: string, operations: EnhancedOperation[]): ImportDeclaration[] {
    const imports = flatMap(operations, (data) => [
      ...this.context().dependenciesOf<ImportDeclaration>(path, data.operation, 'oats/request-type'),
      ...this.context().dependenciesOf<ImportDeclaration>(path, data.operation, 'oats/response-type'),
    ])
    return operations.length > 0 ? [...imports] : imports
  }

  protected getSdkTypeAst(operations: EnhancedOperation[]): Statement {
    return factory.createTypeAliasDeclaration(
      [],
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      this.context().nameOf(this.context().document(), this.name()),
      [],
      factory.createTypeLiteralNode(operations.map((operation) => this.getSdkTypeMethodSignatureAst(operation))),
    )
  }

  protected getSdkTypeMethodSignatureAst(data: EnhancedOperation): MethodSignature {
    const parameters: ParameterDeclaration[] = this.getSdkMethodParameterAsts(data)
    const responseType = this.context().referenceOf<TypeReferenceNode>(data.operation, 'oats/response-type')
    const returnPromiseType = factory.createTypeReferenceNode('Promise', [
      isNil(responseType) ? factory.createTypeReferenceNode('void') : responseType,
    ])
    const node = factory.createMethodSignature(
      [],
      this.context().nameOf(data.operation, 'oats/operation'),
      undefined,
      [],
      parameters,
      returnPromiseType,
    )

    return this.configuration().documentation ? documentNode(node, data.operation) : node
  }

  protected getSdkMethodParameterAsts(data: EnhancedOperation): ParameterDeclaration[] {
    const requestType = this.context().referenceOf<TypeReferenceNode>(data.operation, 'oats/request-type')
    return isNil(requestType)
      ? []
      : [factory.createParameterDeclaration([], [], undefined, 'request', undefined, requestType)]
  }

  public referenceOf(input: OpenAPIObject): TypeNode | Expression | undefined {
    const [operations] = this.items
    return operations.length > 0
      ? factory.createTypeReferenceNode(this.context().nameOf(input, this.name()))
      : undefined
  }

  public dependenciesOf(fromPath: string, input: OpenAPIObject): ImportDeclaration[] {
    const [operations] = this.items
    return operations.length > 0 ? getModelImports(fromPath, this.name(), [input], this.context()) : []
  }
}
