/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-yaml.yaml
 */

import { ClientAdapter, RawHttpRequest } from '@oats-ts/openapi-http'
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
