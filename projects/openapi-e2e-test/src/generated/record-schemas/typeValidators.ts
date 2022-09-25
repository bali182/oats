/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/record-schemas.json
 */

import {
  array,
  boolean,
  items,
  lazy,
  literal,
  number,
  object,
  optional,
  record,
  shape,
  string,
} from '@oats-ts/validators'

export const arrayRecordTypeTypeValidator = object(record(string(), array(items(string()))))

export const booleanRecordTypeTypeValidator = object(record(string(), boolean()))

export const numberRecordTypeTypeValidator = object(record(string(), number()))

export const objectRecordTypeTypeValidator = object(record(string(), object(shape({ foo: string() }))))

export const refRecordTypeTypeValidator = object(
  record(
    string(),
    lazy(() => referenceTargetTypeValidator),
  ),
)

export const referenceTargetTypeValidator = object(shape({ referenceTarget: optional(literal(true)) }))

export const stringRecordTypeTypeValidator = object(record(string(), string()))
