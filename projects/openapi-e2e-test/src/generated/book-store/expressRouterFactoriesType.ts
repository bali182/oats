/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/book-store.json
 */

import { IRouter } from 'express'

export type BookStoreRouterFactories = {
  createGetBooksRouter: (router?: IRouter | undefined) => IRouter
  createAddBookRouter: (router?: IRouter | undefined) => IRouter
  createGetBookRouter: (router?: IRouter | undefined) => IRouter
}
