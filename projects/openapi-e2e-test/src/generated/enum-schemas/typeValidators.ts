/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/enum-schemas.json (originating from oats-ts/oats-schemas)
 */

import { validators } from '@oats-ts/openapi-runtime'

export const arrayEnumTypeTypeValidator = validators.union({
  '["A","B","C"]': validators.array(
    validators.tuple([validators.literal('A'), validators.literal('B'), validators.literal('C')]),
  ),
  '[1,2,3]': validators.array(validators.tuple([validators.literal(1), validators.literal(2), validators.literal(3)])),
  '[true,false]': validators.array(validators.tuple([validators.literal(true), validators.literal(false)])),
})

export const booleanEnumTypeTypeValidator = validators.union({
  true: validators.literal(true),
  false: validators.literal(false),
})

export const mixedEnumTypeTypeValidator = validators.union({
  A: validators.literal('A'),
  '121': validators.literal(121),
  true: validators.literal(true),
  null: validators.literal(null),
  '["B",2,false]': validators.array(
    validators.tuple([validators.literal('B'), validators.literal(2), validators.literal(false)]),
  ),
  '{"obj":true}': validators.object(validators.shape({ obj: validators.literal(true) })),
})

export const numberEnumTypeTypeValidator = validators.union({
  '1': validators.literal(1),
  '2': validators.literal(2),
  '3': validators.literal(3),
})

export const objectEnumTypeTypeValidator = validators.union({
  '{"str":"hi"}': validators.object(validators.shape({ str: validators.literal('hi') })),
  '{"num":121}': validators.object(validators.shape({ num: validators.literal(121) })),
  '{"bool":true}': validators.object(validators.shape({ bool: validators.literal(true) })),
  '{"null":null}': validators.object(validators.shape({ null: validators.literal(null) })),
  '{"has-dashes":true,"has space":true,"has .`/!+^ chars":true}': validators.object(
    validators.shape({
      'has-dashes': validators.literal(true),
      'has space': validators.literal(true),
      'has .`/!+^ chars': validators.literal(true),
    }),
  ),
})

export const stringEnumTypeTypeValidator = validators.union({
  A: validators.literal('A'),
  B: validators.literal('B'),
  C: validators.literal('C'),
})
