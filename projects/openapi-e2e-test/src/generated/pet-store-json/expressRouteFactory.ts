/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/pet-store-json.json
 */

import { Router } from 'express'
import { createCreatePetsRouter, createListPetsRouter, createShowPetByIdRouter } from './expressRoutes'
import { SwaggerPetstoreRouters } from './expressRoutesType'

export function createSwaggerPetstoreRouter(routes: Partial<SwaggerPetstoreRouters> = {}): Router {
  return Router().use(
    routes.listPets ?? createListPetsRouter(),
    routes.createPets ?? createCreatePetsRouter(),
    routes.showPetById ?? createShowPetByIdRouter(),
  )
}
