/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/pet-store-json.json (originating from oats-ts/oats-schemas)
 */

import {
  PathParameters,
  parameter,
  parsePathToMatcher,
  parsePathToSegments,
  validators,
} from '@oats-ts/openapi-runtime'
import { ShowPetByIdPathParameters } from './pathTypes'

export const showPetByIdPathParameters: PathParameters<ShowPetByIdPathParameters> = {
  descriptor: { petId: parameter.path.simple.required.primitive(parameter.value.string()) },
  schema: validators.object(validators.shape({ petId: validators.string() })),
  matcher: parsePathToMatcher('/pets/{petId}'),
  pathSegments: parsePathToSegments('/pets/{petId}'),
}
