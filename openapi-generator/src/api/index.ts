import { mergeTypeScriptModules, TypeScriptModule } from '@oats-ts/typescript-writer'
import { CodeGenerator } from '@oats-ts/generator'
import { OpenAPIReadOutput } from '@oats-ts/openapi-reader'
import { sortBy } from 'lodash'
import { Severity } from '../../../validators/lib'
import { getEnhancedOperations } from '../common/getEnhancedOperations'
import { generateApiClass } from './apiClass/generateApiClass'
import { generateApiStub } from './apiStub/generateApiStub'
import { generateApiType } from './apiType/generateApiType'
import { ApiGeneratorConfig } from './typings'
import { createOpenAPIGeneratorContext } from '../defaults/createOpenAPIGeneratorContext'
import { OpenAPIGenerator, OpenAPIGeneratorConfig, OpenAPIGeneratorTarget } from '../typings'

const consumes: OpenAPIGeneratorTarget[] = ['operation', 'operation-input-type']
const produces: OpenAPIGeneratorTarget[] = ['api-class', 'api-stub', 'api-type']

export const api = (config: OpenAPIGeneratorConfig & ApiGeneratorConfig): OpenAPIGenerator => {
  return {
    id: 'openapi/api',
    consumes,
    produces,
    generate: async (data: OpenAPIReadOutput, generators: OpenAPIGenerator[]) => {
      const context = createOpenAPIGeneratorContext(data, config, generators)
      const document = context.accessor.document()
      const operations = sortBy(getEnhancedOperations(document, context), ({ operation }) =>
        context.accessor.name(operation, 'operation'),
      )
      const modules: TypeScriptModule[] = [
        ...(config.type ? [generateApiType(document, operations, context, config)] : []),
        ...(config.class ? [generateApiClass(document, operations, context, config)] : []),
        ...(config.stub ? [generateApiStub(document, operations, context, config)] : []),
      ]
      if (context.issues.some((issue) => issue.severity === Severity.ERROR)) {
        return { issues: context.issues }
      }
      return mergeTypeScriptModules(modules)
    },
  }
}
