/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/optional-request-body.json
 */

import { Try } from '@oats-ts/openapi-runtime'

export type OptionalRequestBodyServerRequest = {
  mimeType?: 'application/json'
  body: Try<
    | {
        foo?: string
      }
    | undefined
  >
}
