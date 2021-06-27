import { TypeScriptModule, mergeTypeScriptModules } from '@oats-ts/typescript-writer'
import { OpenAPIReadOutput } from '@oats-ts/openapi-reader'
import { Severity } from '@oats-ts/validators'
import { flatMap, isNil, negate, sortBy } from 'lodash'
import {
  generateHeaderParametersType,
  generatePathParametersType,
  generateQueryParametersType,
} from '../parameterTypes/generateOperationParameterType'
import {
  EnhancedOperation,
  getEnhancedOperations,
  OpenAPIGenerator,
  OpenAPIGeneratorContext,
  OpenAPIGeneratorTarget,
  OpenAPIGeneratorConfig,
  createOpenAPIGeneratorContext,
} from '@oats-ts/openapi-common'
import { ParameterTypesGeneratorConfig } from './typings'

const consumes: OpenAPIGeneratorTarget[] = ['type']
const produces: OpenAPIGeneratorTarget[] = ['operation-headers-type', 'operation-path-type', 'operation-query-type']

export const parameterTypes = (config: OpenAPIGeneratorConfig & ParameterTypesGeneratorConfig): OpenAPIGenerator => {
  let context: OpenAPIGeneratorContext = null
  return {
    id: 'openapi/parameterTypes',
    consumes,
    produces,
    initialize: (data: OpenAPIReadOutput, generators: OpenAPIGenerator[]) => {
      context = createOpenAPIGeneratorContext(data, config, generators)
    },
    generate: async () => {
      const { accessor } = context
      const operations = sortBy(getEnhancedOperations(accessor.document(), context), ({ operation }) =>
        accessor.name(operation, 'operation'),
      )
      const modules: TypeScriptModule[] = flatMap(operations, (operation: EnhancedOperation): TypeScriptModule[] => {
        return [
          generatePathParametersType(operation, context, config),
          generateQueryParametersType(operation, context, config),
          generateHeaderParametersType(operation, context, config),
        ].filter(negate(isNil))
      })

      if (context.issues.some((issue) => issue.severity === Severity.ERROR)) {
        return { issues: context.issues }
      }
      return mergeTypeScriptModules(modules)
    },
  }
}
