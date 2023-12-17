/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/pet-store-yaml.yaml (originating from oats-ts/oats-schemas)
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { ServerAdapter } from '@oats-ts/openapi-runtime'
import { IRouter, NextFunction, Request, Response, Router } from 'express'
import { SwaggerPetstoreYamlApi } from './apiType'

export function createSwaggerPetstoreYamlContextRouter(
  router: IRouter | undefined,
  api: SwaggerPetstoreYamlApi,
  adapter: ServerAdapter<ExpressToolkit>,
): IRouter {
  return (router ?? Router()).use((_: Request, response: Response, next: NextFunction) => {
    response.locals['__oats_api_1e1876z'] = api
    response.locals['__oats_adapter_1e1876z'] = adapter
    next()
  })
}
