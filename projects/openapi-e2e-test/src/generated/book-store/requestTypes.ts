/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/book-store.json
 */

import { GetBookPathParameters } from './pathTypes'
import { GetBooksQueryParameters } from './queryTypes'
import { GetBooksRequestHeaderParameters } from './requestHeaderTypes'
import { Book } from './types'

export type AddBookRequest = {
  mimeType: 'application/json'
  body: Book
}

export type GetBookRequest = {
  path: GetBookPathParameters
}

export type GetBooksRequest = {
  headers?: GetBooksRequestHeaderParameters
  query?: GetBooksQueryParameters
}
