import { EnhancedPathItem, OpenAPIGeneratorContext, RuntimePackages } from '@oats-ts/openapi-common'
import { Expression, factory, Statement, SyntaxKind } from 'typescript'
import { getPathTemplate } from '../utils/express/getPathTemplate'
import { RouterNames } from '../utils/express/RouterNames'
import { getCorsHandlerArrowFunctionAst } from './getCorsHandlerArrowFunction'
import { ExpressCorsMiddlewareGeneratorConfig } from './typings'

function getCorsRouterExpression(
  paths: EnhancedPathItem[],
  context: OpenAPIGeneratorContext,
  config: ExpressCorsMiddlewareGeneratorConfig,
): Expression {
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
        [
          factory.createStringLiteral(getPathTemplate(pathItem.url)),
          getCorsHandlerArrowFunctionAst(pathItem, context, config),
        ],
      )
    }, routerExpr)
}

export function getCorsMiddlewareAst(
  paths: EnhancedPathItem[],
  context: OpenAPIGeneratorContext,
  config: ExpressCorsMiddlewareGeneratorConfig,
): Statement {
  return factory.createFunctionDeclaration(
    undefined,
    [factory.createModifier(SyntaxKind.ExportKeyword)],
    undefined,
    factory.createIdentifier(context.nameOf(context.document, 'oats/express-cors-middleware')),
    undefined,
    [
      factory.createParameterDeclaration(
        [],
        [],
        undefined,
        RouterNames.router,
        factory.createToken(SyntaxKind.QuestionToken),
        factory.createTypeReferenceNode(RuntimePackages.Express.Router),
      ),
    ],
    factory.createTypeReferenceNode(factory.createIdentifier(RuntimePackages.Express.Router), undefined),
    factory.createBlock([factory.createReturnStatement(getCorsRouterExpression(paths, context, config))], true),
  )
}
