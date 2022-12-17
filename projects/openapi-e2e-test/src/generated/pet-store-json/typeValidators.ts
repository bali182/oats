/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/pet-store-json.json (originating from oats-ts/oats-schemas)
 */

import { schemas } from '@oats-ts/openapi-runtime'

export const errorTypeValidator = schemas.object(
  schemas.shape({
    code: schemas.number(),
    message: schemas.string(),
  }),
)

export const petTypeValidator = schemas.object(
  schemas.shape({
    id: schemas.number(),
    name: schemas.string(),
    tag: schemas.optional(schemas.string()),
  }),
)

export const petsTypeValidator = schemas.array(schemas.items(schemas.lazy(() => petTypeValidator)))
