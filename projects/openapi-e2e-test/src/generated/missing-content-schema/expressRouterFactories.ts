/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from edge-cases/missing-content-schema.json (originating from oats-ts/oats-schemas)
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { RawHttpResponse, ServerAdapter } from '@oats-ts/openapi-runtime'
import { IRouter, NextFunction, Request, Response, Router } from 'express'
import { MissingContentApi } from './apiType'
import { missingRequestBodySchemaRequestBodyValidator } from './requestBodyValidators'
import { MissingRequestBodySchemaServerRequest } from './requestServerTypes'

export function createMissingRequestBodySchemaRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).get(
    '/missing-request-body-schema',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_1ibjm69']
      const api: MissingContentApi = response.locals['__oats_api_1ibjm69']
      try {
        const mimeType = await adapter.getMimeType<'application/json'>(toolkit)
        const body = await adapter.getRequestBody<'application/json', any>(
          toolkit,
          false,
          mimeType,
          missingRequestBodySchemaRequestBodyValidator,
        )
        const typedRequest: MissingRequestBodySchemaServerRequest = {
          mimeType,
          body,
        }
        const typedResponse = await api.missingRequestBodySchema(typedRequest)
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

export function createMissingResponseSchemaRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).get(
    '/missing-response-schema',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_1ibjm69']
      const api: MissingContentApi = response.locals['__oats_api_1ibjm69']
      try {
        const typedResponse = await api.missingResponseSchema()
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
