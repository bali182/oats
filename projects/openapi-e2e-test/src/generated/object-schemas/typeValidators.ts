/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/object-schemas.json
 */

import { validators } from '@oats-ts/validators'

export const objectWithNestedTypeFieldsTypeTypeValidator = validators.object(
  validators.shape({
    arrayField: validators.array(validators.items(validators.string())),
    enumField: validators.union({
      A: validators.literal('A'),
      B: validators.literal('B'),
      C: validators.literal('C'),
    }),
    objectField: validators.object(validators.shape({ nestedField: validators.optional(validators.string()) })),
    tupleField: validators.array(
      validators.tuple(validators.optional(validators.string()), validators.optional(validators.number())),
    ),
  }),
)

export const objectWithOptionalPrimitiveFieldsTypeTypeValidator = validators.object(
  validators.shape({
    booleanField: validators.optional(validators.boolean()),
    numberField: validators.optional(validators.number()),
    stringField: validators.optional(validators.string()),
  }),
)

export const objectWithPrimitiveFieldsTypeTypeValidator = validators.object(
  validators.shape({
    booleanField: validators.boolean(),
    numberField: validators.number(),
    stringField: validators.string(),
  }),
)

export const objectWithReferenceFieldsTypeTypeValidator = validators.object(
  validators.shape({
    referenceArrayField: validators.array(validators.items(validators.lazy(() => referenceTargetTypeValidator))),
    referenceField: validators.lazy(() => referenceTargetTypeValidator),
  }),
)

export const referenceTargetTypeValidator = validators.object(
  validators.shape({ referenceTarget: validators.optional(validators.literal(true)) }),
)
