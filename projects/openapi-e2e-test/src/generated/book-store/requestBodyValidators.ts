/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/book-store.json (originating from oats-ts/oats-schemas)
 */

import { schemas } from '@oats-ts/openapi-runtime'
import { bookTypeValidator } from './typeValidators'

export const addBookRequestBodyValidator = { 'application/json': schemas.lazy(() => bookTypeValidator) } as const
