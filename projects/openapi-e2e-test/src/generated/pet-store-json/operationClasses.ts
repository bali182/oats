/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import {
  ClientAdapter,
  HttpMethod,
  RawHttpHeaders,
  RawHttpRequest,
  RawHttpResponse,
  RunnableOperation,
} from '@oats-ts/openapi-runtime'
import { showPetByIdPathSerializer } from './pathSerializers'
import { listPetsQuerySerializer } from './querySerializers'
import { CreatePetsRequest, ListPetsRequest, ShowPetByIdRequest } from './requestTypes'
import {
  createPetsResponseBodyValidator,
  listPetsResponseBodyValidator,
  showPetByIdResponseBodyValidator,
} from './responseBodyValidators'
import { listPetsResponseHeadersDeserializer } from './responseHeaderDeserializers'
import { CreatePetsResponse, ListPetsResponse, ShowPetByIdResponse } from './responseTypes'

/**
 * Create a pet
 */
export class CreatePetsOperation implements RunnableOperation<CreatePetsRequest, CreatePetsResponse> {
  protected readonly _local_adapter: ClientAdapter
  public constructor(_local_adapter: ClientAdapter) {
    this._local_adapter = _local_adapter
  }
  protected _local_getUrl(_local__request: CreatePetsRequest): string {
    return this._local_adapter.getUrl('/pets', undefined)
  }
  protected _local_getRequestMethod(_local__request: CreatePetsRequest): HttpMethod {
    return 'post'
  }
  protected _local_getRequestBody(_local_request: CreatePetsRequest): any {
    return this._local_adapter.getRequestBody(_local_request.mimeType, _local_request.body)
  }
  protected _local_getRequestHeaders(_local_request: CreatePetsRequest): RawHttpHeaders {
    return this._local_adapter.getRequestHeaders(undefined, _local_request.mimeType, undefined, undefined)
  }
  protected _local_getMimeType(_local_response: RawHttpResponse): string | undefined {
    return this._local_adapter.getMimeType(_local_response)
  }
  protected _local_getStatusCode(_local_response: RawHttpResponse): number | undefined {
    return this._local_adapter.getStatusCode(_local_response)
  }
  protected _local_getResponseBody(_local_response: RawHttpResponse): any {
    return this._local_adapter.getResponseBody(
      _local_response,
      this._local_getStatusCode(_local_response),
      this._local_getMimeType(_local_response),
      createPetsResponseBodyValidator,
    )
  }
  public async run(_local_request: CreatePetsRequest): Promise<CreatePetsResponse> {
    const _local_rawRequest: RawHttpRequest = {
      url: this._local_getUrl(_local_request),
      method: this._local_getRequestMethod(_local_request),
      body: this._local_getRequestBody(_local_request),
      headers: this._local_getRequestHeaders(_local_request),
    }
    const _local_rawResponse = await this._local_adapter.request(_local_rawRequest)
    const _local_typedResponse = {
      mimeType: this._local_getMimeType(_local_rawResponse),
      statusCode: this._local_getStatusCode(_local_rawResponse),
      body: this._local_getResponseBody(_local_rawResponse),
    }
    return _local_typedResponse as CreatePetsResponse
  }
}

/**
 * List all pets
 */
export class ListPetsOperation implements RunnableOperation<ListPetsRequest, ListPetsResponse> {
  protected readonly _local_adapter: ClientAdapter
  public constructor(_local_adapter: ClientAdapter) {
    this._local_adapter = _local_adapter
  }
  protected _local_getUrl(_local_request: ListPetsRequest): string {
    const _local_query = this._local_adapter.getQuery(_local_request.query, listPetsQuerySerializer)
    return this._local_adapter.getUrl('/pets', _local_query)
  }
  protected _local_getRequestMethod(_local__request: ListPetsRequest): HttpMethod {
    return 'get'
  }
  protected _local_getRequestHeaders(_local__request: ListPetsRequest): RawHttpHeaders {
    return this._local_adapter.getRequestHeaders(undefined, undefined, undefined, undefined)
  }
  protected _local_getMimeType(_local_response: RawHttpResponse): string | undefined {
    return this._local_adapter.getMimeType(_local_response)
  }
  protected _local_getStatusCode(_local_response: RawHttpResponse): number | undefined {
    return this._local_adapter.getStatusCode(_local_response)
  }
  protected _local_getResponseBody(_local_response: RawHttpResponse): any {
    return this._local_adapter.getResponseBody(
      _local_response,
      this._local_getStatusCode(_local_response),
      this._local_getMimeType(_local_response),
      listPetsResponseBodyValidator,
    )
  }
  protected _local_getResponseHeaders(_local_response: RawHttpResponse): RawHttpHeaders {
    return this._local_adapter.getResponseHeaders(
      _local_response,
      this._local_getStatusCode(_local_response),
      listPetsResponseHeadersDeserializer,
    )
  }
  public async run(_local_request: ListPetsRequest): Promise<ListPetsResponse> {
    const _local_rawRequest: RawHttpRequest = {
      url: this._local_getUrl(_local_request),
      method: this._local_getRequestMethod(_local_request),
      headers: this._local_getRequestHeaders(_local_request),
    }
    const _local_rawResponse = await this._local_adapter.request(_local_rawRequest)
    const _local_typedResponse = {
      mimeType: this._local_getMimeType(_local_rawResponse),
      statusCode: this._local_getStatusCode(_local_rawResponse),
      headers: this._local_getResponseHeaders(_local_rawResponse),
      body: this._local_getResponseBody(_local_rawResponse),
    }
    return _local_typedResponse as ListPetsResponse
  }
}

/**
 * Info for a specific pet
 */
export class ShowPetByIdOperation implements RunnableOperation<ShowPetByIdRequest, ShowPetByIdResponse> {
  protected readonly _local_adapter: ClientAdapter
  public constructor(_local_adapter: ClientAdapter) {
    this._local_adapter = _local_adapter
  }
  protected _local_getUrl(_local_request: ShowPetByIdRequest): string {
    const _local_path = this._local_adapter.getPath(_local_request.path, showPetByIdPathSerializer)
    return this._local_adapter.getUrl(_local_path, undefined)
  }
  protected _local_getRequestMethod(_local__request: ShowPetByIdRequest): HttpMethod {
    return 'get'
  }
  protected _local_getRequestHeaders(_local__request: ShowPetByIdRequest): RawHttpHeaders {
    return this._local_adapter.getRequestHeaders(undefined, undefined, undefined, undefined)
  }
  protected _local_getMimeType(_local_response: RawHttpResponse): string | undefined {
    return this._local_adapter.getMimeType(_local_response)
  }
  protected _local_getStatusCode(_local_response: RawHttpResponse): number | undefined {
    return this._local_adapter.getStatusCode(_local_response)
  }
  protected _local_getResponseBody(_local_response: RawHttpResponse): any {
    return this._local_adapter.getResponseBody(
      _local_response,
      this._local_getStatusCode(_local_response),
      this._local_getMimeType(_local_response),
      showPetByIdResponseBodyValidator,
    )
  }
  public async run(_local_request: ShowPetByIdRequest): Promise<ShowPetByIdResponse> {
    const _local_rawRequest: RawHttpRequest = {
      url: this._local_getUrl(_local_request),
      method: this._local_getRequestMethod(_local_request),
      headers: this._local_getRequestHeaders(_local_request),
    }
    const _local_rawResponse = await this._local_adapter.request(_local_rawRequest)
    const _local_typedResponse = {
      mimeType: this._local_getMimeType(_local_rawResponse),
      statusCode: this._local_getStatusCode(_local_rawResponse),
      body: this._local_getResponseBody(_local_rawResponse),
    }
    return _local_typedResponse as ShowPetByIdResponse
  }
}
