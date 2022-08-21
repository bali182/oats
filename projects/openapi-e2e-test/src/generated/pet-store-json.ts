/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
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

export type ListPetsQueryParameters = {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number
}

export type ShowPetByIdPathParameters = {
  /**
   * The id of the pet to retrieve
   */
  petId: string
}

export type ListPets200ResponseHeaderParameters = {
  /**
   * A link to the next page of responses
   */
  'x-next'?: string
}

export type CreatePetsResponse =
  | {
      mimeType: 'application/json'
      statusCode: 201
      body: Pet
    }
  | {
      mimeType: 'application/json'
      statusCode: Exclude<number, 201>
      body: Error
    }

export type ListPetsResponse =
  | {
      mimeType: 'application/json'
      statusCode: 200
      body: Pets
      headers: ListPets200ResponseHeaderParameters
    }
  | {
      mimeType: 'application/json'
      statusCode: Exclude<number, 200>
      body: Error
    }

export type ShowPetByIdResponse =
  | {
      mimeType: 'application/json'
      statusCode: 200
      body: Pet
    }
  | {
      mimeType: 'application/json'
      statusCode: Exclude<number, 200>
      body: Error
    }

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

export const createPetsRequestBodyValidator = { 'application/json': petTypeValidator } as const

export const listPetsResponseHeadersSerializer = {
  200: createHeaderSerializer<ListPets200ResponseHeaderParameters>({
    'x-next': dsl.header.simple.primitive(dsl.value.string()),
  }),
} as const

export const showPetByIdPathDeserializer = createPathDeserializer<ShowPetByIdPathParameters>(
  { petId: dsl.path.simple.primitive(dsl.value.string()) },
  ['petId'],
  /^\/pets(?:\/([^\/#\?]+?))[\/#\?]?$/i,
)

export const listPetsQueryDeserializer = createQueryDeserializer<ListPetsQueryParameters>({
  limit: dsl.query.form.primitive(dsl.value.number(), { required: false }),
})

export type SwaggerPetstoreApi = {
  /**
   * List all pets
   */
  listPets(request: ListPetsServerRequest): Promise<ListPetsResponse>
  /**
   * Create a pet
   */
  createPets(request: CreatePetsServerRequest): Promise<CreatePetsResponse>
  /**
   * Info for a specific pet
   */
  showPetById(request: ShowPetByIdServerRequest): Promise<ShowPetByIdResponse>
}

export const createPetsRouter: Router = Router()
  .options('/pets', (request: Request, response: Response, next: NextFunction) => {
    response.setHeader('Access-Control-Allow-Origin', request.header('origin') ?? '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    response.setHeader('Access-Control-Allow-Headers', 'content-type')
    response.setHeader('Access-Control-Expose-Headers', 'x-next, content-type')
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
      }
      return adapter.respond(toolkit, rawResponse)
    } catch (error) {
      adapter.handleError(toolkit, error)
    }
  })

export const listPetsRouter: Router = Router()
  .options('/pets', (request: Request, response: Response, next: NextFunction) => {
    response.setHeader('Access-Control-Allow-Origin', request.header('origin') ?? '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    response.setHeader('Access-Control-Allow-Headers', 'content-type')
    response.setHeader('Access-Control-Expose-Headers', 'x-next, content-type')
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
      }
      return adapter.respond(toolkit, rawResponse)
    } catch (error) {
      adapter.handleError(toolkit, error)
    }
  })

export const showPetByIdRouter: Router = Router()
  .options('/pets/:petId', (request: Request, response: Response, next: NextFunction) => {
    response.setHeader('Access-Control-Allow-Origin', request.header('origin') ?? '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET')
    response.setHeader('Access-Control-Expose-Headers', 'content-type')
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
      }
      return adapter.respond(toolkit, rawResponse)
    } catch (error) {
      adapter.handleError(toolkit, error)
    }
  })

export type SwaggerPetstoreRouters = {
  listPetsRouter: Router
  createPetsRouter: Router
  showPetByIdRouter: Router
}

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

export type CreatePetsRequest = {
  mimeType: 'application/json'
  body: Pet
}

export type ListPetsRequest = {
  query: ListPetsQueryParameters
}

export type ShowPetByIdRequest = {
  path: ShowPetByIdPathParameters
}

export const createPetsResponseBodyValidator = {
  201: { 'application/json': petTypeValidator },
  default: { 'application/json': errorTypeValidator },
} as const

export const listPetsResponseBodyValidator = {
  200: { 'application/json': petsTypeValidator },
  default: { 'application/json': errorTypeValidator },
} as const

export const showPetByIdResponseBodyValidator = {
  200: { 'application/json': petTypeValidator },
  default: { 'application/json': errorTypeValidator },
} as const

export const listPetsResponseHeadersDeserializer = {
  200: createHeaderDeserializer<ListPets200ResponseHeaderParameters>({
    'x-next': dsl.header.simple.primitive(dsl.value.string()),
  }),
} as const

export const showPetByIdPathSerializer = createPathSerializer<ShowPetByIdPathParameters>(
  { petId: dsl.path.simple.primitive(dsl.value.string()) },
  '/pets/{petId}',
)

export const listPetsQuerySerializer = createQuerySerializer<ListPetsQueryParameters>({
  limit: dsl.query.form.primitive(dsl.value.number(), { required: false }),
})

/**
 * Create a pet
 */
export async function createPets(request: CreatePetsRequest, adapter: ClientAdapter): Promise<CreatePetsResponse> {
  const requestUrl = await adapter.getUrl('/pets', undefined)
  const requestHeaders = await adapter.getRequestHeaders(undefined, request.mimeType, undefined)
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
  const requestHeaders = await adapter.getRequestHeaders(undefined, undefined, undefined)
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
  const requestHeaders = await adapter.getRequestHeaders(undefined, undefined, undefined)
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
