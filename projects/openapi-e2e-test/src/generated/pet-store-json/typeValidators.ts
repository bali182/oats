/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import { validators } from '@oats-ts/validators'

export const errorTypeValidator = validators.object(
  validators.shape({
    code: validators.number(),
    message: validators.string(),
  }),
)

export const petTypeValidator = validators.object(
  validators.shape({
    id: validators.number(),
    name: validators.string(),
    tag: validators.optional(validators.string()),
  }),
)

export const petsTypeValidator = validators.array(validators.items(validators.lazy(() => petTypeValidator)))
