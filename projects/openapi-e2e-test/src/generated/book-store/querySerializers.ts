/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/book-store.json
 */

import { dsl, serializers } from '@oats-ts/openapi-parameter-serialization'
import { GetBooksQueryParameters } from './queryTypes'

export const getBooksQuerySerializer = serializers.createQuerySerializer<GetBooksQueryParameters>({
  offset: dsl.query.form.primitive(dsl.value.number(), { required: false }),
})
