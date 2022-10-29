/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/references.json
 */

import { validators } from '@oats-ts/validators'

export const inlineRefTargetTypeValidator = validators.object(
  validators.shape({ foo: validators.optional(validators.string()) }),
)

export const inlineRefTypeTypeValidator = validators.lazy(() => inlineRefTargetTypeValidator)

export const referenceTargetTypeValidator = validators.object(
  validators.shape({ referenceTarget: validators.optional(validators.literal(true)) }),
)

export const remoteRefTypeTypeValidator = validators.lazy(() => typeWithRemoteRefFieldTypeValidator)

export const typeWithRefOfRemoteRefTypeValidator = validators.object(
  validators.shape({
    referenceArrayField: validators.array(validators.items(validators.lazy(() => typeWithRemoteRefFieldTypeValidator))),
    referenceField: validators.lazy(() => typeWithRemoteRefFieldTypeValidator),
  }),
)

export const typeWithRemoteRefFieldTypeValidator = validators.object(
  validators.shape({
    referenceArrayField: validators.array(validators.items(validators.lazy(() => referenceTargetTypeValidator))),
    referenceField: validators.lazy(() => referenceTargetTypeValidator),
  }),
)
