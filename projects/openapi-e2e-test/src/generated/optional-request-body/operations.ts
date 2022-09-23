/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/optional-request-body.json
 */

import { ClientAdapter, RawHttpRequest } from '@oats-ts/openapi-http'
import { OptionalRequestBodyRequest } from './requestTypes'
import { optionalRequestBodyResponseBodyValidator } from './responseBodyValidators'
import { OptionalRequestBodyResponse } from './responseTypes'

export async function optionalRequestBody(
  request: OptionalRequestBodyRequest,
  adapter: ClientAdapter,
): Promise<OptionalRequestBodyResponse> {
  const requestUrl = await adapter.getUrl('/optional-request-body', undefined)
  const requestHeaders = await adapter.getRequestHeaders(undefined, request.mimeType, undefined, undefined)
  const requestBody = await adapter.getRequestBody(request.mimeType, request.body)
  const rawRequest: RawHttpRequest = {
    url: requestUrl,
    method: 'post',
    body: requestBody,
    headers: requestHeaders,
  }
  const rawResponse = await adapter.request(rawRequest)
  const mimeType = await adapter.getMimeType(rawResponse)
  const statusCode = await adapter.getStatusCode(rawResponse)
  const responseBody = await adapter.getResponseBody(
    rawResponse,
    statusCode,
    mimeType,
    optionalRequestBodyResponseBodyValidator,
  )
  return {
    mimeType,
    statusCode,
    body: responseBody,
  } as OptionalRequestBodyResponse
}
