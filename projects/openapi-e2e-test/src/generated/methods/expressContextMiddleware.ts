/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/methods.json
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { ServerAdapter } from '@oats-ts/openapi-http'
import { Handler, NextFunction, Request, Response } from 'express'
import { HttpMethodsApi } from './apiType'

export function createHttpMethodsContextMiddleware(
  api: HttpMethodsApi,
  adapter: ServerAdapter<ExpressToolkit>,
): Handler {
  return (_: Request, response: Response, next: NextFunction) => {
    response.locals['__oats_api'] = api
    response.locals['__oats_adapter'] = adapter
    next()
  }
}
