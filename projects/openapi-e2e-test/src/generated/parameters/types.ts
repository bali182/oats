/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/parameters.json
 */

export type CommonEnumType = 'A' | 'B' | 'C'

export type CommonObjectType = {
  objBoolField: boolean
  objEnmField: CommonEnumType
  objNumField: number
  objOptBoolField?: boolean
  objOptEnmField?: CommonEnumType
  objOptNumField?: number
  objOptStrField?: string
  objStrField: string
}

export type CommonObjectTypeExpl = {
  objExplBoolField: boolean
  objExplEnmField: CommonEnumType
  objExplNumField: number
  objExplOptBoolField?: boolean
  objExplOptEnmField?: CommonEnumType
  objExplOptNumField?: number
  objExplOptStrField?: string
  objExplStrField: string
}

export type CommonOptObjectType = {
  optObjBoolField: boolean
  optObjEnmField: CommonEnumType
  optObjNumField: number
  optObjOptBoolField?: boolean
  optObjOptEnmField?: CommonEnumType
  optObjOptNumField?: number
  optObjOptStrField?: string
  optObjStrField: string
}

export type CommonOptObjectTypeExpl = {
  optObjExplBoolField: boolean
  optObjExplEnmField: CommonEnumType
  optObjExplNumField: number
  optObjExplOptBoolField?: boolean
  optObjExplOptEnmField?: CommonEnumType
  optObjExplOptNumField?: number
  optObjExplOptStrField?: string
  optObjExplStrField: string
}

export type DeepObjectQueryParameters = {
  objExpl: CommonObjectTypeExpl
  optObjExpl?: CommonOptObjectTypeExpl
}

export type FormCookieParameters = {
  optBool?: boolean
  optEnm?: CommonEnumType
  optNum?: number
  optStr?: string
}

export type FormQueryParameters = {
  bool: boolean
  boolArr: boolean[]
  boolArrExpl: boolean[]
  boolExpl: boolean
  enm: CommonEnumType
  enmArr: CommonEnumType[]
  enmArrExpl: CommonEnumType[]
  enmExpl: CommonEnumType
  num: number
  numArr: number[]
  numArrExpl: number[]
  numExpl: number
  obj: CommonObjectType
  objExpl: CommonObjectTypeExpl
  optBool?: boolean
  optBoolArr?: boolean[]
  optBoolArrExpl?: boolean[]
  optBoolExpl?: boolean
  optEnm?: CommonEnumType
  optEnmArr?: CommonEnumType[]
  optEnmArrExpl?: CommonEnumType[]
  optEnmExpl?: CommonEnumType
  optNum?: number
  optNumArr?: number[]
  optNumArrExpl?: number[]
  optNumExpl?: number
  optObj?: CommonOptObjectType
  optObjExpl?: CommonOptObjectTypeExpl
  optStr?: string
  optStrArr?: string[]
  optStrArrExpl?: string[]
  optStrExpl?: string
  str: string
  strArr: string[]
  strArrExpl: string[]
  strExpl: string
}

export type LabelPathParameters = {
  bool: boolean
  boolArr: boolean[]
  boolArrExpl: boolean[]
  boolExpl: boolean
  enm: CommonEnumType
  enmArr: CommonEnumType[]
  enmArrExpl: CommonEnumType[]
  enmExpl: CommonEnumType
  num: number
  numArr: number[]
  numArrExpl: number[]
  numExpl: number
  obj: CommonObjectType
  objExpl: CommonObjectTypeExpl
  str: string
  strArr: string[]
  strArrExpl: string[]
  strExpl: string
}

export type MatrixPathParameters = {
  bool: boolean
  boolArr: boolean[]
  boolArrExpl: boolean[]
  boolExpl: boolean
  enm: CommonEnumType
  enmArr: CommonEnumType[]
  enmArrExpl: CommonEnumType[]
  enmExpl: CommonEnumType
  num: number
  numArr: number[]
  numArrExpl: number[]
  numExpl: number
  obj: CommonObjectType
  objExpl: CommonObjectTypeExpl
  str: string
  strArr: string[]
  strArrExpl: string[]
  strExpl: string
}

export type ParameterIssue = {
  message: string
}

export type PipeDelimitedQueryParameters = {
  boolArrExpl: boolean[]
  enmArrExpl: CommonEnumType[]
  numArrExpl: number[]
  optBoolArrExpl?: boolean[]
  optEnmArrExpl?: CommonEnumType[]
  optNumArrExpl?: number[]
  optStrArrExpl?: string[]
  strArrExpl: string[]
}

export type SimpleHeaderParameters = {
  'X-Bool-Header': boolean
  'X-BoolArr-Header': boolean[]
  'X-BoolArrExpl-Header': boolean[]
  'X-BoolExpl-Header': boolean
  'X-Enm-Header': CommonEnumType
  'X-EnmArr-Header': CommonEnumType[]
  'X-EnmArrExpl-Header': CommonEnumType[]
  'X-EnmExpl-Header': CommonEnumType
  'X-Num-Header': number
  'X-NumArr-Header': number[]
  'X-NumArrExpl-Header': number[]
  'X-NumExpl-Header': number
  'X-Obj-Header': CommonObjectType
  'X-ObjExpl-Header': CommonObjectTypeExpl
  'X-OptBool-Header'?: boolean
  'X-OptBoolArr-Header'?: boolean[]
  'X-OptBoolArrExpl-Header'?: boolean[]
  'X-OptBoolExpl-Header'?: boolean
  'X-OptEnm-Header'?: CommonEnumType
  'X-OptEnmArr-Header'?: CommonEnumType[]
  'X-OptEnmArrExpl-Header'?: CommonEnumType[]
  'X-OptEnmExpl-Header'?: CommonEnumType
  'X-OptNum-Header'?: number
  'X-OptNumArr-Header'?: number[]
  'X-OptNumArrExpl-Header'?: number[]
  'X-OptNumExpl-Header'?: number
  'X-OptObj-Header'?: CommonOptObjectType
  'X-OptObjExpl-Header'?: CommonOptObjectTypeExpl
  'X-OptStr-Header'?: string
  'X-OptStrArr-Header'?: string[]
  'X-OptStrArrExpl-Header'?: string[]
  'X-OptStrExpl-Header'?: string
  'X-Str-Header': string
  'X-StrArr-Header': string[]
  'X-StrArrExpl-Header': string[]
  'X-StrExpl-Header': string
}

export type SimplePathParameters = {
  bool: boolean
  boolArr: boolean[]
  boolArrExpl: boolean[]
  boolExpl: boolean
  enm: CommonEnumType
  enmArr: CommonEnumType[]
  enmArrExpl: CommonEnumType[]
  enmExpl: CommonEnumType
  num: number
  numArr: number[]
  numArrExpl: number[]
  numExpl: number
  obj: CommonObjectType
  objExpl: CommonObjectTypeExpl
  str: string
  strArr: string[]
  strArrExpl: string[]
  strExpl: string
}

export type SimpleResponseHeaderParameters = {
  'X-Bool-Header': boolean
  'X-BoolArr-Header': boolean[]
  'X-BoolArrExpl-Header': boolean[]
  'X-BoolExpl-Header': boolean
  'X-Enm-Header': CommonEnumType
  'X-EnmArr-Header': CommonEnumType[]
  'X-EnmArrExpl-Header': CommonEnumType[]
  'X-EnmExpl-Header': CommonEnumType
  'X-Num-Header': number
  'X-NumArr-Header': number[]
  'X-NumArrExpl-Header': number[]
  'X-NumExpl-Header': number
  'X-Obj-Header': CommonObjectType
  'X-ObjExpl-Header': CommonObjectTypeExpl
  'X-OptBool-Header'?: boolean
  'X-OptBoolArr-Header'?: boolean[]
  'X-OptBoolArrExpl-Header'?: boolean[]
  'X-OptBoolExpl-Header'?: boolean
  'X-OptEnm-Header'?: CommonEnumType
  'X-OptEnmArr-Header'?: CommonEnumType[]
  'X-OptEnmArrExpl-Header'?: CommonEnumType[]
  'X-OptEnmExpl-Header'?: CommonEnumType
  'X-OptNum-Header'?: number
  'X-OptNumArr-Header'?: number[]
  'X-OptNumArrExpl-Header'?: number[]
  'X-OptNumExpl-Header'?: number
  'X-OptObj-Header'?: CommonOptObjectType
  'X-OptObjExpl-Header'?: CommonOptObjectTypeExpl
  'X-OptStr-Header'?: string
  'X-OptStrArr-Header'?: string[]
  'X-OptStrArrExpl-Header'?: string[]
  'X-OptStrExpl-Header'?: string
  'X-Str-Header': string
  'X-StrArr-Header': string[]
  'X-StrArrExpl-Header': string[]
  'X-StrExpl-Header': string
}

export type SpaceDelimitedQueryParameters = {
  boolArrExpl: boolean[]
  enmArrExpl: CommonEnumType[]
  numArrExpl: number[]
  optBoolArrExpl?: boolean[]
  optEnmArrExpl?: CommonEnumType[]
  optNumArrExpl?: number[]
  optStrArrExpl?: string[]
  strArrExpl: string[]
}
