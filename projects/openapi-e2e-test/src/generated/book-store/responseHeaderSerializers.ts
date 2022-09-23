/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/book-store.json
 */

import { createHeaderSerializer, dsl } from '@oats-ts/openapi-parameter-serialization'
import { GetBooks200ResponseHeaderParameters } from './responseHeaderTypes'

export const getBooksResponseHeadersSerializer = {
  200: createHeaderSerializer<GetBooks200ResponseHeaderParameters>({
    'x-length': dsl.header.simple.primitive(dsl.value.number(), { required: true }),
  }),
} as const
