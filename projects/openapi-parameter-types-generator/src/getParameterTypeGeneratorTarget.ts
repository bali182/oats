import { ParameterLocation } from '@oats-ts/openapi-model'
import { OpenAPIGeneratorTarget } from '@oats-ts/openapi-common'

export function getParameterTypeGeneratorTarget(location: ParameterLocation): OpenAPIGeneratorTarget {
  switch (location) {
    case 'header':
      return 'openapi/request-headers-type'
    case 'path':
      return 'openapi/path-type'
    case 'query':
      return 'openapi/query-type'
  }
}
