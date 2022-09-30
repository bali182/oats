/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/optional-request-body.json
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { RawHttpResponse, ServerAdapter } from '@oats-ts/openapi-http'
import { NextFunction, Request, Response, Router } from 'express'
import { BodiesApi } from './apiType'
import { optionalRequestBodyRequestBodyValidator } from './requestBodyValidators'
import { OptionalRequestBodyServerRequest } from './requestServerTypes'

export function createOptionalRequestBodyRouter(): Router {
  return Router().post(
    '/optional-request-body',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter']
      const api: BodiesApi = response.locals['__oats_api']
      try {
        const mimeType = await adapter.getMimeType<'application/json'>(toolkit)
        const body = await adapter.getRequestBody<
          'application/json',
          {
            foo?: string
          }
        >(toolkit, false, mimeType, optionalRequestBodyRequestBodyValidator)
        const typedRequest: OptionalRequestBodyServerRequest = {
          mimeType,
          body,
        }
        const typedResponse = await api.optionalRequestBody(typedRequest)
        const rawResponse: RawHttpResponse = {
          headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined, undefined),
          statusCode: await adapter.getStatusCode(toolkit, typedResponse),
          body: await adapter.getResponseBody(toolkit, typedResponse),
        }
        await adapter.respond(toolkit, rawResponse)
      } catch (error) {
        adapter.handleError(toolkit, error)
      }
    },
  )
}
