/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/references.json
 */

import { array, items, lazy, literal, object, optional, shape, string } from '@oats-ts/validators'

export type InlineRefTarget = {
  foo?: string
}

export type InlineRefType = InlineRefTarget

export type ReferenceTarget = {
  referenceTarget?: true
}

export type RemoteRefType = TypeWithRemoteRefField

export type TypeWithRefOfRemoteRef = {
  referenceArrayField: TypeWithRemoteRefField[]
  referenceField: TypeWithRemoteRefField
}

export type TypeWithRemoteRefField = {
  referenceArrayField: ReferenceTarget[]
  referenceField: ReferenceTarget
}

export function isInlineRefTarget(input: any): input is InlineRefTarget {
  return (
    input !== null &&
    typeof input === 'object' &&
    (input.foo === null || input.foo === undefined || typeof input.foo === 'string')
  )
}

export function isInlineRefType(input: any): input is InlineRefType {
  return isInlineRefTarget(input) as boolean
}

export function isReferenceTarget(input: any): input is ReferenceTarget {
  return (
    input !== null &&
    typeof input === 'object' &&
    (input.referenceTarget === null || input.referenceTarget === undefined || input.referenceTarget === true)
  )
}

export function isRemoteRefType(input: any): input is RemoteRefType {
  return isTypeWithRemoteRefField(input) as boolean
}

export function isTypeWithRefOfRemoteRef(input: any): input is TypeWithRefOfRemoteRef {
  return (
    input !== null &&
    typeof input === 'object' &&
    Array.isArray(input.referenceArrayField) &&
    input.referenceArrayField.every((item: any) => isTypeWithRemoteRefField(item) as boolean) &&
    (isTypeWithRemoteRefField(input.referenceField) as boolean)
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

export const inlineRefTargetTypeValidator = object(shape({ foo: optional(string()) }))

export const inlineRefTypeTypeValidator = lazy(() => inlineRefTargetTypeValidator)

export const referenceTargetTypeValidator = object(shape({ referenceTarget: optional(literal(true)) }))

export const remoteRefTypeTypeValidator = lazy(() => typeWithRemoteRefFieldTypeValidator)

export const typeWithRefOfRemoteRefTypeValidator = object(
  shape({
    referenceArrayField: array(items(lazy(() => typeWithRemoteRefFieldTypeValidator))),
    referenceField: lazy(() => typeWithRemoteRefFieldTypeValidator),
  }),
)

export const typeWithRemoteRefFieldTypeValidator = object(
  shape({
    referenceArrayField: array(items(lazy(() => referenceTargetTypeValidator))),
    referenceField: lazy(() => referenceTargetTypeValidator),
  }),
)
