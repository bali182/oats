/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from generated-schemas/parameters.json (originating from oats-ts/oats-schemas)
 */

import {
  ClientAdapter as _ClientAdapter,
  HttpMethod as _HttpMethod,
  RawHttpHeaders as _RawHttpHeaders,
  RawHttpRequest as _RawHttpRequest,
  RawHttpResponse as _RawHttpResponse,
  RunnableOperation as _RunnableOperation,
  SetCookieValue as _SetCookieValue,
} from '@oats-ts/openapi-runtime'
import { formCookieParametersCookieParameters } from './cookieParameters'
import { FormCookieParametersCookieParameters } from './cookieTypes'
import {
  labelPathParametersPathParameters,
  matrixPathParametersPathParameters,
  simplePathParametersPathParameters,
} from './pathParameters'
import {
  LabelPathParametersPathParameters,
  MatrixPathParametersPathParameters,
  SimplePathParametersPathParameters,
} from './pathTypes'
import {
  deepObjectQueryParametersQueryParameters,
  formQueryParametersQueryParameters,
  pipeDelimitedQueryParametersQueryParameters,
  spaceDelimitedQueryParametersQueryParameters,
} from './queryParameters'
import {
  DeepObjectQueryParametersQueryParameters,
  FormQueryParametersQueryParameters,
  PipeDelimitedQueryParametersQueryParameters,
  SpaceDelimitedQueryParametersQueryParameters,
} from './queryTypes'
import { simpleHeaderParametersRequestHeaderParameters } from './requestHeaderParameters'
import { SimpleHeaderParametersRequestHeaderParameters } from './requestHeaderTypes'
import {
  DeepObjectQueryParametersRequest,
  FormCookieParametersRequest,
  FormQueryParametersRequest,
  LabelPathParametersRequest,
  MatrixPathParametersRequest,
  PipeDelimitedQueryParametersRequest,
  SimpleHeaderParametersRequest,
  SimplePathParametersRequest,
  SimpleResponseHeaderParametersRequest,
  SpaceDelimitedQueryParametersRequest,
} from './requestTypes'
import {
  deepObjectQueryParametersResponseBodyValidator,
  formCookieParametersResponseBodyValidator,
  formQueryParametersResponseBodyValidator,
  labelPathParametersResponseBodyValidator,
  matrixPathParametersResponseBodyValidator,
  pipeDelimitedQueryParametersResponseBodyValidator,
  simpleHeaderParametersResponseBodyValidator,
  simplePathParametersResponseBodyValidator,
  simpleResponseHeaderParametersResponseBodyValidator,
  spaceDelimitedQueryParametersResponseBodyValidator,
} from './responseBodyValidators'
import { simpleResponseHeaderParametersResponseHeaderParameters } from './responseHeaderParameters'
import {
  DeepObjectQueryParametersResponse,
  FormCookieParametersResponse,
  FormQueryParametersResponse,
  LabelPathParametersResponse,
  MatrixPathParametersResponse,
  PipeDelimitedQueryParametersResponse,
  SimpleHeaderParametersResponse,
  SimplePathParametersResponse,
  SimpleResponseHeaderParametersResponse,
  SpaceDelimitedQueryParametersResponse,
} from './responseTypes'

/**
 * Endpoint for testing query parameters with deepObject serialization
 */
export class DeepObjectQueryParametersOperation
  implements _RunnableOperation<DeepObjectQueryParametersRequest, DeepObjectQueryParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(request: DeepObjectQueryParametersRequest): string {
    const query = this.adapter.getQuery<DeepObjectQueryParametersQueryParameters>(
      request.query,
      deepObjectQueryParametersQueryParameters,
    )
    return this.adapter.getUrl('/deepObject-query-parameters', query)
  }
  protected getHttpMethod(_request: DeepObjectQueryParametersRequest): _HttpMethod {
    return 'get'
  }
  protected getRequestHeaders(_request: DeepObjectQueryParametersRequest): _RawHttpHeaders {
    return this.adapter.getAuxiliaryRequestHeaders()
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, deepObjectQueryParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: DeepObjectQueryParametersRequest): Promise<DeepObjectQueryParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as DeepObjectQueryParametersResponse
  }
}

/**
 * Endpoint for testing cookie parameters with form serialization
 */
export class FormCookieParametersOperation
  implements _RunnableOperation<FormCookieParametersRequest, FormCookieParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(_request: FormCookieParametersRequest): string {
    return this.adapter.getUrl('/form-cookie-parameters', undefined)
  }
  protected getHttpMethod(_request: FormCookieParametersRequest): _HttpMethod {
    return 'get'
  }
  protected getRequestHeaders(request: FormCookieParametersRequest): _RawHttpHeaders {
    return {
      ...this.adapter.getCookieBasedRequestHeaders<FormCookieParametersCookieParameters | undefined>(
        request.cookies,
        formCookieParametersCookieParameters,
      ),
      ...this.adapter.getAuxiliaryRequestHeaders(),
    }
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, formCookieParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: FormCookieParametersRequest): Promise<FormCookieParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as FormCookieParametersResponse
  }
}

/**
 * Endpoint for testing query parameters with form serialization
 */
export class FormQueryParametersOperation
  implements _RunnableOperation<FormQueryParametersRequest, FormQueryParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(request: FormQueryParametersRequest): string {
    const query = this.adapter.getQuery<FormQueryParametersQueryParameters>(
      request.query,
      formQueryParametersQueryParameters,
    )
    return this.adapter.getUrl('/form-query-parameters', query)
  }
  protected getHttpMethod(_request: FormQueryParametersRequest): _HttpMethod {
    return 'get'
  }
  protected getRequestHeaders(_request: FormQueryParametersRequest): _RawHttpHeaders {
    return this.adapter.getAuxiliaryRequestHeaders()
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, formQueryParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: FormQueryParametersRequest): Promise<FormQueryParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as FormQueryParametersResponse
  }
}

/**
 * Endpoint for testing path parameters with label serialization
 */
export class LabelPathParametersOperation
  implements _RunnableOperation<LabelPathParametersRequest, LabelPathParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(request: LabelPathParametersRequest): string {
    const path = this.adapter.getPath<LabelPathParametersPathParameters>(
      request.path,
      labelPathParametersPathParameters,
    )
    return this.adapter.getUrl(path, undefined)
  }
  protected getHttpMethod(_request: LabelPathParametersRequest): _HttpMethod {
    return 'get'
  }
  protected getRequestHeaders(_request: LabelPathParametersRequest): _RawHttpHeaders {
    return this.adapter.getAuxiliaryRequestHeaders()
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, labelPathParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: LabelPathParametersRequest): Promise<LabelPathParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as LabelPathParametersResponse
  }
}

/**
 * Endpoint for testing path parameters with matrix serialization
 */
export class MatrixPathParametersOperation
  implements _RunnableOperation<MatrixPathParametersRequest, MatrixPathParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(request: MatrixPathParametersRequest): string {
    const path = this.adapter.getPath<MatrixPathParametersPathParameters>(
      request.path,
      matrixPathParametersPathParameters,
    )
    return this.adapter.getUrl(path, undefined)
  }
  protected getHttpMethod(_request: MatrixPathParametersRequest): _HttpMethod {
    return 'get'
  }
  protected getRequestHeaders(_request: MatrixPathParametersRequest): _RawHttpHeaders {
    return this.adapter.getAuxiliaryRequestHeaders()
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, matrixPathParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: MatrixPathParametersRequest): Promise<MatrixPathParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as MatrixPathParametersResponse
  }
}

/**
 * Endpoint for testing query parameters with pipeDelimited serialization
 */
export class PipeDelimitedQueryParametersOperation
  implements _RunnableOperation<PipeDelimitedQueryParametersRequest, PipeDelimitedQueryParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(request: PipeDelimitedQueryParametersRequest): string {
    const query = this.adapter.getQuery<PipeDelimitedQueryParametersQueryParameters>(
      request.query,
      pipeDelimitedQueryParametersQueryParameters,
    )
    return this.adapter.getUrl('/pipeDelimited-query-parameters', query)
  }
  protected getHttpMethod(_request: PipeDelimitedQueryParametersRequest): _HttpMethod {
    return 'get'
  }
  protected getRequestHeaders(_request: PipeDelimitedQueryParametersRequest): _RawHttpHeaders {
    return this.adapter.getAuxiliaryRequestHeaders()
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, pipeDelimitedQueryParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: PipeDelimitedQueryParametersRequest): Promise<PipeDelimitedQueryParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as PipeDelimitedQueryParametersResponse
  }
}

/**
 * Endpoint for testing header parameters with simple serialization
 */
export class SimpleHeaderParametersOperation
  implements _RunnableOperation<SimpleHeaderParametersRequest, SimpleHeaderParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(_request: SimpleHeaderParametersRequest): string {
    return this.adapter.getUrl('/simple-header-parameters', undefined)
  }
  protected getHttpMethod(_request: SimpleHeaderParametersRequest): _HttpMethod {
    return 'get'
  }
  protected getRequestHeaders(request: SimpleHeaderParametersRequest): _RawHttpHeaders {
    return {
      ...this.adapter.getParameterBasedRequestHeaders<SimpleHeaderParametersRequestHeaderParameters>(
        request.headers,
        simpleHeaderParametersRequestHeaderParameters,
      ),
      ...this.adapter.getAuxiliaryRequestHeaders(),
    }
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, simpleHeaderParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: SimpleHeaderParametersRequest): Promise<SimpleHeaderParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as SimpleHeaderParametersResponse
  }
}

/**
 * Endpoint for testing path parameters with simple serialization
 */
export class SimplePathParametersOperation
  implements _RunnableOperation<SimplePathParametersRequest, SimplePathParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(request: SimplePathParametersRequest): string {
    const path = this.adapter.getPath<SimplePathParametersPathParameters>(
      request.path,
      simplePathParametersPathParameters,
    )
    return this.adapter.getUrl(path, undefined)
  }
  protected getHttpMethod(_request: SimplePathParametersRequest): _HttpMethod {
    return 'get'
  }
  protected getRequestHeaders(_request: SimplePathParametersRequest): _RawHttpHeaders {
    return this.adapter.getAuxiliaryRequestHeaders()
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, simplePathParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: SimplePathParametersRequest): Promise<SimplePathParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as SimplePathParametersResponse
  }
}

/**
 * Endpoint for testing response-header parameters with simple serialization
 */
export class SimpleResponseHeaderParametersOperation
  implements _RunnableOperation<SimpleResponseHeaderParametersRequest, SimpleResponseHeaderParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(_request: SimpleResponseHeaderParametersRequest): string {
    return this.adapter.getUrl('/simple-response-header-parameters', undefined)
  }
  protected getHttpMethod(_request: SimpleResponseHeaderParametersRequest): _HttpMethod {
    return 'post'
  }
  protected getRequestHeaders(request: SimpleResponseHeaderParametersRequest): _RawHttpHeaders {
    return {
      ...this.adapter.getMimeTypeBasedRequestHeaders(request.mimeType),
      ...this.adapter.getAuxiliaryRequestHeaders(),
    }
  }
  protected getRequestBody(request: SimpleResponseHeaderParametersRequest): any {
    return this.adapter.getRequestBody(request.mimeType, request.body)
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseHeaders(response: _RawHttpResponse): _RawHttpHeaders {
    return this.adapter.getResponseHeaders(response, simpleResponseHeaderParametersResponseHeaderParameters)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, simpleResponseHeaderParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: SimpleResponseHeaderParametersRequest): Promise<SimpleResponseHeaderParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
      body: this.getRequestBody(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      headers: this.getResponseHeaders(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as SimpleResponseHeaderParametersResponse
  }
}

/**
 * Endpoint for testing query parameters with spaceDelimited serialization
 */
export class SpaceDelimitedQueryParametersOperation
  implements _RunnableOperation<SpaceDelimitedQueryParametersRequest, SpaceDelimitedQueryParametersResponse>
{
  protected readonly adapter: _ClientAdapter
  public constructor(adapter: _ClientAdapter) {
    this.adapter = adapter
  }
  protected getUrl(request: SpaceDelimitedQueryParametersRequest): string {
    const query = this.adapter.getQuery<SpaceDelimitedQueryParametersQueryParameters>(
      request.query,
      spaceDelimitedQueryParametersQueryParameters,
    )
    return this.adapter.getUrl('/spaceDelimited-query-parameters', query)
  }
  protected getHttpMethod(_request: SpaceDelimitedQueryParametersRequest): _HttpMethod {
    return 'get'
  }
  protected getRequestHeaders(_request: SpaceDelimitedQueryParametersRequest): _RawHttpHeaders {
    return this.adapter.getAuxiliaryRequestHeaders()
  }
  protected getMimeType(response: _RawHttpResponse): string | undefined {
    return this.adapter.getMimeType(response)
  }
  protected getStatusCode(response: _RawHttpResponse): number | undefined {
    return this.adapter.getStatusCode(response)
  }
  protected getResponseBody(response: _RawHttpResponse): any {
    return this.adapter.getResponseBody(response, spaceDelimitedQueryParametersResponseBodyValidator)
  }
  protected getResponseCookies(response: _RawHttpResponse): _SetCookieValue[] {
    return this.adapter.getResponseCookies(response)
  }
  public async run(request: SpaceDelimitedQueryParametersRequest): Promise<SpaceDelimitedQueryParametersResponse> {
    const rawRequest: _RawHttpRequest = {
      url: this.getUrl(request),
      method: this.getHttpMethod(request),
      headers: this.getRequestHeaders(request),
    }
    const rawResponse = await this.adapter.request(rawRequest)
    const typedResponse = {
      mimeType: this.getMimeType(rawResponse),
      statusCode: this.getStatusCode(rawResponse),
      body: this.getResponseBody(rawResponse),
      cookies: this.getResponseCookies(rawResponse),
    }
    return typedResponse as SpaceDelimitedQueryParametersResponse
  }
}
