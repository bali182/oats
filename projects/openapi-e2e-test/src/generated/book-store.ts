/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/book-store.json
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { ClientAdapter, RawHttpRequest, RawHttpResponse, ServerAdapter } from '@oats-ts/openapi-http'
import {
  createHeaderDeserializer,
  createPathDeserializer,
  createQueryDeserializer,
  deserializers,
} from '@oats-ts/openapi-parameter-deserialization'
import {
  createHeaderSerializer,
  createPathSerializer,
  createQuerySerializer,
  serializers,
} from '@oats-ts/openapi-parameter-serialization'
import { Try } from '@oats-ts/try'
import { array, items, lazy, number, object, optional, shape, string } from '@oats-ts/validators'
import { NextFunction, Request, RequestHandler, Response, Router } from 'express'

export type AppError = {
  message: string
}

export type Book = {
  author: string
  description?: string
  id: number
  price: number
  title: string
}

export const appErrorTypeValidator = object(shape({ message: string() }))

export const bookTypeValidator = object(
  shape({
    author: string(),
    description: optional(string()),
    id: number(),
    price: number(),
    title: string(),
  }),
)

export function isAppError(input: any): input is AppError {
  return input !== null && typeof input === 'object' && typeof input.message === 'string'
}

export function isBook(input: any): input is Book {
  return (
    input !== null &&
    typeof input === 'object' &&
    typeof input.author === 'string' &&
    (input.description === null || input.description === undefined || typeof input.description === 'string') &&
    typeof input.id === 'number' &&
    typeof input.price === 'number' &&
    typeof input.title === 'string'
  )
}

export type GetBooksQueryParameters = {
  /**
   * Parameter used for pagination, the index of the first record
   */
  offset?: number
}

export type GetBookPathParameters = {
  /**
   * The id of the book
   */
  bookId: number
}

export type GetBooksRequestHeaderParameters = {
  /**
   * Parameter used for pagination, the amount of records you need
   */
  'x-limit'?: number
}

export type GetBooks200ResponseHeaderParameters = {
  /**
   * The number of records returned
   */
  'x-length': number
}

export type AddBookResponse =
  | {
      mimeType: 'application/json'
      statusCode: 201
      body: Book
    }
  | {
      mimeType: 'application/json'
      statusCode: 400
      body: AppError[]
    }
  | {
      mimeType: 'application/json'
      statusCode: 500
      body: AppError[]
    }

export type GetBookResponse =
  | {
      mimeType: 'application/json'
      statusCode: 200
      body: Book
    }
  | {
      mimeType: 'application/json'
      statusCode: 400
      body: AppError[]
    }
  | {
      mimeType: 'application/json'
      statusCode: 500
      body: AppError[]
    }

export type GetBooksResponse =
  | {
      mimeType: 'application/json'
      statusCode: 200
      body: Book[]
      headers: GetBooks200ResponseHeaderParameters
    }
  | {
      mimeType: 'application/json'
      statusCode: 400
      body: AppError[]
    }
  | {
      mimeType: 'application/json'
      statusCode: 500
      body: AppError[]
    }

export type AddBookServerRequest = {
  mimeType: 'application/json'
  body: Try<Book>
}

export type GetBookServerRequest = {
  path: Try<GetBookPathParameters>
}

export type GetBooksServerRequest = {
  headers: Try<GetBooksRequestHeaderParameters>
  query: Try<GetBooksQueryParameters>
}

export const addBookRequestBodyValidator = { 'application/json': bookTypeValidator } as const

export const getBooksResponseHeadersSerializer = {
  200: createHeaderSerializer<GetBooks200ResponseHeaderParameters>({
    'x-length': serializers.header.simple.primitive<number>({ required: true }),
  }),
} as const

export const getBookPathDeserializer = createPathDeserializer<GetBookPathParameters>(
  ['bookId'],
  /^\/books(?:\/([^\/#\?]+?))[\/#\?]?$/i,
  { bookId: deserializers.path.simple.primitive(deserializers.value.number(), {}) },
)

export const getBooksQueryDeserializer = createQueryDeserializer<GetBooksQueryParameters>({
  offset: deserializers.query.form.primitive(deserializers.value.number(), { required: false }),
})

export const getBooksRequestHeadersDeserializer = createHeaderDeserializer<GetBooksRequestHeaderParameters>({
  'x-limit': deserializers.header.simple.primitive(deserializers.value.number(), { required: false }),
})

export type BookStoreApi = {
  /**
   * Creates a new book based on the request body.
   */
  addBook(request: AddBookServerRequest): Promise<AddBookResponse>
  /**
   * Returns the book associated with the given bookId
   */
  getBook(request: GetBookServerRequest): Promise<GetBookResponse>
  /**
   * Returns a list of books, can be paginated
   */
  getBooks(request: GetBooksServerRequest): Promise<GetBooksResponse>
}

export const addBookRouter: Router = Router().post(
  '/books',
  async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const toolkit: ExpressToolkit = { request, response, next }
    const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter']
    const api: BookStoreApi = response.locals['__oats_api']
    try {
      const mimeType = await adapter.getMimeType<'application/json'>(toolkit)
      const body = await adapter.getRequestBody<'application/json', Book>(
        toolkit,
        true,
        mimeType,
        addBookRequestBodyValidator,
      )
      const typedRequest: AddBookServerRequest = {
        mimeType,
        body,
      }
      const typedResponse = await api.addBook(typedRequest)
      const rawResponse: RawHttpResponse = {
        headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined),
        statusCode: await adapter.getStatusCode(toolkit, typedResponse),
        body: await adapter.getResponseBody(toolkit, typedResponse),
      }
      return adapter.respond(toolkit, rawResponse)
    } catch (error) {
      adapter.handleError(toolkit, error)
    }
  },
)

export const getBookRouter: Router = Router().get(
  '/books/:bookId',
  async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const toolkit: ExpressToolkit = { request, response, next }
    const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter']
    const api: BookStoreApi = response.locals['__oats_api']
    try {
      const path = await adapter.getPathParameters(toolkit, getBookPathDeserializer)
      const typedRequest: GetBookServerRequest = {
        path,
      }
      const typedResponse = await api.getBook(typedRequest)
      const rawResponse: RawHttpResponse = {
        headers: await adapter.getResponseHeaders(toolkit, typedResponse, undefined),
        statusCode: await adapter.getStatusCode(toolkit, typedResponse),
        body: await adapter.getResponseBody(toolkit, typedResponse),
      }
      return adapter.respond(toolkit, rawResponse)
    } catch (error) {
      adapter.handleError(toolkit, error)
    }
  },
)

export const getBooksRouter: Router = Router().get(
  '/books',
  async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const toolkit: ExpressToolkit = { request, response, next }
    const adapter: ServerAdapter<ExpressToolkit> = response.locals['__oats_adapter']
    const api: BookStoreApi = response.locals['__oats_api']
    try {
      const query = await adapter.getQueryParameters(toolkit, getBooksQueryDeserializer)
      const headers = await adapter.getRequestHeaders(toolkit, getBooksRequestHeadersDeserializer)
      const typedRequest: GetBooksServerRequest = {
        query,
        headers,
      }
      const typedResponse = await api.getBooks(typedRequest)
      const rawResponse: RawHttpResponse = {
        headers: await adapter.getResponseHeaders(toolkit, typedResponse, getBooksResponseHeadersSerializer),
        statusCode: await adapter.getStatusCode(toolkit, typedResponse),
        body: await adapter.getResponseBody(toolkit, typedResponse),
      }
      return adapter.respond(toolkit, rawResponse)
    } catch (error) {
      adapter.handleError(toolkit, error)
    }
  },
)

export type BookStoreRouters = {
  addBookRouter: Router
  getBookRouter: Router
  getBooksRouter: Router
}

export function createBookStoreRouter(
  api: BookStoreApi,
  adapter: ServerAdapter<ExpressToolkit>,
  routes: Partial<BookStoreRouters> = {},
): Router {
  return Router().use(
    (_, response, next) => {
      response.locals['__oats_api'] = api
      response.locals['__oats_adapter'] = adapter
      next()
    },
    routes.addBookRouter ?? addBookRouter,
    routes.getBookRouter ?? getBookRouter,
    routes.getBooksRouter ?? getBooksRouter,
  )
}

export const bookStoreCorsMiddleware =
  (isAccepted: (request: Request) => boolean): RequestHandler =>
  (request: Request, response: Response, next: NextFunction) => {
    if (isAccepted(request)) {
      response.setHeader('Access-Control-Allow-Origin', request.headers.origin ?? '*')
      response.setHeader('Access-Control-Allow-Methods', 'POST, GET')
      response.setHeader('Access-Control-Allow-Headers', 'x-length, content-type')
    }
    next()
  }

export type AddBookRequest = {
  mimeType: 'application/json'
  body: Book
}

export type GetBookRequest = {
  path: GetBookPathParameters
}

export type GetBooksRequest = {
  headers: GetBooksRequestHeaderParameters
  query: GetBooksQueryParameters
}

export const addBookResponseBodyValidator = {
  201: { 'application/json': bookTypeValidator },
  400: { 'application/json': array(items(lazy(() => appErrorTypeValidator))) },
  500: { 'application/json': array(items(lazy(() => appErrorTypeValidator))) },
} as const

export const getBookResponseBodyValidator = {
  200: { 'application/json': bookTypeValidator },
  400: { 'application/json': array(items(lazy(() => appErrorTypeValidator))) },
  500: { 'application/json': array(items(lazy(() => appErrorTypeValidator))) },
} as const

export const getBooksResponseBodyValidator = {
  200: { 'application/json': array(items(lazy(() => bookTypeValidator))) },
  400: { 'application/json': array(items(lazy(() => appErrorTypeValidator))) },
  500: { 'application/json': array(items(lazy(() => appErrorTypeValidator))) },
} as const

export const getBooksResponseHeadersDeserializer = {
  200: createHeaderDeserializer<GetBooks200ResponseHeaderParameters>({
    'x-length': deserializers.header.simple.primitive(deserializers.value.number(), { required: true }),
  }),
} as const

export const getBookPathSerializer = createPathSerializer<GetBookPathParameters>('/books/{bookId}', {
  bookId: serializers.path.simple.primitive<number>({}),
})

export const getBooksQuerySerializer = createQuerySerializer<GetBooksQueryParameters>({
  offset: serializers.query.form.primitive<number | undefined>({ required: false }),
})

export const getBooksRequestHeadersSerializer = createHeaderSerializer<GetBooksRequestHeaderParameters>({
  'x-limit': serializers.header.simple.primitive<number | undefined>({ required: false }),
})

/**
 * Creates a new book based on the request body.
 */
export async function addBook(input: AddBookRequest, adapter: ClientAdapter): Promise<AddBookResponse> {
  const requestUrl = await adapter.getUrl('/books', undefined)
  const requestHeaders = await adapter.getRequestHeaders(input, undefined)
  const requestBody = await adapter.getRequestBody(input)
  const rawRequest: RawHttpRequest = {
    url: requestUrl,
    method: 'post',
    body: requestBody,
    headers: requestHeaders,
  }
  const rawResponse = await adapter.request(rawRequest)
  const mimeType = await adapter.getMimeType(rawResponse)
  const statusCode = await adapter.getStatusCode(rawResponse)
  const responseHeaders = await adapter.getResponseHeaders(rawResponse, statusCode, undefined)
  const responseBody = await adapter.getResponseBody(rawResponse, statusCode, mimeType, addBookResponseBodyValidator)
  const response = {
    mimeType,
    statusCode,
    headers: responseHeaders,
    body: responseBody,
  } as AddBookResponse
  return response
}

/**
 * Returns the book associated with the given bookId
 */
export async function getBook(input: GetBookRequest, adapter: ClientAdapter): Promise<GetBookResponse> {
  const path = await adapter.getPath(input, getBookPathSerializer)
  const requestUrl = await adapter.getUrl(path, undefined)
  const requestHeaders = await adapter.getRequestHeaders(input, undefined)
  const rawRequest: RawHttpRequest = {
    url: requestUrl,
    method: 'get',
    headers: requestHeaders,
  }
  const rawResponse = await adapter.request(rawRequest)
  const mimeType = await adapter.getMimeType(rawResponse)
  const statusCode = await adapter.getStatusCode(rawResponse)
  const responseHeaders = await adapter.getResponseHeaders(rawResponse, statusCode, undefined)
  const responseBody = await adapter.getResponseBody(rawResponse, statusCode, mimeType, getBookResponseBodyValidator)
  const response = {
    mimeType,
    statusCode,
    headers: responseHeaders,
    body: responseBody,
  } as GetBookResponse
  return response
}

/**
 * Returns a list of books, can be paginated
 */
export async function getBooks(input: GetBooksRequest, adapter: ClientAdapter): Promise<GetBooksResponse> {
  const query = await adapter.getQuery(input, getBooksQuerySerializer)
  const requestUrl = await adapter.getUrl('/books', query)
  const requestHeaders = await adapter.getRequestHeaders(input, getBooksRequestHeadersSerializer)
  const rawRequest: RawHttpRequest = {
    url: requestUrl,
    method: 'get',
    headers: requestHeaders,
  }
  const rawResponse = await adapter.request(rawRequest)
  const mimeType = await adapter.getMimeType(rawResponse)
  const statusCode = await adapter.getStatusCode(rawResponse)
  const responseHeaders = await adapter.getResponseHeaders(rawResponse, statusCode, getBooksResponseHeadersDeserializer)
  const responseBody = await adapter.getResponseBody(rawResponse, statusCode, mimeType, getBooksResponseBodyValidator)
  const response = {
    mimeType,
    statusCode,
    headers: responseHeaders,
    body: responseBody,
  } as GetBooksResponse
  return response
}

export type BookStoreSdk = {
  /**
   * Creates a new book based on the request body.
   */
  addBook(input: AddBookRequest): Promise<AddBookResponse>
  /**
   * Returns the book associated with the given bookId
   */
  getBook(input: GetBookRequest): Promise<GetBookResponse>
  /**
   * Returns a list of books, can be paginated
   */
  getBooks(input: GetBooksRequest): Promise<GetBooksResponse>
}

export class BookStoreSdkImpl implements BookStoreSdk {
  protected readonly adapter: ClientAdapter
  public constructor(adapter: ClientAdapter) {
    this.adapter = adapter
  }
  public async addBook(input: AddBookRequest): Promise<AddBookResponse> {
    return addBook(input, this.adapter)
  }
  public async getBook(input: GetBookRequest): Promise<GetBookResponse> {
    return getBook(input, this.adapter)
  }
  public async getBooks(input: GetBooksRequest): Promise<GetBooksResponse> {
    return getBooks(input, this.adapter)
  }
}

export class BookStoreSdkStub implements BookStoreSdk {
  public async addBook(_input: AddBookRequest): Promise<AddBookResponse> {
    throw new Error('Stub method "addBook" called. You should implement this method if you want to use it.')
  }
  public async getBook(_input: GetBookRequest): Promise<GetBookResponse> {
    throw new Error('Stub method "getBook" called. You should implement this method if you want to use it.')
  }
  public async getBooks(_input: GetBooksRequest): Promise<GetBooksResponse> {
    throw new Error('Stub method "getBooks" called. You should implement this method if you want to use it.')
  }
}
