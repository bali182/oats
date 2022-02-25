/*
 * This file has been generated by Oats, please don't modify it by hand!
 * 
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/types/const-schemas.json
 */

import { array, literal, object, shape, tuple } from '@oats-ts/validators'

export type ArrayLiteralType = [
  'string value',
  42,
  false,
  null,
  {
    key: 10
  },
  [3, false, 'hello'],
]

export type BooleanLiteralType = true

export type NestedObjectLiteralType = {
  obj: {
    I: {
      am: {
        deeply: {
          nested: true
        }
      }
    }
  }
}

export type NullLiteralType = null

export type NumberLiteralType = 125

export type QuotedKeysObjectLiteralType = {
  'has-dashes': true
  'has space': true
  'has .`/!+^ chars': true
}

export type SimpleObjectLiteralType = {
  s: "I'm a string"
  n: 10
  b: true
}

export type StringLiteralType = "I'm a constant string"

export const arrayLiteralTypeTypeValidator = array(
  tuple(
    literal('string value'),
    literal(42),
    literal(false),
    literal(null),
    object(shape({ key: literal(10) })),
    array(tuple(literal(3), literal(false), literal('hello'))),
  ),
)

export const booleanLiteralTypeTypeValidator = literal(true)

export const nestedObjectLiteralTypeTypeValidator = object(
  shape({
    obj: object(
      shape({ I: object(shape({ am: object(shape({ deeply: object(shape({ nested: literal(true) })) })) })) }),
    ),
  }),
)

export const nullLiteralTypeTypeValidator = literal(null)

export const numberLiteralTypeTypeValidator = literal(125)

export const quotedKeysObjectLiteralTypeTypeValidator = object(
  shape({
    'has-dashes': literal(true),
    'has space': literal(true),
    'has .`/!+^ chars': literal(true),
  }),
)

export const simpleObjectLiteralTypeTypeValidator = object(
  shape({
    s: literal("I'm a string"),
    n: literal(10),
    b: literal(true),
  }),
)

export const stringLiteralTypeTypeValidator = literal("I'm a constant string")

export function isArrayLiteralType(input: any): input is ArrayLiteralType {
  return (
    Array.isArray(input) &&
    input[0] === 'string value' &&
    input[1] === 42 &&
    input[2] === false &&
    input[3] === null &&
    typeof input[4] === 'object' &&
    typeof input[4] !== null &&
    input[4].key === 10 &&
    Array.isArray(input[5]) &&
    input[5][0] === 3 &&
    input[5][1] === false &&
    input[5][2] === 'hello'
  )
}

export function isBooleanLiteralType(input: any): input is BooleanLiteralType {
  return input === true
}

export function isNestedObjectLiteralType(input: any): input is NestedObjectLiteralType {
  return (
    typeof input === 'object' &&
    typeof input !== null &&
    typeof input.obj === 'object' &&
    typeof input.obj !== null &&
    typeof input.obj.I === 'object' &&
    typeof input.obj.I !== null &&
    typeof input.obj.I.am === 'object' &&
    typeof input.obj.I.am !== null &&
    typeof input.obj.I.am.deeply === 'object' &&
    typeof input.obj.I.am.deeply !== null &&
    input.obj.I.am.deeply.nested === true
  )
}

export function isNullLiteralType(input: any): input is NullLiteralType {
  return input === null
}

export function isNumberLiteralType(input: any): input is NumberLiteralType {
  return input === 125
}

export function isQuotedKeysObjectLiteralType(input: any): input is QuotedKeysObjectLiteralType {
  return (
    typeof input === 'object' &&
    typeof input !== null &&
    input['has-dashes'] === true &&
    input['has space'] === true &&
    input['has .`/!+^ chars'] === true
  )
}

export function isSimpleObjectLiteralType(input: any): input is SimpleObjectLiteralType {
  return (
    typeof input === 'object' &&
    typeof input !== null &&
    input.s === "I'm a string" &&
    input.n === 10 &&
    input.b === true
  )
}

export function isStringLiteralType(input: any): input is StringLiteralType {
  return input === "I'm a constant string"
}
