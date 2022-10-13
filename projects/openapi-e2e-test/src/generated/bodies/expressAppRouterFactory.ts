/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/bodies.json
 */

import { IRouter, Router } from 'express'
import {
  createArrObjRouter,
  createBoolArrRouter,
  createBoolRouter,
  createEnmArrRouter,
  createEnmRouter,
  createNestedObjRouter,
  createNumArrRouter,
  createNumRouter,
  createOptPrimTupleRouter,
  createPrimObjRouter,
  createPrimTupleRouter,
  createStrArrRouter,
  createStrRouter,
} from './expressRouterFactories'
import { BodiesRouterFactories } from './expressRouterFactoriesType'

export function createBodiesAppRouter(
  router?: IRouter | undefined,
  overrides: Partial<BodiesRouterFactories> = {},
): IRouter {
  const main = router ?? Router()
  const factories = [
    overrides.createStrRouter ?? createStrRouter,
    overrides.createNumRouter ?? createNumRouter,
    overrides.createEnmRouter ?? createEnmRouter,
    overrides.createBoolRouter ?? createBoolRouter,
    overrides.createPrimTupleRouter ?? createPrimTupleRouter,
    overrides.createOptPrimTupleRouter ?? createOptPrimTupleRouter,
    overrides.createStrArrRouter ?? createStrArrRouter,
    overrides.createNumArrRouter ?? createNumArrRouter,
    overrides.createEnmArrRouter ?? createEnmArrRouter,
    overrides.createBoolArrRouter ?? createBoolArrRouter,
    overrides.createPrimObjRouter ?? createPrimObjRouter,
    overrides.createArrObjRouter ?? createArrObjRouter,
    overrides.createNestedObjRouter ?? createNestedObjRouter,
  ]
  const routers = factories.map((factory) => factory(main)).filter((partial) => partial !== main)
  return routers.length === 0 ? main : main.use(...routers)
}
