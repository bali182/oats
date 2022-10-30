/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { RawHttpResponse, ServerAdapter } from '@oats-ts/openapi-runtime'
import { IRouter, NextFunction, Request, Response, Router } from 'express'
import { SwaggerPetstoreApi } from './apiType'
import { swaggerPetstoreCorsConfiguration } from './corsConfiguration'
import { showPetByIdPathDeserializer } from './pathDeserializers'
import { listPetsQueryDeserializer } from './queryDeserializers'
import { createPetsRequestBodyValidator } from './requestBodyValidators'
import { CreatePetsServerRequest, ListPetsServerRequest, ShowPetByIdServerRequest } from './requestServerTypes'
import { listPetsResponseHeadersSerializer } from './responseHeaderSerializers'
import { Pet } from './types'

export function createCreatePetsRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).post(
    '/pets',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_qslhlh']
      const api: SwaggerPetstoreApi = response.locals['__oats_api_qslhlh']
      try {
        const mimeType = await adapter.getMimeType<'application/json'>(toolkit)
        const body = await adapter.getRequestBody<'application/json', Pet>(
          toolkit,
          true,
          mimeType,
          createPetsRequestBodyValidator,
        )
        const typedRequest: CreatePetsServerRequest = {
          mimeType,
          body,
        }
        const corsConfig = swaggerPetstoreCorsConfiguration?.['/pets']?.post
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.createPets(typedRequest)
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

export function createListPetsRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).get(
    '/pets',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_qslhlh']
      const api: SwaggerPetstoreApi = response.locals['__oats_api_qslhlh']
      try {
        const query = await adapter.getQueryParameters(toolkit, listPetsQueryDeserializer)
        const typedRequest: ListPetsServerRequest = {
          query,
        }
        const corsConfig = swaggerPetstoreCorsConfiguration?.['/pets']?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.listPets(typedRequest)
        const rawResponse: RawHttpResponse = {
          headers: await adapter.getResponseHeaders(
            toolkit,
            typedResponse,
            listPetsResponseHeadersSerializer,
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

export function createShowPetByIdRouter(router?: IRouter | undefined): IRouter {
  return (router ?? Router()).get(
    '/pets/:petId',
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
      const toolkit: ExpressToolkit = { request, response, next }
      const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter_qslhlh']
      const api: SwaggerPetstoreApi = response.locals['__oats_api_qslhlh']
      try {
        const path = await adapter.getPathParameters(toolkit, showPetByIdPathDeserializer)
        const typedRequest: ShowPetByIdServerRequest = {
          path,
        }
        const corsConfig = swaggerPetstoreCorsConfiguration?.['/pets/{petId}']?.get
        const corsHeaders = await adapter.getCorsHeaders(toolkit, corsConfig)
        const typedResponse = await api.showPetById(typedRequest)
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
