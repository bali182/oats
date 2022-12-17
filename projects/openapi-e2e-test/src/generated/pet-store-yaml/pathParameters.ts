/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/pet-store-yaml.yaml (originating from oats-ts/oats-schemas)
 */

import {
  PathDescriptorRule,
  parameters,
  parsePathToMatcher,
  parsePathToSegments,
  schemas,
} from '@oats-ts/openapi-runtime'
import { ShowPetByIdPathParameters } from './pathTypes'

export const showPetByIdPathParameters: PathDescriptorRule<ShowPetByIdPathParameters> = {
  parameters: { petId: parameters.path.simple.required.primitive(parameters.value.string()) },
  schema: schemas.object(schemas.shape({ petId: schemas.string() })),
  matcher: parsePathToMatcher('/pets/{petId}'),
  pathSegments: parsePathToSegments('/pets/{petId}'),
}
