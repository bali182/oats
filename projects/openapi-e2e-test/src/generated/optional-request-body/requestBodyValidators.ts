/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/optional-request-body.json
 */

import { validators } from '@oats-ts/validators'

export const optionalRequestBodyRequestBodyValidator = {
  'application/json': validators.optional(
    validators.object(validators.shape({ foo: validators.optional(validators.string()) })),
  ),
} as const
