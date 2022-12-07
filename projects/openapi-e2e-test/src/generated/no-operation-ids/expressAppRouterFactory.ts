/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from edge-cases/no-operation-ids.json (originating from oats-ts/oats-schemas)
 */

import { IRouter, Router } from 'express'
import {
  createDelete123Router,
  createDeleteRouter,
  createGetEmptyRouter,
  createGetFooRouter,
  createPatchFooParam1BarParam2Router,
  createPostFooRouter,
  createPutFooParam1BarParam2Router,
} from './expressRouterFactories'
import { NoOperationIdsRouterFactories } from './expressRouterFactoriesType'

export function createNoOperationIdsAppRouter(
  router?: IRouter | undefined,
  overrides: Partial<NoOperationIdsRouterFactories> = {},
): IRouter {
  const root = router ?? Router()
  const factories = [
    overrides.createGetEmptyRouter ?? createGetEmptyRouter,
    overrides.createDeleteRouter ?? createDeleteRouter,
    overrides.createDelete123Router ?? createDelete123Router,
    overrides.createGetFooRouter ?? createGetFooRouter,
    overrides.createPatchFooParam1BarParam2Router ?? createPatchFooParam1BarParam2Router,
    overrides.createPostFooRouter ?? createPostFooRouter,
    overrides.createPutFooParam1BarParam2Router ?? createPutFooParam1BarParam2Router,
  ]
  const uniqueRouters = factories.map((factory) => factory(router)).filter((childRouter) => childRouter !== root)
  return uniqueRouters.length === 0 ? root : root.use(...uniqueRouters)
}
