/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from generated-schemas/parameters.json (originating from oats-ts/oats-schemas)
 */

import {
  PathParameters as _PathParameters,
  parameter as _parameter,
  parsePathToMatcher as _parsePathToMatcher,
  parsePathToSegments as _parsePathToSegments,
} from '@oats-ts/openapi-runtime'
import {
  LabelPathParametersPathParameters,
  MatrixPathParametersPathParameters,
  SimplePathParametersPathParameters,
} from './pathTypes'

export const labelPathParametersPathParameters: _PathParameters<LabelPathParametersPathParameters> = {
  descriptor: {
    strExpl: _parameter.path.label.exploded.required.primitive(_parameter.value.string()),
    str: _parameter.path.label.required.primitive(_parameter.value.string()),
    numExpl: _parameter.path.label.exploded.required.primitive(_parameter.value.number()),
    num: _parameter.path.label.required.primitive(_parameter.value.number()),
    boolExpl: _parameter.path.label.exploded.required.primitive(_parameter.value.boolean()),
    bool: _parameter.path.label.required.primitive(_parameter.value.boolean()),
    enmExpl: _parameter.path.label.exploded.required.primitive(
      _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
    ),
    enm: _parameter.path.label.required.primitive(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    strArrExpl: _parameter.path.label.exploded.required.array(_parameter.value.string()),
    strArr: _parameter.path.label.required.array(_parameter.value.string()),
    numArrExpl: _parameter.path.label.exploded.required.array(_parameter.value.number()),
    numArr: _parameter.path.label.required.array(_parameter.value.number()),
    boolArrExpl: _parameter.path.label.exploded.required.array(_parameter.value.boolean()),
    boolArr: _parameter.path.label.required.array(_parameter.value.boolean()),
    enmArrExpl: _parameter.path.label.exploded.required.array(
      _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
    ),
    enmArr: _parameter.path.label.required.array(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    objExpl: _parameter.path.label.exploded.required.object({
      objExplStrField: _parameter.value.string(),
      objExplNumField: _parameter.value.number(),
      objExplBoolField: _parameter.value.boolean(),
      objExplEnmField: _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
      objExplOptStrField: _parameter.value.optional(_parameter.value.string()),
      objExplOptNumField: _parameter.value.optional(_parameter.value.number()),
      objExplOptBoolField: _parameter.value.optional(_parameter.value.boolean()),
      objExplOptEnmField: _parameter.value.optional(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    }),
    obj: _parameter.path.label.required.object({
      objStrField: _parameter.value.string(),
      objNumField: _parameter.value.number(),
      objBoolField: _parameter.value.boolean(),
      objEnmField: _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
      objOptStrField: _parameter.value.optional(_parameter.value.string()),
      objOptNumField: _parameter.value.optional(_parameter.value.number()),
      objOptBoolField: _parameter.value.optional(_parameter.value.boolean()),
      objOptEnmField: _parameter.value.optional(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    }),
  },
  matcher: _parsePathToMatcher(
    '/label-path-parameters/{strExpl}/{str}/{numExpl}/{num}/{boolExpl}/{bool}/{enmExpl}/{enm}/{strArrExpl}/{strArr}/{numArrExpl}/{numArr}/{boolArrExpl}/{boolArr}/{enmArrExpl}/{enmArr}/{objExpl}/{obj}',
  ),
  pathSegments: _parsePathToSegments(
    '/label-path-parameters/{strExpl}/{str}/{numExpl}/{num}/{boolExpl}/{bool}/{enmExpl}/{enm}/{strArrExpl}/{strArr}/{numArrExpl}/{numArr}/{boolArrExpl}/{boolArr}/{enmArrExpl}/{enmArr}/{objExpl}/{obj}',
  ),
}

export const matrixPathParametersPathParameters: _PathParameters<MatrixPathParametersPathParameters> = {
  descriptor: {
    strExpl: _parameter.path.matrix.exploded.required.primitive(_parameter.value.string()),
    str: _parameter.path.matrix.required.primitive(_parameter.value.string()),
    numExpl: _parameter.path.matrix.exploded.required.primitive(_parameter.value.number()),
    num: _parameter.path.matrix.required.primitive(_parameter.value.number()),
    boolExpl: _parameter.path.matrix.exploded.required.primitive(_parameter.value.boolean()),
    bool: _parameter.path.matrix.required.primitive(_parameter.value.boolean()),
    enmExpl: _parameter.path.matrix.exploded.required.primitive(
      _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
    ),
    enm: _parameter.path.matrix.required.primitive(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    strArrExpl: _parameter.path.matrix.exploded.required.array(_parameter.value.string()),
    strArr: _parameter.path.matrix.required.array(_parameter.value.string()),
    numArrExpl: _parameter.path.matrix.exploded.required.array(_parameter.value.number()),
    numArr: _parameter.path.matrix.required.array(_parameter.value.number()),
    boolArrExpl: _parameter.path.matrix.exploded.required.array(_parameter.value.boolean()),
    boolArr: _parameter.path.matrix.required.array(_parameter.value.boolean()),
    enmArrExpl: _parameter.path.matrix.exploded.required.array(
      _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
    ),
    enmArr: _parameter.path.matrix.required.array(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    objExpl: _parameter.path.matrix.exploded.required.object({
      objExplStrField: _parameter.value.string(),
      objExplNumField: _parameter.value.number(),
      objExplBoolField: _parameter.value.boolean(),
      objExplEnmField: _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
      objExplOptStrField: _parameter.value.optional(_parameter.value.string()),
      objExplOptNumField: _parameter.value.optional(_parameter.value.number()),
      objExplOptBoolField: _parameter.value.optional(_parameter.value.boolean()),
      objExplOptEnmField: _parameter.value.optional(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    }),
    obj: _parameter.path.matrix.required.object({
      objStrField: _parameter.value.string(),
      objNumField: _parameter.value.number(),
      objBoolField: _parameter.value.boolean(),
      objEnmField: _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
      objOptStrField: _parameter.value.optional(_parameter.value.string()),
      objOptNumField: _parameter.value.optional(_parameter.value.number()),
      objOptBoolField: _parameter.value.optional(_parameter.value.boolean()),
      objOptEnmField: _parameter.value.optional(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    }),
  },
  matcher: _parsePathToMatcher(
    '/matrix-path-parameters/{strExpl}/{str}/{numExpl}/{num}/{boolExpl}/{bool}/{enmExpl}/{enm}/{strArrExpl}/{strArr}/{numArrExpl}/{numArr}/{boolArrExpl}/{boolArr}/{enmArrExpl}/{enmArr}/{objExpl}/{obj}',
  ),
  pathSegments: _parsePathToSegments(
    '/matrix-path-parameters/{strExpl}/{str}/{numExpl}/{num}/{boolExpl}/{bool}/{enmExpl}/{enm}/{strArrExpl}/{strArr}/{numArrExpl}/{numArr}/{boolArrExpl}/{boolArr}/{enmArrExpl}/{enmArr}/{objExpl}/{obj}',
  ),
}

export const simplePathParametersPathParameters: _PathParameters<SimplePathParametersPathParameters> = {
  descriptor: {
    strExpl: _parameter.path.simple.exploded.required.primitive(_parameter.value.string()),
    str: _parameter.path.simple.required.primitive(_parameter.value.string()),
    numExpl: _parameter.path.simple.exploded.required.primitive(_parameter.value.number()),
    num: _parameter.path.simple.required.primitive(_parameter.value.number()),
    boolExpl: _parameter.path.simple.exploded.required.primitive(_parameter.value.boolean()),
    bool: _parameter.path.simple.required.primitive(_parameter.value.boolean()),
    enmExpl: _parameter.path.simple.exploded.required.primitive(
      _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
    ),
    enm: _parameter.path.simple.required.primitive(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    strArrExpl: _parameter.path.simple.exploded.required.array(_parameter.value.string()),
    strArr: _parameter.path.simple.required.array(_parameter.value.string()),
    numArrExpl: _parameter.path.simple.exploded.required.array(_parameter.value.number()),
    numArr: _parameter.path.simple.required.array(_parameter.value.number()),
    boolArrExpl: _parameter.path.simple.exploded.required.array(_parameter.value.boolean()),
    boolArr: _parameter.path.simple.required.array(_parameter.value.boolean()),
    enmArrExpl: _parameter.path.simple.exploded.required.array(
      _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
    ),
    enmArr: _parameter.path.simple.required.array(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    objExpl: _parameter.path.simple.exploded.required.object({
      objExplStrField: _parameter.value.string(),
      objExplNumField: _parameter.value.number(),
      objExplBoolField: _parameter.value.boolean(),
      objExplEnmField: _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
      objExplOptStrField: _parameter.value.optional(_parameter.value.string()),
      objExplOptNumField: _parameter.value.optional(_parameter.value.number()),
      objExplOptBoolField: _parameter.value.optional(_parameter.value.boolean()),
      objExplOptEnmField: _parameter.value.optional(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    }),
    obj: _parameter.path.simple.required.object({
      objStrField: _parameter.value.string(),
      objNumField: _parameter.value.number(),
      objBoolField: _parameter.value.boolean(),
      objEnmField: _parameter.value.string(_parameter.value.enum(['A', 'B', 'C'])),
      objOptStrField: _parameter.value.optional(_parameter.value.string()),
      objOptNumField: _parameter.value.optional(_parameter.value.number()),
      objOptBoolField: _parameter.value.optional(_parameter.value.boolean()),
      objOptEnmField: _parameter.value.optional(_parameter.value.string(_parameter.value.enum(['A', 'B', 'C']))),
    }),
  },
  matcher: _parsePathToMatcher(
    '/simple-path-parameters/{strExpl}/{str}/{numExpl}/{num}/{boolExpl}/{bool}/{enmExpl}/{enm}/{strArrExpl}/{strArr}/{numArrExpl}/{numArr}/{boolArrExpl}/{boolArr}/{enmArrExpl}/{enmArr}/{objExpl}/{obj}',
  ),
  pathSegments: _parsePathToSegments(
    '/simple-path-parameters/{strExpl}/{str}/{numExpl}/{num}/{boolExpl}/{bool}/{enmExpl}/{enm}/{strArrExpl}/{strArr}/{numArrExpl}/{numArr}/{boolArrExpl}/{boolArr}/{enmArrExpl}/{enmArr}/{objExpl}/{obj}',
  ),
}
