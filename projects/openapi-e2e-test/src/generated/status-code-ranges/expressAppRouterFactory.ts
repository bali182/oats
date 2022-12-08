/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from edge-cases/status-code-ranges.json (originating from oats-ts/oats-schemas)
 */

import { IRouter, Router } from 'express'
import {
  createRange1XxRouter,
  createRange2XxRouter,
  createRange3XxRouter,
  createRange4XxRouter,
  createRange5XxRouter,
  createWithNormalStatusesRouter,
} from './expressRouterFactories'
import { StatusCodeRangesRouterFactories } from './expressRouterFactoriesType'

export function createStatusCodeRangesAppRouter(
  router?: IRouter | undefined,
  overrides: Partial<StatusCodeRangesRouterFactories> = {},
): IRouter {
  const root = router ?? Router()
  const factories = [
    overrides.createRange1XxRouter ?? createRange1XxRouter,
    overrides.createRange2XxRouter ?? createRange2XxRouter,
    overrides.createRange3XxRouter ?? createRange3XxRouter,
    overrides.createRange4XxRouter ?? createRange4XxRouter,
    overrides.createRange5XxRouter ?? createRange5XxRouter,
    overrides.createWithNormalStatusesRouter ?? createWithNormalStatusesRouter,
  ]
  const uniqueRouters = factories.map((factory) => factory(router)).filter((childRouter) => childRouter !== root)
  return uniqueRouters.length === 0 ? root : root.use(...uniqueRouters)
}
