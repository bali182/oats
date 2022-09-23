/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/parameters.json
 */

import { createSetCookieSerializer, dsl } from '@oats-ts/openapi-parameter-serialization'
import { FormCookieParametersCookieParameters } from './cookieTypes'

export const formCookieParametersSetCookieSerializer = createSetCookieSerializer<FormCookieParametersCookieParameters>({
  optStr: dsl.cookie.form.primitive(dsl.value.string(), { explode: false, required: false }),
  optNum: dsl.cookie.form.primitive(dsl.value.number(), { explode: false, required: false }),
  optBool: dsl.cookie.form.primitive(dsl.value.boolean(), { explode: false, required: false }),
  optEnm: dsl.cookie.form.primitive(dsl.value.string(dsl.value.enum(['A', 'B', 'C'])), {
    explode: false,
    required: false,
  }),
})
