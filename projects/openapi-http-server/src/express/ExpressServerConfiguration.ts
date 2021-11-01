import { RawHttpHeaders, HttpResponse, RawHttpResponse } from '@oats-ts/openapi-http'
import { Issue } from '@oats-ts/validators'
import { RequestBodyValidators, ResponseHeadersSerializer, ServerConfiguration, Try } from '../typings'
import { ExpressParameters } from './typings'

export class ExpressServerConfiguration implements ServerConfiguration<ExpressParameters> {
  async getPathParameters<P>({ request }: ExpressParameters, deserializer: (input: string) => P): Promise<Try<P>> {
    try {
      return [[], deserializer(new URL(request.url).pathname)]
    } catch (e) {
      const issue: Issue = {
        message: e.message,
        severity: 'error',
        path: '',
        type: '',
      }
      return [[issue], undefined]
    }
  }
  async getQueryParameters<Q>({ request }: ExpressParameters, deserializer: (input: string) => Q): Promise<Try<Q>> {
    try {
      return [[], deserializer(new URL(request.url).search)]
    } catch (e) {
      const issue: Issue = {
        message: e.message,
        severity: 'error',
        path: '',
        type: '',
      }
      return [[issue], undefined]
    }
  }
  async getRequestHeaders<H>(
    { request }: ExpressParameters,
    deserializer: (input: RawHttpHeaders) => H,
  ): Promise<Try<H>> {
    try {
      // TODO investigate if express does any bs with the headers...
      return [[], deserializer(request.headers as RawHttpHeaders)]
    } catch (e) {
      const issue: Issue = {
        message: e.message,
        severity: 'error',
        path: '',
        type: '',
      }
      return [[issue], undefined]
    }
  }
  async getMimeType<M extends string>(
    { request }: ExpressParameters,
    validator: RequestBodyValidators<M>,
  ): Promise<Try<M>> {
    const contentType = request.header('Content-Type') as M
    if (contentType === null || contentType === undefined) {
      const issue: Issue = {
        message: `Missing "Content-Type" header`,
        severity: 'error',
        path: '',
        type: '',
      }
      return [[issue], undefined]
    }
    if (validator[contentType] === null || validator[contentType] === undefined) {
      const issue: Issue = {
        message: `Unexpected request "Content-Type" header "${contentType}"`,
        severity: 'error',
        path: '',
        type: '',
      }
    }
    return [[], contentType]
  }

  async getRequestBody<M extends string, B>(
    { request }: ExpressParameters,
    mimeType: M | undefined,
    validators: RequestBodyValidators<M>,
  ): Promise<Try<B>> {
    // No mimetype means that getMimeType failed
    if (mimeType === null || mimeType === undefined) {
      return [[], undefined]
    }
    const validator = validators[mimeType]
    const issues = validator(request.body)
    return issues.length > 0 ? [issues, undefined] : [[], request.body as B]
  }

  async getStatusCode(input: ExpressParameters, resp: HttpResponse): Promise<number> {
    return resp.statusCode
  }

  async getResponseBody(input: ExpressParameters, resp: HttpResponse): Promise<any> {
    if (resp.body === null || resp.body === undefined) {
      return undefined
    }
    switch (resp.mimeType) {
      case 'application/json':
        return JSON.stringify(resp.body)
      case 'text/plain':
        return `${resp.body}`
      default:
        return resp.body
    }
  }

  async getResponseHeaders(
    input: ExpressParameters,
    resp: HttpResponse,
    serializers?: ResponseHeadersSerializer,
  ): Promise<RawHttpHeaders> {
    if (serializers === null || serializers === undefined) {
      return {}
    }
    const serializer = serializers[resp.statusCode]
    if (serializers === null || serializers === undefined) {
      return {}
    }
    return serializer(resp.headers)
  }

  async respond({ response, next }: ExpressParameters, rawResponse: RawHttpResponse): Promise<void> {
    response.status(rawResponse.statusCode)
    if (rawResponse.headers !== null && rawResponse.headers !== undefined) {
      const headerNames = Object.keys(rawResponse.headers)
      for (let i = 0; i < headerNames.length; i += 1) {
        const headerName = headerNames[i]
        const headerValue = rawResponse.headers[headerName]
        response.header(headerName, headerValue)
      }
    }
    if (rawResponse.body !== null && rawResponse.body !== undefined) {
      response.send(rawResponse.body)
    }
    next()
  }
}
