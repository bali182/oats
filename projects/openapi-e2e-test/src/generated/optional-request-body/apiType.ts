/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/optional-request-body.json
 */

import { OptionalRequestBodyServerRequest } from './requestServerTypes'
import { OptionalRequestBodyServerResponse } from './responseServerTypes'

export type OptionalBodiesApi = {
  optionalRequestBody(request: OptionalRequestBodyServerRequest): Promise<OptionalRequestBodyServerResponse>
}
