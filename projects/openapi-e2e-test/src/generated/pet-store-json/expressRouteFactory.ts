/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import { ExpressToolkit } from '@oats-ts/openapi-express-server-adapter'
import { ServerAdapter } from '@oats-ts/openapi-http'
import { Router } from 'express'
import { SwaggerPetstoreApi } from './apiType'
import { createPetsRouter, listPetsRouter, showPetByIdRouter } from './expressRoutes'
import { SwaggerPetstoreRouters } from './expressRoutesType'

export function createSwaggerPetstoreRouter(
  api: SwaggerPetstoreApi,
  adapter: ServerAdapter<ExpressToolkit>,
  routes: Partial<SwaggerPetstoreRouters> = {},
): Router {
  return Router().use(
    (_, response, next) => {
      response.locals['__oats_api'] = api
      response.locals['__oats_adapter'] = adapter
      next()
    },
    routes.listPetsRouter ?? listPetsRouter,
    routes.createPetsRouter ?? createPetsRouter,
    routes.showPetByIdRouter ?? showPetByIdRouter,
  )
}
