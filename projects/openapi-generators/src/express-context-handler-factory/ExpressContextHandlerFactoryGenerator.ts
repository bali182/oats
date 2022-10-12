import { OpenAPIGeneratorTarget, RuntimePackages } from '@oats-ts/openapi-common'
import { OpenAPIObject } from '@oats-ts/openapi-model'
import {
  TypeNode,
  Expression,
  factory,
  ImportDeclaration,
  SourceFile,
  ParameterDeclaration,
  SyntaxKind,
  Statement,
  Block,
} from 'typescript'
import { createSourceFile, getModelImports, getNamedImports } from '@oats-ts/typescript-common'
import { success, Try } from '@oats-ts/try'
import { DocumentBasedCodeGenerator } from '../utils/DocumentBasedCodeGenerator'
import { RuntimeDependency, version } from '@oats-ts/oats-ts'
import { RouterNames } from '../utils/RouterNames'

export class ExpressContextRouterFactoryGenerator extends DocumentBasedCodeGenerator<{}> {
  public name(): OpenAPIGeneratorTarget {
    return 'oats/express-context-router-factory'
  }
  public consumes(): OpenAPIGeneratorTarget[] {
    return ['oats/express-router-factory', 'oats/express-router-factories-type', 'oats/api-type']
  }
  public runtimeDependencies(): RuntimeDependency[] {
    return [
      { name: RuntimePackages.Http.name, version },
      { name: RuntimePackages.HttpServerExpress.name, version },
      { name: RuntimePackages.Express.name, version: '^4.18.1' },
    ]
  }

  public referenceOf(input: OpenAPIObject): TypeNode | Expression | undefined {
    const [operations] = this.items
    return operations?.length > 0 ? factory.createTypeReferenceNode(this.context.nameOf(input, this.name())) : undefined
  }

  public dependenciesOf(fromPath: string, input: OpenAPIObject): ImportDeclaration[] {
    const [operations] = this.items
    return operations?.length > 0 ? getModelImports(fromPath, this.name(), [input], this.context) : []
  }

  protected async generateItem(): Promise<Try<SourceFile>> {
    const path = this.context.pathOf(this.input.document, this.name())
    return success(createSourceFile(path, this.getImportDeclarations(path), [this.getRouterFactoryAst()]))
  }

  protected getImportDeclarations(path: string): ImportDeclaration[] {
    return [
      getNamedImports(RuntimePackages.Express.name, [
        RuntimePackages.Express.IRouter,
        RuntimePackages.Express.Router,
        RuntimePackages.Express.NextFunction,
        RuntimePackages.Express.Request,
        RuntimePackages.Express.Response,
      ]),
      getNamedImports(RuntimePackages.Http.name, [RuntimePackages.Http.ServerAdapter]),
      getNamedImports(RuntimePackages.HttpServerExpress.name, [RuntimePackages.HttpServerExpress.ExpressToolkit]),
      ...getModelImports<OpenAPIGeneratorTarget>(path, 'oats/api-type', [this.input.document], this.context),
    ]
  }

  protected getHandlerParamteters(): ParameterDeclaration[] {
    return [
      factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        factory.createIdentifier('_'),
        undefined,
        factory.createTypeReferenceNode(factory.createIdentifier(RuntimePackages.Express.Request), undefined),
        undefined,
      ),
      factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        factory.createIdentifier(RouterNames.response),
        undefined,
        factory.createTypeReferenceNode(factory.createIdentifier(RuntimePackages.Express.Response), undefined),
        undefined,
      ),
      factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        factory.createIdentifier(RouterNames.next),
        undefined,
        factory.createTypeReferenceNode(RuntimePackages.Express.NextFunction, undefined),
        undefined,
      ),
    ]
  }

  protected getFactoryParameters(): ParameterDeclaration[] {
    return [
      factory.createParameterDeclaration(
        [],
        [],
        undefined,
        factory.createIdentifier(RouterNames.router),
        undefined,
        factory.createUnionTypeNode([
          factory.createTypeReferenceNode(RuntimePackages.Express.IRouter, undefined),
          factory.createTypeReferenceNode('undefined', undefined),
        ]),
        undefined,
      ),
      factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        factory.createIdentifier(RouterNames.api),
        undefined,
        factory.createTypeReferenceNode(this.context.referenceOf(this.context.document, 'oats/api-type')),
        undefined,
      ),
      factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        factory.createIdentifier(RouterNames.adapter),
        undefined,
        factory.createTypeReferenceNode(factory.createIdentifier(RuntimePackages.Http.ServerAdapter), [
          factory.createTypeReferenceNode(
            factory.createIdentifier(RuntimePackages.HttpServerExpress.ExpressToolkit),
            undefined,
          ),
        ]),
        undefined,
      ),
    ]
  }

  protected getRouterFactoryAst(): Statement {
    return factory.createFunctionDeclaration(
      undefined,
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      undefined,
      factory.createIdentifier(this.context.nameOf(this.context.document, this.name())),
      undefined,
      this.getFactoryParameters(),
      factory.createTypeReferenceNode(factory.createIdentifier(RuntimePackages.Express.IRouter), undefined),
      this.getFactoryFunctionBodyBlockAst(),
    )
  }

  private getFactoryFunctionBodyBlockAst(): Block {
    return factory.createBlock([factory.createReturnStatement(this.getRouterExpressionAst())], true)
  }

  protected getRouterExpressionAst(): Expression {
    return factory.createCallExpression(
      factory.createPropertyAccessExpression(
        factory.createParenthesizedExpression(
          factory.createBinaryExpression(
            factory.createIdentifier(RouterNames.router),
            factory.createToken(SyntaxKind.QuestionQuestionToken),
            factory.createCallExpression(factory.createIdentifier(RuntimePackages.Express.Router), undefined, []),
          ),
        ),
        factory.createIdentifier(RouterNames.use),
      ),
      undefined,
      [this.getHandlerArrowFunctionAst()],
    )
  }

  protected getHandlerArrowFunctionAst(): Expression {
    return factory.createArrowFunction(
      undefined,
      undefined,
      this.getHandlerParamteters(),
      undefined,
      factory.createToken(SyntaxKind.EqualsGreaterThanToken),
      this.getHandlerFunctionBodyBlockAst(),
    )
  }

  protected getHandlerFunctionBodyBlockAst(): Block {
    const statements = [
      this.getApiAssignmentStatementAst(),
      this.getAdapterAssignmentStatementAst(),
      this.getNextCallStatementAst(),
    ]
    return factory.createBlock(statements, true)
  }

  protected getNextCallStatementAst(): Statement {
    return factory.createExpressionStatement(
      factory.createCallExpression(factory.createIdentifier(RouterNames.next), undefined, []),
    )
  }

  protected getAdapterAssignmentStatementAst(): Statement {
    return factory.createExpressionStatement(
      factory.createBinaryExpression(
        factory.createElementAccessExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier(RouterNames.response),
            factory.createIdentifier(RouterNames.locals),
          ),
          factory.createStringLiteral(RouterNames.adapterKey(this.context.hashOf(this.context.document))),
        ),
        factory.createToken(SyntaxKind.EqualsToken),
        factory.createIdentifier(RouterNames.adapter),
      ),
    )
  }

  protected getApiAssignmentStatementAst(): Statement {
    return factory.createExpressionStatement(
      factory.createBinaryExpression(
        factory.createElementAccessExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier(RouterNames.response),
            factory.createIdentifier(RouterNames.locals),
          ),
          factory.createStringLiteral(RouterNames.apiKey(this.context.hashOf(this.context.document))),
        ),
        factory.createToken(SyntaxKind.EqualsToken),
        factory.createIdentifier(RouterNames.api),
      ),
    )
  }
}
