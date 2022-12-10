/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from generated-schemas/content-parameters.json (originating from oats-ts/oats-schemas)
 */

import { QueryParameters, parameter, validators } from '@oats-ts/openapi-runtime'
import { QueryParametersQueryParameters } from './queryTypes'
import {
  contentCommonEnumTypeTypeValidator,
  contentCommonObjectTypeTypeValidator,
  contentCommonOptObjectTypeTypeValidator,
} from './typeValidators'

export const queryParametersQueryParameters: QueryParameters<QueryParametersQueryParameters> = {
  descriptor: {
    str: parameter.query.required.schema('application/json', validators.string()),
    optStr: parameter.query.schema('application/json', validators.string()),
    num: parameter.query.required.schema('application/json', validators.number()),
    optNum: parameter.query.schema('application/json', validators.number()),
    bool: parameter.query.required.schema('application/json', validators.boolean()),
    optBool: parameter.query.schema('application/json', validators.boolean()),
    enm: parameter.query.required.schema(
      'application/json',
      validators.lazy(() => contentCommonEnumTypeTypeValidator),
    ),
    optEnm: parameter.query.schema(
      'application/json',
      validators.lazy(() => contentCommonEnumTypeTypeValidator),
    ),
    strArr: parameter.query.required.schema(
      'application/json',
      validators.array(validators.items(validators.string())),
    ),
    optStrArr: parameter.query.schema('application/json', validators.array(validators.items(validators.string()))),
    numArr: parameter.query.required.schema(
      'application/json',
      validators.array(validators.items(validators.number())),
    ),
    optNumArr: parameter.query.schema('application/json', validators.array(validators.items(validators.number()))),
    boolArr: parameter.query.required.schema(
      'application/json',
      validators.array(validators.items(validators.boolean())),
    ),
    optBoolArr: parameter.query.schema('application/json', validators.array(validators.items(validators.boolean()))),
    enmArr: parameter.query.required.schema(
      'application/json',
      validators.array(validators.items(validators.lazy(() => contentCommonEnumTypeTypeValidator))),
    ),
    optEnmArr: parameter.query.schema(
      'application/json',
      validators.array(validators.items(validators.lazy(() => contentCommonEnumTypeTypeValidator))),
    ),
    obj: parameter.query.required.schema(
      'application/json',
      validators.lazy(() => contentCommonObjectTypeTypeValidator),
    ),
    optObj: parameter.query.schema(
      'application/json',
      validators.lazy(() => contentCommonOptObjectTypeTypeValidator),
    ),
  },
}
