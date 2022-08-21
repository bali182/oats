import { getResponseHeaders, hasResponses, OpenAPIGeneratorContext } from '@oats-ts/openapi-common'
import { OperationObject } from '@oats-ts/openapi-model'
import { flatMap, isNil } from 'lodash'

export function getResponseHeaderNames(
  operation: OperationObject | undefined,
  context: OpenAPIGeneratorContext,
): string[] {
  if (isNil(operation)) {
    return []
  }
  const headers = flatMap(Object.values(getResponseHeaders(operation, context)), (headersObject) =>
    Object.keys(headersObject),
  ).map((header) => header.toLowerCase())

  if (hasResponses(operation, context)) {
    headers.push('content-type')
  }
  return headers
}
