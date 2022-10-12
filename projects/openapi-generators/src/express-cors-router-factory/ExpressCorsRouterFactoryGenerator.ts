import { EnhancedPathItem, OpenAPIGeneratorTarget, RuntimePackages } from '@oats-ts/openapi-common'
import { OpenAPIObject } from '@oats-ts/openapi-model'
import {
  Block,
  Expression,
  factory,
  Identifier,
  ImportDeclaration,
  NodeFlags,
  ParameterDeclaration,
  SourceFile,
  Statement,
  SyntaxKind,
} from 'typescript'
import { createSourceFile, getModelImports, getNamedImports } from '@oats-ts/typescript-common'
import { success, Try } from '@oats-ts/try'
import { RuntimeDependency } from '@oats-ts/oats-ts'
import { PathBasedCodeGenerator } from '../utils/PathBasedCodeGenerator'
import { isNil } from 'lodash'
import { RouterNames } from '../utils/RouterNames'
import { getPathTemplate } from '../utils/getPathTemplate'

export class ExpressCorsRouterFactoryGenerator extends PathBasedCodeGenerator<{}> {
  public name(): OpenAPIGeneratorTarget {
    return 'oats/express-cors-router-factory'
  }

  public consumes(): OpenAPIGeneratorTarget[] {
    return ['oats/cors-configuration']
  }

  public runtimeDependencies(): RuntimeDependency[] {
    return [{ name: RuntimePackages.Express.name, version: '^4.18.1' }]
  }

  public referenceOf(input: OpenAPIObject): Identifier | undefined {
    const [paths] = this.items
    return paths?.length > 0 ? factory.createIdentifier(this.context.nameOf(input, this.name())) : undefined
  }

  public dependenciesOf(fromPath: string, input: any): ImportDeclaration[] {
    const [paths] = this.items
    return paths?.length > 0 ? getModelImports(fromPath, this.name(), [input], this.context) : []
  }

  public async generateItem(paths: EnhancedPathItem[]): Promise<Try<SourceFile>> {
    const path = this.context.pathOf(this.input.document, this.name())
    return success(
      createSourceFile(path, this.getImportDeclarations(path), [this.getCorsRouterFactoryStatement(paths)]),
    )
  }

  protected getCorsRouterFactoryStatement(paths: EnhancedPathItem[]): Statement {
    return factory.createFunctionDeclaration(
      undefined,
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      undefined,
      factory.createIdentifier(this.context.nameOf(this.context.document, this.name())),
      undefined,
      [
        factory.createParameterDeclaration(
          [],
          [],
          undefined,
          RouterNames.router,
          factory.createToken(SyntaxKind.QuestionToken),
          factory.createUnionTypeNode([
            factory.createTypeReferenceNode(RuntimePackages.Express.IRouter, undefined),
            factory.createTypeReferenceNode('undefined', undefined),
          ]),
        ),
      ],
      factory.createTypeReferenceNode(factory.createIdentifier(RuntimePackages.Express.IRouter), undefined),
      factory.createBlock([factory.createReturnStatement(this.getCorsRouterExpression(paths))], true),
    )
  }

  protected getCorsRouterExpression(paths: EnhancedPathItem[]): Expression {
    const routerExpr: Expression = factory.createBinaryExpression(
      factory.createIdentifier(RouterNames.router),
      SyntaxKind.QuestionQuestionToken,
      factory.createCallExpression(factory.createIdentifier(RuntimePackages.Express.Router), [], []),
    )
    return Array.from(paths)
      .reverse()
      .reduce((prevExpr: Expression, pathItem: EnhancedPathItem) => {
        return factory.createCallExpression(
          factory.createPropertyAccessExpression(prevExpr, 'options'),
          [],
          [factory.createStringLiteral(getPathTemplate(pathItem.url)), this.getCorsHandlerArrowFunction(pathItem)],
        )
      }, routerExpr)
  }

  protected getCorsHandlerArrowFunction(data: EnhancedPathItem): Expression {
    return factory.createArrowFunction(
      [factory.createModifier(SyntaxKind.AsyncKeyword)],
      undefined,
      this.getCorsHandlerArrowFunctionParameters(),
      undefined,
      factory.createToken(SyntaxKind.EqualsGreaterThanToken),
      this.getCorsHandlerBodyBlock(data),
    )
  }

  protected getCorsHandlerArrowFunctionParameters(): ParameterDeclaration[] {
    return [
      factory.createParameterDeclaration(
        [],
        [],
        undefined,
        RouterNames.request,
        undefined,
        factory.createTypeReferenceNode(RuntimePackages.Express.Request),
      ),
      factory.createParameterDeclaration(
        [],
        [],
        undefined,
        RouterNames.response,
        undefined,
        factory.createTypeReferenceNode(RuntimePackages.Express.Response),
      ),
      factory.createParameterDeclaration(
        [],
        [],
        undefined,
        RouterNames.next,
        undefined,
        factory.createTypeReferenceNode(RuntimePackages.Express.NextFunction),
      ),
    ]
  }

  protected getCorsHandlerBodyBlock(data: EnhancedPathItem): Block {
    return factory.createBlock(
      [this.getToolkitStatement(data), this.getAdapterStatement(data), this.getTryCatchStatement(data)],
      true,
    )
  }

  private getTryCatchStatement(data: EnhancedPathItem): Statement {
    const tryBlock = factory.createBlock([
      this.getRequestedMethodStatement(),
      this.getCorsConfigStatement(data),
      this.getCorsMethodsStatement(),
      this.getRespondStatement(),
    ])
    return factory.createTryStatement(
      tryBlock,
      factory.createCatchClause(
        factory.createVariableDeclaration(factory.createIdentifier(RouterNames.error), undefined, undefined, undefined),
        factory.createBlock(
          [
            factory.createExpressionStatement(
              factory.createCallExpression(
                factory.createPropertyAccessExpression(
                  factory.createIdentifier(RouterNames.adapter),
                  factory.createIdentifier(RouterNames.handleError),
                ),
                undefined,
                [factory.createIdentifier(RouterNames.toolkit), factory.createIdentifier(RouterNames.error)],
              ),
            ),
          ],
          true,
        ),
      ),
      undefined,
    )
  }

  protected getToolkitStatement(data: EnhancedPathItem): Statement {
    return factory.createVariableStatement(
      undefined,
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            factory.createIdentifier(RouterNames.toolkit),
            undefined,
            factory.createTypeReferenceNode(
              factory.createIdentifier(RuntimePackages.HttpServerExpress.ExpressToolkit),
              undefined,
            ),
            factory.createObjectLiteralExpression(
              [
                factory.createShorthandPropertyAssignment(factory.createIdentifier(RouterNames.request), undefined),
                factory.createShorthandPropertyAssignment(factory.createIdentifier(RouterNames.response), undefined),
                factory.createShorthandPropertyAssignment(factory.createIdentifier(RouterNames.next), undefined),
              ],
              false,
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )
  }

  protected getAdapterStatement(data: EnhancedPathItem): Statement {
    return factory.createVariableStatement(
      undefined,
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            factory.createIdentifier(RouterNames.adapter),
            undefined,
            factory.createTypeReferenceNode(factory.createIdentifier(RuntimePackages.Http.ServerAdapter), [
              factory.createTypeReferenceNode(
                factory.createIdentifier(RuntimePackages.HttpServerExpress.ExpressToolkit),
                undefined,
              ),
            ]),
            factory.createElementAccessExpression(
              factory.createPropertyAccessExpression(
                factory.createIdentifier(RouterNames.response),
                factory.createIdentifier(RouterNames.locals),
              ),
              factory.createStringLiteral(RouterNames.adapterKey(this.context.hashOf(this.context.document))),
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )
  }

  protected getRespondStatement() {
    return factory.createExpressionStatement(
      factory.createAwaitExpression(
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier(RouterNames.adapter),
            factory.createIdentifier(RouterNames.respond),
          ),
          undefined,
          [
            factory.createIdentifier(RouterNames.toolkit),
            factory.createObjectLiteralExpression([
              factory.createPropertyAssignment(RouterNames.headers, factory.createIdentifier(RouterNames.corsHeaders)),
            ]),
          ],
        ),
      ),
    )
  }

  protected getCorsMethodsStatement() {
    return factory.createVariableStatement(
      undefined,
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            factory.createIdentifier(RouterNames.corsHeaders),
            undefined,
            undefined,
            factory.createAwaitExpression(
              factory.createCallExpression(
                factory.createPropertyAccessExpression(
                  factory.createIdentifier(RouterNames.adapter),
                  factory.createIdentifier(RouterNames.getPreflightCorsHeaders),
                ),
                undefined,
                [
                  factory.createIdentifier(RouterNames.toolkit),
                  factory.createIdentifier(RouterNames.method),
                  factory.createIdentifier(RouterNames.corsConfig),
                ],
              ),
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )
  }

  protected getCorsConfigStatement(data: EnhancedPathItem) {
    return factory.createVariableStatement(
      undefined,
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            factory.createIdentifier(RouterNames.corsConfig),
            undefined,
            undefined,
            factory.createConditionalExpression(
              factory.createBinaryExpression(
                factory.createIdentifier(RouterNames.method),
                factory.createToken(SyntaxKind.EqualsEqualsEqualsToken),
                factory.createIdentifier('undefined'),
              ),
              factory.createToken(SyntaxKind.QuestionToken),
              factory.createIdentifier('undefined'),
              factory.createToken(SyntaxKind.ColonToken),
              factory.createElementAccessChain(
                factory.createElementAccessChain(
                  this.context.referenceOf(this.context.document, 'oats/cors-configuration'),
                  factory.createToken(SyntaxKind.QuestionDotToken),
                  factory.createStringLiteral(data.url),
                ),
                factory.createToken(SyntaxKind.QuestionDotToken),
                factory.createIdentifier(RouterNames.method),
              ),
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )
  }

  protected getRequestedMethodStatement() {
    return factory.createVariableStatement(
      undefined,
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            factory.createIdentifier(RouterNames.method),
            undefined,
            undefined,
            factory.createCallExpression(
              factory.createPropertyAccessExpression(
                factory.createIdentifier(RouterNames.adapter),
                factory.createIdentifier(RouterNames.getAccessControlRequestedMethod),
              ),
              undefined,
              [factory.createIdentifier(RouterNames.toolkit)],
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )
  }

  protected getImportDeclarations(path: string): ImportDeclaration[] {
    const paths = this.items[0]

    if (isNil(paths) || paths.length === 0) {
      return [
        getNamedImports(RuntimePackages.Express.name, [
          RuntimePackages.Express.IRouter,
          RuntimePackages.Express.Router,
        ]),
      ]
    }
    return [
      getNamedImports(RuntimePackages.Express.name, [
        RuntimePackages.Express.IRouter,
        RuntimePackages.Express.Router,
        RuntimePackages.Express.Request,
        RuntimePackages.Express.Response,
        RuntimePackages.Express.NextFunction,
      ]),
      getNamedImports(RuntimePackages.Http.name, [RuntimePackages.Http.ServerAdapter]),
      getNamedImports(RuntimePackages.HttpServerExpress.name, [RuntimePackages.HttpServerExpress.ExpressToolkit]),
      ...getModelImports<OpenAPIGeneratorTarget>(
        path,
        'oats/cors-configuration',
        [this.context.document],
        this.context,
      ),
    ]
  }
}
