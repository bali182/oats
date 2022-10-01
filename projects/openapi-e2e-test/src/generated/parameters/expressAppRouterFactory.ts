/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/parameters.json
 */

import { IRouter, Router } from 'express'
import {
  createDeepObjectQueryParametersRouter,
  createFormCookieParametersRouter,
  createFormQueryParametersRouter,
  createLabelPathParametersRouter,
  createMatrixPathParametersRouter,
  createPipeDelimitedQueryParametersRouter,
  createSimpleHeaderParametersRouter,
  createSimplePathParametersRouter,
  createSimpleResponseHeaderParametersRouter,
  createSpaceDelimitedQueryParametersRouter,
} from './expressRouterFactories'
import { ParametersRouterFactories } from './expressRouterFactoriesType'

export function createParametersAppRouter(
  router?: IRouter,
  overrides: Partial<ParametersRouterFactories> = {},
): IRouter {
  const root = router ?? Router()
  const factories = [
    overrides.createSimplePathParametersRouter ?? createSimplePathParametersRouter,
    overrides.createLabelPathParametersRouter ?? createLabelPathParametersRouter,
    overrides.createMatrixPathParametersRouter ?? createMatrixPathParametersRouter,
    overrides.createFormQueryParametersRouter ?? createFormQueryParametersRouter,
    overrides.createSpaceDelimitedQueryParametersRouter ?? createSpaceDelimitedQueryParametersRouter,
    overrides.createPipeDelimitedQueryParametersRouter ?? createPipeDelimitedQueryParametersRouter,
    overrides.createDeepObjectQueryParametersRouter ?? createDeepObjectQueryParametersRouter,
    overrides.createSimpleHeaderParametersRouter ?? createSimpleHeaderParametersRouter,
    overrides.createFormCookieParametersRouter ?? createFormCookieParametersRouter,
    overrides.createSimpleResponseHeaderParametersRouter ?? createSimpleResponseHeaderParametersRouter,
  ]
  const uniqueRouters = factories.map((factory) => factory(router)).filter((childRouter) => childRouter !== root)
  return uniqueRouters.length === 0 ? root : root.use(...uniqueRouters)
}
