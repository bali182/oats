/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/bodies.json
 */

export type EnumType = 'A' | 'B' | 'C'

export type ObjectWithArrays = {
  boolArr: boolean[]
  enmArr: EnumType[]
  numArr: number[]
  strArr: string[]
}

export type ObjectWithNestedObjects = {
  arrObj: ObjectWithArrays
  primObj: ObjectWithPrimitives
}

export type ObjectWithPrimitives = {
  bool: boolean
  enm: EnumType
  lit: 'Literal Value'
  num: number
  str: string
}

export type PrimitiveOptionalTupleType = ['Literal Value'?, string?, number?, EnumType?, boolean?]

export type PrimitiveTupleType = ['Literal Value', string, number, EnumType, boolean]
