import { OpenAPIGeneratorTarget, RuntimePackages, EnhancedOperation } from '@oats-ts/openapi-common'
import { ExpressRouterFactoriesGeneratorConfig } from './typings'
import { OperationObject } from '@oats-ts/openapi-model'
import { TypeNode, Expression, factory, ImportDeclaration, SourceFile } from 'typescript'
import { createSourceFile, getModelImports } from '@oats-ts/typescript-common'
import { success, Try } from '@oats-ts/try'
import { getExpressRouterImports } from './getExpressRouterImports'
import { getExpressRouterAst } from './getExpressRouterAst'
import { OperationBasedCodeGenerator } from '../utils/OperationBasedCodeGenerator'
import { RuntimeDependency, version } from '@oats-ts/oats-ts'
// import { isNil } from 'lodash'
// import { isOperationCorsEnabled } from './isOperationCorsEnabled'
// import { Issue } from '@oats-ts/validators'

export class ExpressRouterFactoriesGenerator extends OperationBasedCodeGenerator<ExpressRouterFactoriesGeneratorConfig> {
  public name(): OpenAPIGeneratorTarget {
    return 'oats/express-router-factory'
  }

  public consumes(): OpenAPIGeneratorTarget[] {
    return [
      'oats/type',
      'oats/request-server-type',
      'oats/response-type',
      'oats/api-type',
      'oats/path-deserializer',
      'oats/query-deserializer',
      'oats/cookie-deserializer',
      'oats/set-cookie-serializer',
      'oats/request-headers-deserializer',
      'oats/response-headers-serializer',
      'oats/request-body-validator',
    ]
  }

  public runtimeDependencies(): RuntimeDependency[] {
    return [
      { name: RuntimePackages.Http.name, version: version },
      { name: RuntimePackages.HttpServerExpress.name, version: version },
      { name: RuntimePackages.Express.name, version: '^4.18.1' },
    ]
  }

  // public getPreGenerateIssues(): Issue[] {
  //   const corsConfig = this.context.configurationOf('oats/express-cors-router-factory')
  //   const config = this.configuration()
  //   if (!isNil(corsConfig) && !this.items.some((operation) => isOperationCorsEnabled(operation, config))) {
  //     return [
  //       {
  //         message: `CORS configuration needed, to add inline CORS headers`,
  //         path: this.name(),
  //         severity: 'warning',
  //       },
  //     ]
  //   }
  //   return []
  // }

  protected async generateItem(item: EnhancedOperation): Promise<Try<SourceFile>> {
    return success(
      createSourceFile(this.context.pathOf(item.operation, this.name()), getExpressRouterImports(item, this.context), [
        getExpressRouterAst(item, this.context, this.configuration()),
      ]),
    )
  }

  public referenceOf(input: OperationObject): TypeNode | Expression {
    return factory.createIdentifier(this.context.nameOf(input, this.name()))
  }

  public dependenciesOf(fromPath: string, input: OperationObject): ImportDeclaration[] {
    return getModelImports(fromPath, this.id, [input], this.context)
  }
}
