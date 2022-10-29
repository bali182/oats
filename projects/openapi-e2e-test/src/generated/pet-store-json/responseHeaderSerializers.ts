/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import { dsl, serializers } from '@oats-ts/openapi-parameter-serialization'
import { ListPets200ResponseHeaderParameters } from './responseHeaderTypes'

export const listPetsResponseHeadersSerializer = {
  200: serializers.createHeaderSerializer<ListPets200ResponseHeaderParameters>({
    'x-next': dsl.header.simple.primitive(dsl.value.string()),
  }),
} as const
