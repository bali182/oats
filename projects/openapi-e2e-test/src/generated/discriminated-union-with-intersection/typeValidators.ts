/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from edge-cases/discriminated-union-with-intersection.json (originating from oats-ts/oats-schemas)
 */

import { schemas } from '@oats-ts/openapi-runtime'

export const leafIntersectionTypeTypeValidator = schemas.intersection([
  schemas.object(schemas.shape({ racoon: schemas.optional(schemas.string()) })),
  schemas.object(schemas.shape({ meerkat: schemas.optional(schemas.number()) })),
  schemas.object(schemas.shape({ type: schemas.literal('LeafIntersectionType') })),
])

export const leafType1TypeValidator = schemas.object(
  schemas.shape({
    type: schemas.literal('LeafType1'),
    foo: schemas.string(),
  }),
)

export const leafType2TypeValidator = schemas.object(
  schemas.shape({
    type: schemas.literal('LeafType2'),
    bar: schemas.string(),
  }),
)

export const leafType3TypeValidator = schemas.object(
  schemas.shape({
    type: schemas.literal('LeafType3'),
    foobar: schemas.string(),
  }),
)

export const midLevelIntersectionTypeTypeValidator = schemas.intersection([
  schemas.object(schemas.shape({ cat: schemas.optional(schemas.string()) })),
  schemas.object(schemas.shape({ dog: schemas.optional(schemas.number()) })),
  schemas.object(schemas.shape({ type: schemas.literal('MidLevelIntersectionType') })),
])

export const midLevelUnionTypeTypeValidator = schemas.union({
  LeafType2: schemas.lazy(() => leafType2TypeValidator),
  LeafType3: schemas.lazy(() => leafType3TypeValidator),
  LeafIntersectionType: schemas.lazy(() => leafIntersectionTypeTypeValidator),
})

export const topLevelUnionTypeTypeValidator = schemas.union({
  LeafType1: schemas.lazy(() => leafType1TypeValidator),
  MidLevelUnionType: schemas.lazy(() => midLevelUnionTypeTypeValidator),
  MidLevelIntersectionType: schemas.lazy(() => midLevelIntersectionTypeTypeValidator),
})
