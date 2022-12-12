/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/cookies.json (originating from oats-ts/oats-schemas)
 */

import { CookieParameters, parameter, validators } from '@oats-ts/openapi-runtime'
import { ProtectedPathCookieParameters } from './cookieTypes'

export const protectedPathCookieParameters: CookieParameters<ProtectedPathCookieParameters> = {
  descriptor: { token: parameter.cookie.form.required.primitive(parameter.value.string()) },
  schema: validators.object(validators.shape({ token: validators.string() })),
}
