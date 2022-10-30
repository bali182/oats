/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/parameters.json
 */

import { validators as _validators } from '@oats-ts/openapi-runtime'

export const commonEnumTypeTypeValidator = _validators.union({
  A: _validators.literal('A'),
  B: _validators.literal('B'),
  C: _validators.literal('C'),
})

export const commonObjectTypeExplTypeValidator = _validators.object(
  _validators.shape({
    objExplBoolField: _validators.boolean(),
    objExplEnmField: _validators.lazy(() => commonEnumTypeTypeValidator),
    objExplNumField: _validators.number(),
    objExplOptBoolField: _validators.optional(_validators.boolean()),
    objExplOptEnmField: _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    objExplOptNumField: _validators.optional(_validators.number()),
    objExplOptStrField: _validators.optional(_validators.string()),
    objExplStrField: _validators.string(),
  }),
)

export const commonObjectTypeTypeValidator = _validators.object(
  _validators.shape({
    objBoolField: _validators.boolean(),
    objEnmField: _validators.lazy(() => commonEnumTypeTypeValidator),
    objNumField: _validators.number(),
    objOptBoolField: _validators.optional(_validators.boolean()),
    objOptEnmField: _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    objOptNumField: _validators.optional(_validators.number()),
    objOptStrField: _validators.optional(_validators.string()),
    objStrField: _validators.string(),
  }),
)

export const commonOptObjectTypeExplTypeValidator = _validators.object(
  _validators.shape({
    optObjExplBoolField: _validators.boolean(),
    optObjExplEnmField: _validators.lazy(() => commonEnumTypeTypeValidator),
    optObjExplNumField: _validators.number(),
    optObjExplOptBoolField: _validators.optional(_validators.boolean()),
    optObjExplOptEnmField: _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    optObjExplOptNumField: _validators.optional(_validators.number()),
    optObjExplOptStrField: _validators.optional(_validators.string()),
    optObjExplStrField: _validators.string(),
  }),
)

export const commonOptObjectTypeTypeValidator = _validators.object(
  _validators.shape({
    optObjBoolField: _validators.boolean(),
    optObjEnmField: _validators.lazy(() => commonEnumTypeTypeValidator),
    optObjNumField: _validators.number(),
    optObjOptBoolField: _validators.optional(_validators.boolean()),
    optObjOptEnmField: _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    optObjOptNumField: _validators.optional(_validators.number()),
    optObjOptStrField: _validators.optional(_validators.string()),
    optObjStrField: _validators.string(),
  }),
)

export const deepObjectQueryParametersTypeValidator = _validators.object(
  _validators.shape({
    objExpl: _validators.lazy(() => commonObjectTypeExplTypeValidator),
    optObjExpl: _validators.optional(_validators.lazy(() => commonOptObjectTypeExplTypeValidator)),
  }),
)

export const formCookieParametersTypeValidator = _validators.object(
  _validators.shape({
    optBool: _validators.optional(_validators.boolean()),
    optEnm: _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    optNum: _validators.optional(_validators.number()),
    optStr: _validators.optional(_validators.string()),
  }),
)

export const formQueryParametersTypeValidator = _validators.object(
  _validators.shape({
    bool: _validators.boolean(),
    boolArr: _validators.array(_validators.items(_validators.boolean())),
    boolArrExpl: _validators.array(_validators.items(_validators.boolean())),
    boolExpl: _validators.boolean(),
    enm: _validators.lazy(() => commonEnumTypeTypeValidator),
    enmArr: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    enmArrExpl: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    enmExpl: _validators.lazy(() => commonEnumTypeTypeValidator),
    num: _validators.number(),
    numArr: _validators.array(_validators.items(_validators.number())),
    numArrExpl: _validators.array(_validators.items(_validators.number())),
    numExpl: _validators.number(),
    obj: _validators.lazy(() => commonObjectTypeTypeValidator),
    objExpl: _validators.lazy(() => commonObjectTypeExplTypeValidator),
    optBool: _validators.optional(_validators.boolean()),
    optBoolArr: _validators.optional(_validators.array(_validators.items(_validators.boolean()))),
    optBoolArrExpl: _validators.optional(_validators.array(_validators.items(_validators.boolean()))),
    optBoolExpl: _validators.optional(_validators.boolean()),
    optEnm: _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    optEnmArr: _validators.optional(
      _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    ),
    optEnmArrExpl: _validators.optional(
      _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    ),
    optEnmExpl: _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    optNum: _validators.optional(_validators.number()),
    optNumArr: _validators.optional(_validators.array(_validators.items(_validators.number()))),
    optNumArrExpl: _validators.optional(_validators.array(_validators.items(_validators.number()))),
    optNumExpl: _validators.optional(_validators.number()),
    optObj: _validators.optional(_validators.lazy(() => commonOptObjectTypeTypeValidator)),
    optObjExpl: _validators.optional(_validators.lazy(() => commonOptObjectTypeExplTypeValidator)),
    optStr: _validators.optional(_validators.string()),
    optStrArr: _validators.optional(_validators.array(_validators.items(_validators.string()))),
    optStrArrExpl: _validators.optional(_validators.array(_validators.items(_validators.string()))),
    optStrExpl: _validators.optional(_validators.string()),
    str: _validators.string(),
    strArr: _validators.array(_validators.items(_validators.string())),
    strArrExpl: _validators.array(_validators.items(_validators.string())),
    strExpl: _validators.string(),
  }),
)

export const labelPathParametersTypeValidator = _validators.object(
  _validators.shape({
    bool: _validators.boolean(),
    boolArr: _validators.array(_validators.items(_validators.boolean())),
    boolArrExpl: _validators.array(_validators.items(_validators.boolean())),
    boolExpl: _validators.boolean(),
    enm: _validators.lazy(() => commonEnumTypeTypeValidator),
    enmArr: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    enmArrExpl: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    enmExpl: _validators.lazy(() => commonEnumTypeTypeValidator),
    num: _validators.number(),
    numArr: _validators.array(_validators.items(_validators.number())),
    numArrExpl: _validators.array(_validators.items(_validators.number())),
    numExpl: _validators.number(),
    obj: _validators.lazy(() => commonObjectTypeTypeValidator),
    objExpl: _validators.lazy(() => commonObjectTypeExplTypeValidator),
    str: _validators.string(),
    strArr: _validators.array(_validators.items(_validators.string())),
    strArrExpl: _validators.array(_validators.items(_validators.string())),
    strExpl: _validators.string(),
  }),
)

export const matrixPathParametersTypeValidator = _validators.object(
  _validators.shape({
    bool: _validators.boolean(),
    boolArr: _validators.array(_validators.items(_validators.boolean())),
    boolArrExpl: _validators.array(_validators.items(_validators.boolean())),
    boolExpl: _validators.boolean(),
    enm: _validators.lazy(() => commonEnumTypeTypeValidator),
    enmArr: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    enmArrExpl: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    enmExpl: _validators.lazy(() => commonEnumTypeTypeValidator),
    num: _validators.number(),
    numArr: _validators.array(_validators.items(_validators.number())),
    numArrExpl: _validators.array(_validators.items(_validators.number())),
    numExpl: _validators.number(),
    obj: _validators.lazy(() => commonObjectTypeTypeValidator),
    objExpl: _validators.lazy(() => commonObjectTypeExplTypeValidator),
    str: _validators.string(),
    strArr: _validators.array(_validators.items(_validators.string())),
    strArrExpl: _validators.array(_validators.items(_validators.string())),
    strExpl: _validators.string(),
  }),
)

export const parameterIssueTypeValidator = _validators.object(_validators.shape({ message: _validators.string() }))

export const pipeDelimitedQueryParametersTypeValidator = _validators.object(
  _validators.shape({
    boolArrExpl: _validators.array(_validators.items(_validators.boolean())),
    enmArrExpl: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    numArrExpl: _validators.array(_validators.items(_validators.number())),
    optBoolArrExpl: _validators.optional(_validators.array(_validators.items(_validators.boolean()))),
    optEnmArrExpl: _validators.optional(
      _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    ),
    optNumArrExpl: _validators.optional(_validators.array(_validators.items(_validators.number()))),
    optStrArrExpl: _validators.optional(_validators.array(_validators.items(_validators.string()))),
    strArrExpl: _validators.array(_validators.items(_validators.string())),
  }),
)

export const simpleHeaderParametersTypeValidator = _validators.object(
  _validators.shape({
    'X-Bool-Header': _validators.boolean(),
    'X-BoolArr-Header': _validators.array(_validators.items(_validators.boolean())),
    'X-BoolArrExpl-Header': _validators.array(_validators.items(_validators.boolean())),
    'X-BoolExpl-Header': _validators.boolean(),
    'X-Enm-Header': _validators.lazy(() => commonEnumTypeTypeValidator),
    'X-EnmArr-Header': _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    'X-EnmArrExpl-Header': _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    'X-EnmExpl-Header': _validators.lazy(() => commonEnumTypeTypeValidator),
    'X-Num-Header': _validators.number(),
    'X-NumArr-Header': _validators.array(_validators.items(_validators.number())),
    'X-NumArrExpl-Header': _validators.array(_validators.items(_validators.number())),
    'X-NumExpl-Header': _validators.number(),
    'X-Obj-Header': _validators.lazy(() => commonObjectTypeTypeValidator),
    'X-ObjExpl-Header': _validators.lazy(() => commonObjectTypeExplTypeValidator),
    'X-OptBool-Header': _validators.optional(_validators.boolean()),
    'X-OptBoolArr-Header': _validators.optional(_validators.array(_validators.items(_validators.boolean()))),
    'X-OptBoolArrExpl-Header': _validators.optional(_validators.array(_validators.items(_validators.boolean()))),
    'X-OptBoolExpl-Header': _validators.optional(_validators.boolean()),
    'X-OptEnm-Header': _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    'X-OptEnmArr-Header': _validators.optional(
      _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    ),
    'X-OptEnmArrExpl-Header': _validators.optional(
      _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    ),
    'X-OptEnmExpl-Header': _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    'X-OptNum-Header': _validators.optional(_validators.number()),
    'X-OptNumArr-Header': _validators.optional(_validators.array(_validators.items(_validators.number()))),
    'X-OptNumArrExpl-Header': _validators.optional(_validators.array(_validators.items(_validators.number()))),
    'X-OptNumExpl-Header': _validators.optional(_validators.number()),
    'X-OptObj-Header': _validators.optional(_validators.lazy(() => commonOptObjectTypeTypeValidator)),
    'X-OptObjExpl-Header': _validators.optional(_validators.lazy(() => commonOptObjectTypeExplTypeValidator)),
    'X-OptStr-Header': _validators.optional(_validators.string()),
    'X-OptStrArr-Header': _validators.optional(_validators.array(_validators.items(_validators.string()))),
    'X-OptStrArrExpl-Header': _validators.optional(_validators.array(_validators.items(_validators.string()))),
    'X-OptStrExpl-Header': _validators.optional(_validators.string()),
    'X-Str-Header': _validators.string(),
    'X-StrArr-Header': _validators.array(_validators.items(_validators.string())),
    'X-StrArrExpl-Header': _validators.array(_validators.items(_validators.string())),
    'X-StrExpl-Header': _validators.string(),
  }),
)

export const simplePathParametersTypeValidator = _validators.object(
  _validators.shape({
    bool: _validators.boolean(),
    boolArr: _validators.array(_validators.items(_validators.boolean())),
    boolArrExpl: _validators.array(_validators.items(_validators.boolean())),
    boolExpl: _validators.boolean(),
    enm: _validators.lazy(() => commonEnumTypeTypeValidator),
    enmArr: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    enmArrExpl: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    enmExpl: _validators.lazy(() => commonEnumTypeTypeValidator),
    num: _validators.number(),
    numArr: _validators.array(_validators.items(_validators.number())),
    numArrExpl: _validators.array(_validators.items(_validators.number())),
    numExpl: _validators.number(),
    obj: _validators.lazy(() => commonObjectTypeTypeValidator),
    objExpl: _validators.lazy(() => commonObjectTypeExplTypeValidator),
    str: _validators.string(),
    strArr: _validators.array(_validators.items(_validators.string())),
    strArrExpl: _validators.array(_validators.items(_validators.string())),
    strExpl: _validators.string(),
  }),
)

export const simpleResponseHeaderParametersTypeValidator = _validators.object(
  _validators.shape({
    'X-Bool-Header': _validators.boolean(),
    'X-BoolArr-Header': _validators.array(_validators.items(_validators.boolean())),
    'X-BoolArrExpl-Header': _validators.array(_validators.items(_validators.boolean())),
    'X-BoolExpl-Header': _validators.boolean(),
    'X-Enm-Header': _validators.lazy(() => commonEnumTypeTypeValidator),
    'X-EnmArr-Header': _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    'X-EnmArrExpl-Header': _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    'X-EnmExpl-Header': _validators.lazy(() => commonEnumTypeTypeValidator),
    'X-Num-Header': _validators.number(),
    'X-NumArr-Header': _validators.array(_validators.items(_validators.number())),
    'X-NumArrExpl-Header': _validators.array(_validators.items(_validators.number())),
    'X-NumExpl-Header': _validators.number(),
    'X-Obj-Header': _validators.lazy(() => commonObjectTypeTypeValidator),
    'X-ObjExpl-Header': _validators.lazy(() => commonObjectTypeExplTypeValidator),
    'X-OptBool-Header': _validators.optional(_validators.boolean()),
    'X-OptBoolArr-Header': _validators.optional(_validators.array(_validators.items(_validators.boolean()))),
    'X-OptBoolArrExpl-Header': _validators.optional(_validators.array(_validators.items(_validators.boolean()))),
    'X-OptBoolExpl-Header': _validators.optional(_validators.boolean()),
    'X-OptEnm-Header': _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    'X-OptEnmArr-Header': _validators.optional(
      _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    ),
    'X-OptEnmArrExpl-Header': _validators.optional(
      _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    ),
    'X-OptEnmExpl-Header': _validators.optional(_validators.lazy(() => commonEnumTypeTypeValidator)),
    'X-OptNum-Header': _validators.optional(_validators.number()),
    'X-OptNumArr-Header': _validators.optional(_validators.array(_validators.items(_validators.number()))),
    'X-OptNumArrExpl-Header': _validators.optional(_validators.array(_validators.items(_validators.number()))),
    'X-OptNumExpl-Header': _validators.optional(_validators.number()),
    'X-OptObj-Header': _validators.optional(_validators.lazy(() => commonOptObjectTypeTypeValidator)),
    'X-OptObjExpl-Header': _validators.optional(_validators.lazy(() => commonOptObjectTypeExplTypeValidator)),
    'X-OptStr-Header': _validators.optional(_validators.string()),
    'X-OptStrArr-Header': _validators.optional(_validators.array(_validators.items(_validators.string()))),
    'X-OptStrArrExpl-Header': _validators.optional(_validators.array(_validators.items(_validators.string()))),
    'X-OptStrExpl-Header': _validators.optional(_validators.string()),
    'X-Str-Header': _validators.string(),
    'X-StrArr-Header': _validators.array(_validators.items(_validators.string())),
    'X-StrArrExpl-Header': _validators.array(_validators.items(_validators.string())),
    'X-StrExpl-Header': _validators.string(),
  }),
)

export const spaceDelimitedQueryParametersTypeValidator = _validators.object(
  _validators.shape({
    boolArrExpl: _validators.array(_validators.items(_validators.boolean())),
    enmArrExpl: _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    numArrExpl: _validators.array(_validators.items(_validators.number())),
    optBoolArrExpl: _validators.optional(_validators.array(_validators.items(_validators.boolean()))),
    optEnmArrExpl: _validators.optional(
      _validators.array(_validators.items(_validators.lazy(() => commonEnumTypeTypeValidator))),
    ),
    optNumArrExpl: _validators.optional(_validators.array(_validators.items(_validators.number()))),
    optStrArrExpl: _validators.optional(_validators.array(_validators.items(_validators.string()))),
    strArrExpl: _validators.array(_validators.items(_validators.string())),
  }),
)
