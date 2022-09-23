/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import { Error, Pet, Pets } from './types'

export function isError(input: any): input is Error {
  return (
    input !== null && typeof input === 'object' && typeof input.code === 'number' && typeof input.message === 'string'
  )
}

export function isPet(input: any): input is Pet {
  return (
    input !== null &&
    typeof input === 'object' &&
    typeof input.id === 'number' &&
    typeof input.name === 'string' &&
    (input.tag === null || input.tag === undefined || typeof input.tag === 'string')
  )
}

export function isPets(input: any): input is Pets {
  return Array.isArray(input) && input.every((item: any) => isPet(item) as boolean)
}
