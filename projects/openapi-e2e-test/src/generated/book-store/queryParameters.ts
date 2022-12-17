/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/book-store.json (originating from oats-ts/oats-schemas)
 */

import { QueryDescriptorRule, parameters, schemas } from '@oats-ts/openapi-runtime'
import { GetBooksQueryParameters } from './queryTypes'

export const getBooksQueryParameters: QueryDescriptorRule<GetBooksQueryParameters> = {
  parameters: { offset: parameters.query.form.exploded.primitive(parameters.value.number()) },
  schema: schemas.object(schemas.shape({ offset: schemas.optional(schemas.number()) })),
}
