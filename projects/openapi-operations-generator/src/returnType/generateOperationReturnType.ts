import { getResponseSchemas, OpenAPIGeneratorContext } from '@oats-ts/openapi-common'
import { TypeScriptModule } from '@oats-ts/typescript-writer'
import { getReturnTypeAst } from './getReturnTypeAst'
import { EnhancedOperation } from '@oats-ts/openapi-common'
import { RuntimePackages } from '@oats-ts/openapi-common'
import { has, flatMap, values } from 'lodash'
import { getNamedImports } from '@oats-ts/typescript-common'

export function generateOperationReturnType(
  data: EnhancedOperation,
  context: OpenAPIGeneratorContext,
): TypeScriptModule {
  const { dependenciesOf, pathOf } = context
  const schemas = getResponseSchemas(data.operation, context)
  const path = pathOf(data.operation, 'openapi/response-type')
  return {
    path,
    dependencies: [
      getNamedImports(RuntimePackages.Http.name, [RuntimePackages.Http.HttpResponse]),
      ...(has(schemas, 'default')
        ? [getNamedImports(RuntimePackages.Http.name, [RuntimePackages.Http.StatusCode])]
        : []),
      ...flatMap(values(getResponseSchemas(data.operation, context)), (schema) =>
        dependenciesOf(path, schema, 'openapi/type'),
      ),
    ],
    content: [getReturnTypeAst(data, context)],
  }
}
