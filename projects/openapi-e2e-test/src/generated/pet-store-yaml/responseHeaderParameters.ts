/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/pet-store-yaml.yaml (originating from oats-ts/oats-schemas)
 */

import { parameter } from '@oats-ts/openapi-runtime'

export const listPetsResponseHeaderParameters = {
  200: { 'x-next': parameter.header.simple.primitive(parameter.value.string()) },
} as const
