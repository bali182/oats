/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import { IRouter, Router } from 'express'
import { createCreatePetsRouter, createListPetsRouter, createShowPetByIdRouter } from './expressRouterFactories'
import { SwaggerPetstoreRouterFactories } from './expressRouterFactoriesType'

export function createSwaggerPetstoreAppRouter(
  router?: IRouter | undefined,
  overrides: Partial<SwaggerPetstoreRouterFactories> = {},
): IRouter {
  const main = router ?? Router()
  const factories = [
    overrides.createListPetsRouter ?? createListPetsRouter,
    overrides.createCreatePetsRouter ?? createCreatePetsRouter,
    overrides.createShowPetByIdRouter ?? createShowPetByIdRouter,
  ]
  const routers = factories.map((factory) => factory(main)).filter((partial) => partial !== main)
  return routers.length === 0 ? main : main.use(...routers)
}
