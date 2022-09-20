/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/remote-ref-schemas.json
 */

import { array, items, lazy, literal, object, optional, shape } from '@oats-ts/validators'

export type ReferenceTarget = {
  referenceTarget?: true
}

export type TypeWithRemoteRefField = {
  referenceArrayField: ReferenceTarget[]
  referenceField: ReferenceTarget
}

export function isReferenceTarget(input: any): input is ReferenceTarget {
  return (
    input !== null &&
    typeof input === 'object' &&
    (input.referenceTarget === null || input.referenceTarget === undefined || input.referenceTarget === true)
  )
}

export function isTypeWithRemoteRefField(input: any): input is TypeWithRemoteRefField {
  return (
    input !== null &&
    typeof input === 'object' &&
    Array.isArray(input.referenceArrayField) &&
    input.referenceArrayField.every((item: any) => isReferenceTarget(item) as boolean) &&
    (isReferenceTarget(input.referenceField) as boolean)
  )
}

export const referenceTargetTypeValidator = object(shape({ referenceTarget: optional(literal(true)) }))

export const typeWithRemoteRefFieldTypeValidator = object(
  shape({
    referenceArrayField: array(items(lazy(() => referenceTargetTypeValidator))),
    referenceField: lazy(() => referenceTargetTypeValidator),
  }),
)
