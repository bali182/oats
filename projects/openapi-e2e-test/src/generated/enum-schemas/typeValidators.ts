/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/enum-schemas.json
 */

import { array, literal, object, shape, tuple, union } from '@oats-ts/validators'

export const arrayEnumTypeTypeValidator = union({
  '["A","B","C"]': array(tuple(literal('A'), literal('B'), literal('C'))),
  '[1,2,3]': array(tuple(literal(1), literal(2), literal(3))),
  '[true,false]': array(tuple(literal(true), literal(false))),
})

export const booleanEnumTypeTypeValidator = union({
  true: literal(true),
  false: literal(false),
})

export const mixedEnumTypeTypeValidator = union({
  A: literal('A'),
  '121': literal(121),
  true: literal(true),
  null: literal(null),
  '["B",2,false]': array(tuple(literal('B'), literal(2), literal(false))),
  '{"obj":true}': object(shape({ obj: literal(true) })),
})

export const numberEnumTypeTypeValidator = union({
  '1': literal(1),
  '2': literal(2),
  '3': literal(3),
})

export const objectEnumTypeTypeValidator = union({
  '{"str":"hi"}': object(shape({ str: literal('hi') })),
  '{"num":121}': object(shape({ num: literal(121) })),
  '{"bool":true}': object(shape({ bool: literal(true) })),
  '{"null":null}': object(shape({ null: literal(null) })),
  '{"has-dashes":true,"has space":true,"has .`/!+^ chars":true}': object(
    shape({
      'has-dashes': literal(true),
      'has space': literal(true),
      'has .`/!+^ chars': literal(true),
    }),
  ),
})

export const stringEnumTypeTypeValidator = union({
  A: literal('A'),
  B: literal('B'),
  C: literal('C'),
})
