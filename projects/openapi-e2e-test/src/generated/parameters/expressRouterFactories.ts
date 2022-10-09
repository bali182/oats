/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/parameters.json
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { RawHttpResponse, ServerAdapter } from '@oats-ts/openapi-http'
import { IRouter, NextFunction, Request, Response, Router } from 'express'
import { ParametersApi } from './apiType'
import { formCookieParametersCookieDeserializer } from './cookieDeserializers'
import { parametersCorsConfiguration } from './corsConfiguration'
import {
  labelPathParametersPathDeserializer,
  matrixPathParametersPathDeserializer,
  simplePathParametersPathDeserializer,
} from './pathDeserializers'
import {
  deepObjectQueryParametersQueryDeserializer,
  formQueryParametersQueryDeserializer,
  pipeDelimitedQueryParametersQueryDeserializer,
  spaceDelimitedQueryParametersQueryDeserializer,
} from './queryDeserializers'
import { simpleResponseHeaderParametersRequestBodyValidator } from './requestBodyValidators'
import { simpleHeaderParametersRequestHeadersDeserializer } from './requestHeaderDeserializers'
import {
  DeepObjectQueryParametersServerRequest,
  FormCookieParametersServerRequest,
  FormQueryParametersServerRequest,
  LabelPathParametersServerRequest,
  MatrixPathParametersServerRequest,
  PipeDelimitedQueryParametersServerRequest,
  SimpleHeaderParametersServerRequest,
  SimplePathParametersServerRequest,
  SimpleResponseHeaderParametersServerRequest,
  SpaceDelimitedQueryParametersServerRequest,
} from './requestServerTypes'
import { simpleResponseHeaderParametersResponseHeadersSerializer } from './responseHeaderSerializers'
import { formCookieParametersSetCookieSerializer } from './setCookieSerializers'
import { SimpleResponseHeaderParameters } from './types'

export function createDeepObjectQueryParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).get(
    '/deepObject-query-parameters',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const query = await adapter.getQueryParameters(toolkit, deepObjectQueryParametersQueryDeserializer)
        const typedRequest: DeepObjectQueryParametersServerRequest = {
          query,
        }
        const corsConfig = parametersCorsConfiguration?.['/deepObject-query-parameters']?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.deepObjectQueryParameters(typedRequest)
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

export function createFormCookieParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).get(
    '/form-cookie-parameters',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const cookies = await adapter.getCookieParameters(toolkit, formCookieParametersCookieDeserializer)
        const typedRequest: FormCookieParametersServerRequest = {
          cookies,
        }
        const corsConfig = parametersCorsConfiguration?.['/form-cookie-parameters']?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.formCookieParameters(typedRequest)
        const rawResponse: RawHttpResponse = {
          headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined, corsHeaders),
          statusCode: await adapter.getStatusCode(toolkit, typedResponse),
          body: await adapter.getResponseBody(toolkit, typedResponse),
          cookies: await adapter.getResponseCookies(toolkit, typedResponse, formCookieParametersSetCookieSerializer),
        }
        await adapter.respond(toolkit, rawResponse)
      } catch (error) {
        adapter.handleError(toolkit, error)
      }
    },
  )
}

export function createFormQueryParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).get(
    '/form-query-parameters',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const query = await adapter.getQueryParameters(toolkit, formQueryParametersQueryDeserializer)
        const typedRequest: FormQueryParametersServerRequest = {
          query,
        }
        const corsConfig = parametersCorsConfiguration?.['/form-query-parameters']?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.formQueryParameters(typedRequest)
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

export function createLabelPathParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).get(
    '/label-path-parameters/:strExpl/:str/:numExpl/:num/:boolExpl/:bool/:enmExpl/:enm/:strArrExpl/:strArr/:numArrExpl/:numArr/:boolArrExpl/:boolArr/:enmArrExpl/:enmArr/:objExpl/:obj',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const path = await adapter.getPathParameters(toolkit, labelPathParametersPathDeserializer)
        const typedRequest: LabelPathParametersServerRequest = {
          path,
        }
        const corsConfig =
          parametersCorsConfiguration?.[
            '/label-path-parameters/{strExpl}/{str}/{numExpl}/{num}/{boolExpl}/{bool}/{enmExpl}/{enm}/{strArrExpl}/{strArr}/{numArrExpl}/{numArr}/{boolArrExpl}/{boolArr}/{enmArrExpl}/{enmArr}/{objExpl}/{obj}'
          ]?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.labelPathParameters(typedRequest)
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

export function createMatrixPathParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).get(
    '/matrix-path-parameters/:strExpl/:str/:numExpl/:num/:boolExpl/:bool/:enmExpl/:enm/:strArrExpl/:strArr/:numArrExpl/:numArr/:boolArrExpl/:boolArr/:enmArrExpl/:enmArr/:objExpl/:obj',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const path = await adapter.getPathParameters(toolkit, matrixPathParametersPathDeserializer)
        const typedRequest: MatrixPathParametersServerRequest = {
          path,
        }
        const corsConfig =
          parametersCorsConfiguration?.[
            '/matrix-path-parameters/{strExpl}/{str}/{numExpl}/{num}/{boolExpl}/{bool}/{enmExpl}/{enm}/{strArrExpl}/{strArr}/{numArrExpl}/{numArr}/{boolArrExpl}/{boolArr}/{enmArrExpl}/{enmArr}/{objExpl}/{obj}'
          ]?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.matrixPathParameters(typedRequest)
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

export function createPipeDelimitedQueryParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).get(
    '/pipeDelimited-query-parameters',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const query = await adapter.getQueryParameters(toolkit, pipeDelimitedQueryParametersQueryDeserializer)
        const typedRequest: PipeDelimitedQueryParametersServerRequest = {
          query,
        }
        const corsConfig = parametersCorsConfiguration?.['/pipeDelimited-query-parameters']?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.pipeDelimitedQueryParameters(typedRequest)
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

export function createSimpleHeaderParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).get(
    '/simple-header-parameters',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const headers = await adapter.getRequestHeaders(toolkit, simpleHeaderParametersRequestHeadersDeserializer)
        const typedRequest: SimpleHeaderParametersServerRequest = {
          headers,
        }
        const corsConfig = parametersCorsConfiguration?.['/simple-header-parameters']?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.simpleHeaderParameters(typedRequest)
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

export function createSimplePathParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).get(
    '/simple-path-parameters/:strExpl/:str/:numExpl/:num/:boolExpl/:bool/:enmExpl/:enm/:strArrExpl/:strArr/:numArrExpl/:numArr/:boolArrExpl/:boolArr/:enmArrExpl/:enmArr/:objExpl/:obj',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const path = await adapter.getPathParameters(toolkit, simplePathParametersPathDeserializer)
        const typedRequest: SimplePathParametersServerRequest = {
          path,
        }
        const corsConfig =
          parametersCorsConfiguration?.[
            '/simple-path-parameters/{strExpl}/{str}/{numExpl}/{num}/{boolExpl}/{bool}/{enmExpl}/{enm}/{strArrExpl}/{strArr}/{numArrExpl}/{numArr}/{boolArrExpl}/{boolArr}/{enmArrExpl}/{enmArr}/{objExpl}/{obj}'
          ]?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.simplePathParameters(typedRequest)
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

export function createSimpleResponseHeaderParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).post(
    '/simple-response-header-parameters',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const mimeType = await adapter.getMimeType<'application/json'>(toolkit)
        const body = await adapter.getRequestBody<'application/json', SimpleResponseHeaderParameters>(
          toolkit,
          true,
          mimeType,
          simpleResponseHeaderParametersRequestBodyValidator,
        )
        const typedRequest: SimpleResponseHeaderParametersServerRequest = {
          mimeType,
          body,
        }
        const corsConfig = parametersCorsConfiguration?.['/simple-response-header-parameters']?.post
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.simpleResponseHeaderParameters(typedRequest)
        const rawResponse: RawHttpResponse = {
          headers: await adapter.getResponseHeaders(
            toolkit,
            typedResponse,
            simpleResponseHeaderParametersResponseHeadersSerializer,
            corsHeaders,
          ),
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

export function createSpaceDelimitedQueryParametersRouter(router?: IRouter): IRouter {
  return (router ?? Router()).get(
    '/spaceDelimited-query-parameters',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_7xzhoe']
      const api: ParametersApi = response.locals['__oats_api_7xzhoe']
      try {
        const query = await adapter.getQueryParameters(toolkit, spaceDelimitedQueryParametersQueryDeserializer)
        const typedRequest: SpaceDelimitedQueryParametersServerRequest = {
          query,
        }
        const corsConfig = parametersCorsConfiguration?.['/spaceDelimited-query-parameters']?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.spaceDelimitedQueryParameters(typedRequest)
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
