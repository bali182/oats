/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/parameters.json
 */

import { deserializers, dsl } from '@oats-ts/openapi-parameter-serialization'
import {
  DeepObjectQueryParametersQueryParameters,
  FormQueryParametersQueryParameters,
  PipeDelimitedQueryParametersQueryParameters,
  SpaceDelimitedQueryParametersQueryParameters,
} from './queryTypes'

export const deepObjectQueryParametersQueryDeserializer =
  deserializers.createQueryDeserializer<DeepObjectQueryParametersQueryParameters>({
    objExpl: dsl.query.deepObject.object(
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
    optObjExpl: dsl.query.deepObject.object(
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
  })

export const formQueryParametersQueryDeserializer =
  deserializers.createQueryDeserializer<FormQueryParametersQueryParameters>({
    strExpl: dsl.query.form.primitive(dsl.value.string(), { explode: true, required: true }),
    optStrExpl: dsl.query.form.primitive(dsl.value.string(), { explode: true, required: false }),
    str: dsl.query.form.primitive(dsl.value.string(), { explode: false, required: true }),
    optStr: dsl.query.form.primitive(dsl.value.string(), { explode: false, required: false }),
    numExpl: dsl.query.form.primitive(dsl.value.number(), { explode: true, required: true }),
    optNumExpl: dsl.query.form.primitive(dsl.value.number(), { explode: true, required: false }),
    num: dsl.query.form.primitive(dsl.value.number(), { explode: false, required: true }),
    optNum: dsl.query.form.primitive(dsl.value.number(), { explode: false, required: false }),
    boolExpl: dsl.query.form.primitive(dsl.value.boolean(), { explode: true, required: true }),
    optBoolExpl: dsl.query.form.primitive(dsl.value.boolean(), { explode: true, required: false }),
    bool: dsl.query.form.primitive(dsl.value.boolean(), { explode: false, required: true }),
    optBool: dsl.query.form.primitive(dsl.value.boolean(), { explode: false, required: false }),
    enmExpl: dsl.query.form.primitive(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: true,
    }),
    optEnmExpl: dsl.query.form.primitive(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: false,
    }),
    enm: dsl.query.form.primitive(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: false,
      required: true,
    }),
    optEnm: dsl.query.form.primitive(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: false,
      required: false,
    }),
    strArrExpl: dsl.query.form.array(dsl.value.string(), { explode: true, required: true }),
    optStrArrExpl: dsl.query.form.array(dsl.value.string(), { explode: true, required: false }),
    strArr: dsl.query.form.array(dsl.value.string(), { explode: false, required: true }),
    optStrArr: dsl.query.form.array(dsl.value.string(), { explode: false, required: false }),
    numArrExpl: dsl.query.form.array(dsl.value.number(), { explode: true, required: true }),
    optNumArrExpl: dsl.query.form.array(dsl.value.number(), { explode: true, required: false }),
    numArr: dsl.query.form.array(dsl.value.number(), { explode: false, required: true }),
    optNumArr: dsl.query.form.array(dsl.value.number(), { explode: false, required: false }),
    boolArrExpl: dsl.query.form.array(dsl.value.boolean(), { explode: true, required: true }),
    optBoolArrExpl: dsl.query.form.array(dsl.value.boolean(), { explode: true, required: false }),
    boolArr: dsl.query.form.array(dsl.value.boolean(), { explode: false, required: true }),
    optBoolArr: dsl.query.form.array(dsl.value.boolean(), { explode: false, required: false }),
    enmArrExpl: dsl.query.form.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: true,
    }),
    optEnmArrExpl: dsl.query.form.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: false,
    }),
    enmArr: dsl.query.form.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), { explode: false, required: true }),
    optEnmArr: dsl.query.form.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: false,
      required: false,
    }),
    objExpl: dsl.query.form.object(
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
    optObjExpl: dsl.query.form.object(
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
    obj: dsl.query.form.object(
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
    optObj: dsl.query.form.object(
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

export const pipeDelimitedQueryParametersQueryDeserializer =
  deserializers.createQueryDeserializer<PipeDelimitedQueryParametersQueryParameters>({
    strArrExpl: dsl.query.pipeDelimited.array(dsl.value.string(), { explode: true, required: true }),
    optStrArrExpl: dsl.query.pipeDelimited.array(dsl.value.string(), { explode: true, required: false }),
    numArrExpl: dsl.query.pipeDelimited.array(dsl.value.number(), { explode: true, required: true }),
    optNumArrExpl: dsl.query.pipeDelimited.array(dsl.value.number(), { explode: true, required: false }),
    boolArrExpl: dsl.query.pipeDelimited.array(dsl.value.boolean(), { explode: true, required: true }),
    optBoolArrExpl: dsl.query.pipeDelimited.array(dsl.value.boolean(), { explode: true, required: false }),
    enmArrExpl: dsl.query.pipeDelimited.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: true,
    }),
    optEnmArrExpl: dsl.query.pipeDelimited.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: false,
    }),
  })

export const spaceDelimitedQueryParametersQueryDeserializer =
  deserializers.createQueryDeserializer<SpaceDelimitedQueryParametersQueryParameters>({
    strArrExpl: dsl.query.spaceDelimited.array(dsl.value.string(), { explode: true, required: true }),
    optStrArrExpl: dsl.query.spaceDelimited.array(dsl.value.string(), { explode: true, required: false }),
    numArrExpl: dsl.query.spaceDelimited.array(dsl.value.number(), { explode: true, required: true }),
    optNumArrExpl: dsl.query.spaceDelimited.array(dsl.value.number(), { explode: true, required: false }),
    boolArrExpl: dsl.query.spaceDelimited.array(dsl.value.boolean(), { explode: true, required: true }),
    optBoolArrExpl: dsl.query.spaceDelimited.array(dsl.value.boolean(), { explode: true, required: false }),
    enmArrExpl: dsl.query.spaceDelimited.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: true,
    }),
    optEnmArrExpl: dsl.query.spaceDelimited.array(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
      explode: true,
      required: false,
    }),
  })
