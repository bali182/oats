/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { ServerAdapter } from '@oats-ts/openapi-http'
import { IRouter, NextFunction, Request, Response, Router } from 'express'
import { SwaggerPetstoreApi } from './apiType'

export function createSwaggerPetstoreContextHandler(
  router: IRouter | undefined,
  api: SwaggerPetstoreApi,
  adapter: ServerAdapter<ExpressToolkit>,
): IRouter {
  return (router ?? Router()).use((_: Request, response: Response, next: NextFunction) => {
    response.locals['__oats_api_qslhlh'] = api
    response.locals['__oats_adapter_qslhlh'] = adapter
    next()
  })
}
