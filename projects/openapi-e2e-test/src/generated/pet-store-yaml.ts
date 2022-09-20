/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-yaml.yaml
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { ClientAdapter, RawHttpRequest, RawHttpResponse, ServerAdapter } from '@oats-ts/openapi-http'
import {
  createHeaderDeserializer,
  createHeaderSerializer,
  createPathDeserializer,
  createPathSerializer,
  createQueryDeserializer,
  createQuerySerializer,
  dsl,
} from '@oats-ts/openapi-parameter-serialization'
import { Try } from '@oats-ts/try'
import { array, items, lazy, number, object, optional, shape, string } from '@oats-ts/validators'
import { NextFunction, Request, RequestHandler, Response, Router } from 'express'

export type SwaggerPetstoreApi = {
  /**
   * List all pets
   */
  listPets(request: ListPetsServerRequest): Promise<ListPetsServerResponse>
  /**
   * Create a pet
   */
  createPets(request: CreatePetsServerRequest): Promise<CreatePetsServerResponse>
  /**
   * Info for a specific pet
   */
  showPetById(request: ShowPetByIdServerRequest): Promise<ShowPetByIdServerResponse>
}

export const swaggerPetstoreCorsMiddleware: RequestHandler = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  response.setHeader('Access-Control-Allow-Origin', request.header('origin') ?? '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  response.setHeader('Access-Control-Allow-Headers', 'content-type')
  response.setHeader('Access-Control-Expose-Headers', 'x-next, content-type')
  next()
}

export const createPetsRouter: Router = Router()
  .options('/pets', (request: Request, response: Response, next: NextFunction) => {
    if (request.header('origin') === 'https://foo.com') {
      response.setHeader('Access-Control-Allow-Origin', request.header('origin') ?? '')
      response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
      response.setHeader('Access-Control-Allow-Headers', 'content-type')
      response.setHeader('Access-Control-Expose-Headers', 'x-next, content-type')
    }
    next()
  })
  .post('/pets', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const toolkit: ExpressToolkit = { request, response, next }
    const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter']
    const api: SwaggerPetstoreApi = response.locals['__oats_api']
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
      const typedResponse = await api.createPets(typedRequest)
      const rawResponse: RawHttpResponse = {
        headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined),
        statusCode: await adapter.getStatusCode(toolkit, typedResponse),
        body: await adapter.getResponseBody(toolkit, typedResponse),
        cookies: await adapter.getResponseCookies(toolkit, typedResponse, undefined),
      }
      return adapter.respond(toolkit, rawResponse)
    } catch (error) {
      adapter.handleError(toolkit, error)
    }
  })

export const listPetsRouter: Router = Router()
  .options('/pets', (request: Request, response: Response, next: NextFunction) => {
    if (request.header('origin') === 'https://foo.com') {
      response.setHeader('Access-Control-Allow-Origin', request.header('origin') ?? '')
      response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
      response.setHeader('Access-Control-Allow-Headers', 'content-type')
      response.setHeader('Access-Control-Expose-Headers', 'x-next, content-type')
    }
    next()
  })
  .get('/pets', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const toolkit: ExpressToolkit = { request, response, next }
    const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter']
    const api: SwaggerPetstoreApi = response.locals['__oats_api']
    try {
      const query = await adapter.getQueryParameters(toolkit, listPetsQueryDeserializer)
      const typedRequest: ListPetsServerRequest = {
        query,
      }
      const typedResponse = await api.listPets(typedRequest)
      const rawResponse: RawHttpResponse = {
        headers: await adapter.getResponseHeaders(toolkit, typedResponse, listPetsResponseHeadersSerializer),
        statusCode: await adapter.getStatusCode(toolkit, typedResponse),
        body: await adapter.getResponseBody(toolkit, typedResponse),
        cookies: await adapter.getResponseCookies(toolkit, typedResponse, undefined),
      }
      return adapter.respond(toolkit, rawResponse)
    } catch (error) {
      adapter.handleError(toolkit, error)
    }
  })

export const showPetByIdRouter: Router = Router()
  .options('/pets/:petId', (request: Request, response: Response, next: NextFunction) => {
    if (request.header('origin') === 'https://foo.com') {
      response.setHeader('Access-Control-Allow-Origin', request.header('origin') ?? '')
      response.setHeader('Access-Control-Allow-Methods', 'GET')
      response.setHeader('Access-Control-Expose-Headers', 'content-type')
    }
    next()
  })
  .get('/pets/:petId', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const toolkit: ExpressToolkit = { request, response, next }
    const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter']
    const api: SwaggerPetstoreApi = response.locals['__oats_api']
    try {
      const path = await adapter.getPathParameters(toolkit, showPetByIdPathDeserializer)
      const typedRequest: ShowPetByIdServerRequest = {
        path,
      }
      const typedResponse = await api.showPetById(typedRequest)
      const rawResponse: RawHttpResponse = {
        headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined),
        statusCode: await adapter.getStatusCode(toolkit, typedResponse),
        body: await adapter.getResponseBody(toolkit, typedResponse),
        cookies: await adapter.getResponseCookies(toolkit, typedResponse, undefined),
      }
      return adapter.respond(toolkit, rawResponse)
    } catch (error) {
      adapter.handleError(toolkit, error)
    }
  })

export function createSwaggerPetstoreRouter(
  api: SwaggerPetstoreApi,
  adapter: ServerAdapter<ExpressToolkit>,
  routes: Partial<SwaggerPetstoreRouters> = {},
): Router {
  return Router().use(
    (_, response, next) => {
      response.locals['__oats_api'] = api
      response.locals['__oats_adapter'] = adapter
      next()
    },
    routes.listPetsRouter ?? listPetsRouter,
    routes.createPetsRouter ?? createPetsRouter,
    routes.showPetByIdRouter ?? showPetByIdRouter,
  )
}

export type SwaggerPetstoreRouters = {
  listPetsRouter: Router
  createPetsRouter: Router
  showPetByIdRouter: Router
}

/**
 * Create a pet
 */
export async function createPets(request: CreatePetsRequest, adapter: ClientAdapter): Promise<CreatePetsResponse> {
  const requestUrl = await adapter.getUrl('/pets', undefined)
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
  const responseBody = await adapter.getResponseBody(rawResponse, statusCode, mimeType, createPetsResponseBodyValidator)
  return {
    mimeType,
    statusCode,
    body: responseBody,
  } as CreatePetsResponse
}

/**
 * List all pets
 */
export async function listPets(request: ListPetsRequest, adapter: ClientAdapter): Promise<ListPetsResponse> {
  const query = await adapter.getQuery(request.query, listPetsQuerySerializer)
  const requestUrl = await adapter.getUrl('/pets', query)
  const requestHeaders = await adapter.getRequestHeaders(undefined, undefined, undefined, undefined)
  const rawRequest: RawHttpRequest = {
    url: requestUrl,
    method: 'get',
    headers: requestHeaders,
  }
  const rawResponse = await adapter.request(rawRequest)
  const mimeType = await adapter.getMimeType(rawResponse)
  const statusCode = await adapter.getStatusCode(rawResponse)
  const responseHeaders = await adapter.getResponseHeaders(rawResponse, statusCode, listPetsResponseHeadersDeserializer)
  const responseBody = await adapter.getResponseBody(rawResponse, statusCode, mimeType, listPetsResponseBodyValidator)
  return {
    mimeType,
    statusCode,
    headers: responseHeaders,
    body: responseBody,
  } as ListPetsResponse
}

/**
 * Info for a specific pet
 */
export async function showPetById(request: ShowPetByIdRequest, adapter: ClientAdapter): Promise<ShowPetByIdResponse> {
  const path = await adapter.getPath(request.path, showPetByIdPathSerializer)
  const requestUrl = await adapter.getUrl(path, undefined)
  const requestHeaders = await adapter.getRequestHeaders(undefined, undefined, undefined, undefined)
  const rawRequest: RawHttpRequest = {
    url: requestUrl,
    method: 'get',
    headers: requestHeaders,
  }
  const rawResponse = await adapter.request(rawRequest)
  const mimeType = await adapter.getMimeType(rawResponse)
  const statusCode = await adapter.getStatusCode(rawResponse)
  const responseBody = await adapter.getResponseBody(
    rawResponse,
    statusCode,
    mimeType,
    showPetByIdResponseBodyValidator,
  )
  return {
    mimeType,
    statusCode,
    body: responseBody,
  } as ShowPetByIdResponse
}

export const showPetByIdPathDeserializer = createPathDeserializer<ShowPetByIdPathParameters>(
  { petId: dsl.path.simple.primitive(dsl.value.string()) },
  ['petId'],
  /^\/pets(?:\/([^\/#\?]+?))[\/#\?]?$/i,
)

export const showPetByIdPathSerializer = createPathSerializer<ShowPetByIdPathParameters>(
  { petId: dsl.path.simple.primitive(dsl.value.string()) },
  '/pets/{petId}',
)

export type ShowPetByIdPathParameters = {
  /**
   * The id of the pet to retrieve
   */
  petId: string
}

export const listPetsQueryDeserializer = createQueryDeserializer<ListPetsQueryParameters>({
  limit: dsl.query.form.primitive(dsl.value.number(), { required: false }),
})

export const listPetsQuerySerializer = createQuerySerializer<ListPetsQueryParameters>({
  limit: dsl.query.form.primitive(dsl.value.number(), { required: false }),
})

export type ListPetsQueryParameters = {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number
}

export const createPetsRequestBodyValidator = { 'application/json': lazy(() => petTypeValidator) } as const

export type CreatePetsServerRequest = {
  mimeType: 'application/json'
  body: Try<Pet>
}

export type ListPetsServerRequest = {
  query: Try<ListPetsQueryParameters>
}

export type ShowPetByIdServerRequest = {
  path: Try<ShowPetByIdPathParameters>
}

export type CreatePetsRequest = {
  mimeType: 'application/json'
  body: Pet
}

export type ListPetsRequest = {
  query?: ListPetsQueryParameters
}

export type ShowPetByIdRequest = {
  path: ShowPetByIdPathParameters
}

export const createPetsResponseBodyValidator = {
  201: { 'application/json': lazy(() => petTypeValidator) },
  default: { 'application/json': lazy(() => errorTypeValidator) },
} as const

export const listPetsResponseBodyValidator = {
  200: { 'application/json': lazy(() => petsTypeValidator) },
  default: { 'application/json': lazy(() => errorTypeValidator) },
} as const

export const showPetByIdResponseBodyValidator = {
  200: { 'application/json': lazy(() => petTypeValidator) },
  default: { 'application/json': lazy(() => errorTypeValidator) },
} as const

export const listPetsResponseHeadersDeserializer = {
  200: createHeaderDeserializer<ListPets200ResponseHeaderParameters>({
    'x-next': dsl.header.simple.primitive(dsl.value.string()),
  }),
} as const

export const listPetsResponseHeadersSerializer = {
  200: createHeaderSerializer<ListPets200ResponseHeaderParameters>({
    'x-next': dsl.header.simple.primitive(dsl.value.string()),
  }),
} as const

export type ListPets200ResponseHeaderParameters = {
  /**
   * A link to the next page of responses
   */
  'x-next'?: string
}

export type CreatePetsServerResponse =
  | {
      statusCode: 201
      mimeType: 'application/json'
      body: Pet
    }
  | {
      statusCode: Exclude<number, 201>
      mimeType: 'application/json'
      body: Error
    }

export type ListPetsServerResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: Pets
      headers?: ListPets200ResponseHeaderParameters
    }
  | {
      statusCode: Exclude<number, 200>
      mimeType: 'application/json'
      body: Error
    }

export type ShowPetByIdServerResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: Pet
    }
  | {
      statusCode: Exclude<number, 200>
      mimeType: 'application/json'
      body: Error
    }

export type CreatePetsResponse =
  | {
      statusCode: 201
      mimeType: 'application/json'
      body: Pet
    }
  | {
      statusCode: Exclude<number, 201>
      mimeType: 'application/json'
      body: Error
    }

export type ListPetsResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: Pets
      headers: ListPets200ResponseHeaderParameters
    }
  | {
      statusCode: Exclude<number, 200>
      mimeType: 'application/json'
      body: Error
    }

export type ShowPetByIdResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: Pet
    }
  | {
      statusCode: Exclude<number, 200>
      mimeType: 'application/json'
      body: Error
    }

export class SwaggerPetstoreSdkImpl implements SwaggerPetstoreSdk {
  protected readonly adapter: ClientAdapter
  public constructor(adapter: ClientAdapter) {
    this.adapter = adapter
  }
  public async listPets(request: ListPetsRequest): Promise<ListPetsResponse> {
    return listPets(request, this.adapter)
  }
  public async createPets(request: CreatePetsRequest): Promise<CreatePetsResponse> {
    return createPets(request, this.adapter)
  }
  public async showPetById(request: ShowPetByIdRequest): Promise<ShowPetByIdResponse> {
    return showPetById(request, this.adapter)
  }
}

export type SwaggerPetstoreSdk = {
  /**
   * List all pets
   */
  listPets(request: ListPetsRequest): Promise<ListPetsResponse>
  /**
   * Create a pet
   */
  createPets(request: CreatePetsRequest): Promise<CreatePetsResponse>
  /**
   * Info for a specific pet
   */
  showPetById(request: ShowPetByIdRequest): Promise<ShowPetByIdResponse>
}

export type Error = {
  code: number
  message: string
}

export type Pet = {
  id: number
  name: string
  tag?: string
}

export type Pets = Pet[]

export function isError(input: any): input is Error {
  return (
    input !== null && typeof input === 'object' && typeof input.code === 'number' && typeof input.message === 'string'
  )
}

export function isPet(input: any): input is Pet {
  return (
    input !== null &&
    typeof input === 'object' &&
    typeof input.id === 'number' &&
    typeof input.name === 'string' &&
    (input.tag === null || input.tag === undefined || typeof input.tag === 'string')
  )
}

export function isPets(input: any): input is Pets {
  return Array.isArray(input) && input.every((item: any) => isPet(item) as boolean)
}

export const errorTypeValidator = object(
  shape({
    code: number(),
    message: string(),
  }),
)

export const petTypeValidator = object(
  shape({
    id: number(),
    name: string(),
    tag: optional(string()),
  }),
)

export const petsTypeValidator = array(items(lazy(() => petTypeValidator)))
