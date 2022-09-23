/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/array-schemas.json
 */

import { array, boolean, items, lazy, literal, number, object, optional, shape, string } from '@oats-ts/validators'

export const arrayArrayTypeTypeValidator = array(items(array(items(string()))))

export const booleanArrayTypeTypeValidator = array(items(boolean()))

export const numberArrayTypeTypeValidator = array(items(number()))

export const objectArrayTypeTypeValidator = array(items(object(shape({ foo: string() }))))

export const refArrayTypeTypeValidator = array(items(lazy(() => referenceTargetTypeValidator)))

export const referenceTargetTypeValidator = object(shape({ referenceTarget: optional(literal(true)) }))

export const stringArrayTypeTypeValidator = array(items(string()))
