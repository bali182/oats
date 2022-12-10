/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from generated-schemas/content-parameters.json (originating from oats-ts/oats-schemas)
 */

import { ContentCommonEnumType, ContentCommonObjectType, ContentCommonOptObjectType } from './types'

export type HeaderParametersRequestHeaderParameters = {
  'X-Str-Header': string
  'X-OptStr-Header'?: string
  'X-Num-Header': number
  'X-OptNum-Header'?: number
  'X-Bool-Header': boolean
  'X-OptBool-Header'?: boolean
  'X-Enm-Header': ContentCommonEnumType
  'X-OptEnm-Header'?: ContentCommonEnumType
  'X-StrArr-Header': string[]
  'X-OptStrArr-Header'?: string[]
  'X-NumArr-Header': number[]
  'X-OptNumArr-Header'?: number[]
  'X-BoolArr-Header': boolean[]
  'X-OptBoolArr-Header'?: boolean[]
  'X-EnmArr-Header': ContentCommonEnumType[]
  'X-OptEnmArr-Header'?: ContentCommonEnumType[]
  'X-Obj-Header': ContentCommonObjectType
  'X-OptObj-Header'?: ContentCommonOptObjectType
}
