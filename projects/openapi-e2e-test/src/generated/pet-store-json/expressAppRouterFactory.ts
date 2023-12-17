/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from schemas/pet-store-json.json (originating from oats-ts/oats-schemas)
 */

import { IRouter, Router } from 'express'
import { createCreatePetsRouter, createListPetsRouter, createShowPetByIdRouter } from './expressRouterFactories'
import { SwaggerPetstoreJsonRouterFactories } from './expressRouterFactoriesType'

export function createSwaggerPetstoreJsonAppRouter(
  _local_router?: IRouter | undefined,
  _local_overrides: Partial<SwaggerPetstoreJsonRouterFactories> = {},
): IRouter {
  const _local_root = _local_router ?? Router()
  const _local_factories = [
    _local_overrides.createCreatePetsRouter ?? createCreatePetsRouter,
    _local_overrides.createListPetsRouter ?? createListPetsRouter,
    _local_overrides.createShowPetByIdRouter ?? createShowPetByIdRouter,
  ]
  const _local_uniqueRouters = _local_factories
    .map((_local_factory) => _local_factory(_local_router))
    .filter((_local_childRouter) => _local_childRouter !== _local_root)
  return _local_uniqueRouters.length === 0 ? _local_root : _local_root.use(..._local_uniqueRouters)
}
