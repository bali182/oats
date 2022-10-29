/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/parameters.json
 */

import { dsl, serializers } from '@oats-ts/openapi-parameter-serialization'
import { SimpleHeaderParametersRequestHeaderParameters } from './requestHeaderTypes'

export const simpleHeaderParametersRequestHeadersSerializer =
  serializers.createHeaderSerializer<SimpleHeaderParametersRequestHeaderParameters>({
    'X-StrExpl-Header': dsl.header.simple.primitive(dsl.value.string(), { explode: true, required: true }),
    'X-OptStrExpl-Header': dsl.header.simple.primitive(dsl.value.string(), { explode: true, required: false }),
    'X-Str-Header': dsl.header.simple.primitive(dsl.value.string(), { explode: false, required: true }),
    'X-OptStr-Header': dsl.header.simple.primitive(dsl.value.string(), { explode: false, required: false }),
    'X-NumExpl-Header': dsl.header.simple.primitive(dsl.value.number(), { explode: true, required: true }),
    'X-OptNumExpl-Header': dsl.header.simple.primitive(dsl.value.number(), { explode: true, required: false }),
    'X-Num-Header': dsl.header.simple.primitive(dsl.value.number(), { explode: false, required: true }),
    'X-OptNum-Header': dsl.header.simple.primitive(dsl.value.number(), { explode: false, required: false }),
    'X-BoolExpl-Header': dsl.header.simple.primitive(dsl.value.boolean(), { explode: true, required: true }),
    'X-OptBoolExpl-Header': dsl.header.simple.primitive(dsl.value.boolean(), { explode: true, required: false }),
    'X-Bool-Header': dsl.header.simple.primitive(dsl.value.boolean(), { explode: false, required: true }),
    'X-OptBool-Header': dsl.header.simple.primitive(dsl.value.boolean(), { explode: false, required: false }),
    'X-EnmExpl-Header': dsl.header.simple.primitive(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: true,
    }),
    'X-OptEnmExpl-Header': dsl.header.simple.primitive(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: false,
    }),
    'X-Enm-Header': dsl.header.simple.primitive(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: false,
      required: true,
    }),
    'X-OptEnm-Header': dsl.header.simple.primitive(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: false,
      required: false,
    }),
    'X-StrArrExpl-Header': dsl.header.simple.array(dsl.value.string(), { explode: true, required: true }),
    'X-OptStrArrExpl-Header': dsl.header.simple.array(dsl.value.string(), { explode: true, required: false }),
    'X-StrArr-Header': dsl.header.simple.array(dsl.value.string(), { explode: false, required: true }),
    'X-OptStrArr-Header': dsl.header.simple.array(dsl.value.string(), { explode: false, required: false }),
    'X-NumArrExpl-Header': dsl.header.simple.array(dsl.value.number(), { explode: true, required: true }),
    'X-OptNumArrExpl-Header': dsl.header.simple.array(dsl.value.number(), { explode: true, required: false }),
    'X-NumArr-Header': dsl.header.simple.array(dsl.value.number(), { explode: false, required: true }),
    'X-OptNumArr-Header': dsl.header.simple.array(dsl.value.number(), { explode: false, required: false }),
    'X-BoolArrExpl-Header': dsl.header.simple.array(dsl.value.boolean(), { explode: true, required: true }),
    'X-OptBoolArrExpl-Header': dsl.header.simple.array(dsl.value.boolean(), { explode: true, required: false }),
    'X-BoolArr-Header': dsl.header.simple.array(dsl.value.boolean(), { explode: false, required: true }),
    'X-OptBoolArr-Header': dsl.header.simple.array(dsl.value.boolean(), { explode: false, required: false }),
    'X-EnmArrExpl-Header': dsl.header.simple.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: true,
    }),
    'X-OptEnmArrExpl-Header': dsl.header.simple.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: false,
    }),
    'X-EnmArr-Header': dsl.header.simple.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: false,
      required: true,
    }),
    'X-OptEnmArr-Header': dsl.header.simple.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: false,
      required: false,
    }),
    'X-ObjExpl-Header': dsl.header.simple.object(
      {
        objExplStrField: dsl.value.string(),
        objExplNumField: dsl.value.number(),
        objExplBoolField: dsl.value.boolean(),
        objExplEnmField: dsl.value.string(dsl.value.enum(['A', 'B', 'C'])),
        objExplOptStrField: dsl.value.optional(dsl.value.string()),
        objExplOptNumField: dsl.value.optional(dsl.value.number()),
        objExplOptBoolField: dsl.value.optional(dsl.value.boolean()),
        objExplOptEnmField: dsl.value.optional(dsl.value.string(dsl.value.enum(['A', 'B', 'C']))),
      },
      { explode: true, required: true },
    ),
    'X-OptObjExpl-Header': dsl.header.simple.object(
      {
        optObjExplStrField: dsl.value.string(),
        optObjExplNumField: dsl.value.number(),
        optObjExplBoolField: dsl.value.boolean(),
        optObjExplEnmField: dsl.value.string(dsl.value.enum(['A', 'B', 'C'])),
        optObjExplOptStrField: dsl.value.optional(dsl.value.string()),
        optObjExplOptNumField: dsl.value.optional(dsl.value.number()),
        optObjExplOptBoolField: dsl.value.optional(dsl.value.boolean()),
        optObjExplOptEnmField: dsl.value.optional(dsl.value.string(dsl.value.enum(['A', 'B', 'C']))),
      },
      { explode: true, required: false },
    ),
    'X-Obj-Header': dsl.header.simple.object(
      {
        objStrField: dsl.value.string(),
        objNumField: dsl.value.number(),
        objBoolField: dsl.value.boolean(),
        objEnmField: dsl.value.string(dsl.value.enum(['A', 'B', 'C'])),
        objOptStrField: dsl.value.optional(dsl.value.string()),
        objOptNumField: dsl.value.optional(dsl.value.number()),
        objOptBoolField: dsl.value.optional(dsl.value.boolean()),
        objOptEnmField: dsl.value.optional(dsl.value.string(dsl.value.enum(['A', 'B', 'C']))),
      },
      { explode: false, required: true },
    ),
    'X-OptObj-Header': dsl.header.simple.object(
      {
        optObjStrField: dsl.value.string(),
        optObjNumField: dsl.value.number(),
        optObjBoolField: dsl.value.boolean(),
        optObjEnmField: dsl.value.string(dsl.value.enum(['A', 'B', 'C'])),
        optObjOptStrField: dsl.value.optional(dsl.value.string()),
        optObjOptNumField: dsl.value.optional(dsl.value.number()),
        optObjOptBoolField: dsl.value.optional(dsl.value.boolean()),
        optObjOptEnmField: dsl.value.optional(dsl.value.string(dsl.value.enum(['A', 'B', 'C']))),
      },
      { explode: false, required: false },
    ),
  })
