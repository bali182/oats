/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/book-store.json
 */

import { number, object, optional, shape, string } from '@oats-ts/validators'

export const appErrorTypeValidator = object(shape({ message: string() }))

export const bookTypeValidator = object(
  shape({
    author: string(),
    description: optional(string()),
    id: number(),
    price: number(),
    title: string(),
  }),
)
