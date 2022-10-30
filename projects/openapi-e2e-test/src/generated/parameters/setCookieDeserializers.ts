/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/parameters.json
 */

import { deserializers as _deserializers, dsl as _dsl } from '@oats-ts/openapi-parameter-serialization'
import { FormCookieParametersCookieParameters } from './cookieTypes'

export const formCookieParametersSetCookieDeserializer =
  _deserializers.createSetCookieDeserializer<FormCookieParametersCookieParameters>({
    optStr: _dsl.cookie.form.primitive(_dsl.value.string(), { explode: false, required: false }),
    optNum: _dsl.cookie.form.primitive(_dsl.value.number(), { explode: false, required: false }),
    optBool: _dsl.cookie.form.primitive(_dsl.value.boolean(), { explode: false, required: false }),
    optEnm: _dsl.cookie.form.primitive(_dsl.value.string(_dsl.value.enum(['A', 'B', 'C'])), {
      explode: false,
      required: false,
    }),
  })
