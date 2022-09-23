/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/enum-schemas.json
 */

import { ArrayEnumType, BooleanEnumType, MixedEnumType, NumberEnumType, ObjectEnumType, StringEnumType } from './types'

export function isArrayEnumType(input: any): input is ArrayEnumType {
  return (
    (Array.isArray(input) && input[0] === 'A' && input[1] === 'B' && input[2] === 'C') ||
    (Array.isArray(input) && input[0] === 1 && input[1] === 2 && input[2] === 3) ||
    (Array.isArray(input) && input[0] === true && input[1] === false)
  )
}

export function isBooleanEnumType(input: any): input is BooleanEnumType {
  return input === true || input === false
}

export function isMixedEnumType(input: any): input is MixedEnumType {
  return (
    input === 'A' ||
    input === 121 ||
    input === true ||
    input === null ||
    (Array.isArray(input) && input[0] === 'B' && input[1] === 2 && input[2] === false) ||
    (typeof input === 'object' && typeof input !== null && input.obj === true)
  )
}

export function isNumberEnumType(input: any): input is NumberEnumType {
  return input === 1 || input === 2 || input === 3
}

export function isObjectEnumType(input: any): input is ObjectEnumType {
  return (
    (typeof input === 'object' && typeof input !== null && input.str === 'hi') ||
    (typeof input === 'object' && typeof input !== null && input.num === 121) ||
    (typeof input === 'object' && typeof input !== null && input.bool === true) ||
    (typeof input === 'object' && typeof input !== null && input['null'] === null) ||
    (typeof input === 'object' &&
      typeof input !== null &&
      input['has-dashes'] === true &&
      input['has space'] === true &&
      input['has .`/!+^ chars'] === true)
  )
}

export function isStringEnumType(input: any): input is StringEnumType {
  return input === 'A' || input === 'B' || input === 'C'
}
