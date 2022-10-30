/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/methods.json
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { RawHttpResponse, ServerAdapter } from '@oats-ts/openapi-runtime'
import { IRouter, NextFunction, Request, Response, Router } from 'express'
import { HttpMethodsApi } from './apiType'
import { httpMethodsCorsConfiguration } from './corsConfiguration'

export function createDeleteMethodRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).delete(
    '/delete-method',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_1quzk6y']
      const api: HttpMethodsApi = response.locals['__oats_api_1quzk6y']
      try {
        const corsConfig = httpMethodsCorsConfiguration?.['/delete-method']?.['delete']
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.deleteMethod()
        const rawResponse: RawHttpResponse = {
          headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined, corsHeaders),
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

export function createGetMethodRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).get(
    '/get-method',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_1quzk6y']
      const api: HttpMethodsApi = response.locals['__oats_api_1quzk6y']
      try {
        const corsConfig = httpMethodsCorsConfiguration?.['/get-method']?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.getMethod()
        const rawResponse: RawHttpResponse = {
          headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined, corsHeaders),
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

export function createPatchMethodRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).patch(
    '/patch-method',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_1quzk6y']
      const api: HttpMethodsApi = response.locals['__oats_api_1quzk6y']
      try {
        const corsConfig = httpMethodsCorsConfiguration?.['/patch-method']?.patch
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.patchMethod()
        const rawResponse: RawHttpResponse = {
          headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined, corsHeaders),
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

export function createPostMethodRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).post(
    '/post-method',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_1quzk6y']
      const api: HttpMethodsApi = response.locals['__oats_api_1quzk6y']
      try {
        const corsConfig = httpMethodsCorsConfiguration?.['/post-method']?.post
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.postMethod()
        const rawResponse: RawHttpResponse = {
          headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined, corsHeaders),
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

export function createPutMethodRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).put(
    '/put-method',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_1quzk6y']
      const api: HttpMethodsApi = response.locals['__oats_api_1quzk6y']
      try {
        const corsConfig = httpMethodsCorsConfiguration?.['/put-method']?.put
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.putMethod()
        const rawResponse: RawHttpResponse = {
          headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined, corsHeaders),
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
