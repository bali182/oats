/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from generated-schemas/content-parameters.json (originating from oats-ts/oats-schemas)
 */

import { validators } from '@oats-ts/openapi-runtime'
import { responseHeaderParametersTypeValidator } from './typeValidators'

export const responseHeaderParametersRequestBodyValidator = {
  'application/json': validators.lazy(() => responseHeaderParametersTypeValidator),
} as const
