/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/methods.json
 */

import { object, shape, string } from '@oats-ts/validators'

export const deleteMethodResponseBodyValidator = {
  200: { 'application/json': object(shape({ methodUsed: string() })) },
} as const

export const getMethodResponseBodyValidator = {
  200: { 'application/json': object(shape({ methodUsed: string() })) },
} as const

export const optionsMethodResponseBodyValidator = {
  200: { 'application/json': object(shape({ methodUsed: string() })) },
} as const

export const patchMethodResponseBodyValidator = {
  200: { 'application/json': object(shape({ methodUsed: string() })) },
} as const

export const postMethodResponseBodyValidator = {
  200: { 'application/json': object(shape({ methodUsed: string() })) },
} as const

export const putMethodResponseBodyValidator = {
  200: { 'application/json': object(shape({ methodUsed: string() })) },
} as const
