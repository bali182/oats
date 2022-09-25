/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import { lazy } from '@oats-ts/validators'
import { errorTypeValidator, petTypeValidator, petsTypeValidator } from './typeValidators'

export const createPetsResponseBodyValidator = {
  201: { 'application/json': lazy(() => petTypeValidator) },
  default: { 'application/json': lazy(() => errorTypeValidator) },
} as const

export const listPetsResponseBodyValidator = {
  200: { 'application/json': lazy(() => petsTypeValidator) },
  default: { 'application/json': lazy(() => errorTypeValidator) },
} as const

export const showPetByIdResponseBodyValidator = {
  200: { 'application/json': lazy(() => petTypeValidator) },
  default: { 'application/json': lazy(() => errorTypeValidator) },
} as const
