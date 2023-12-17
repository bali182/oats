/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from generated-schemas/methods.json (originating from oats-ts/oats-schemas)
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { ServerAdapter } from '@oats-ts/openapi-runtime'
import { IRouter, NextFunction, Request, Response, Router } from 'express'
import { HttpMethodsApi } from './apiType'

export function createHttpMethodsContextRouter(
  router: IRouter | undefined,
  api: HttpMethodsApi,
  adapter: ServerAdapter<ExpressToolkit>,
): IRouter {
  return (router ?? Router()).use((_: Request, response: Response, next: NextFunction) => {
    response.locals['__oats_api_79bqez'] = api
    response.locals['__oats_adapter_79bqez'] = adapter
    next()
  })
}
