/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/optional-request-body.json
 */

import { NextFunction, Request, RequestHandler, Response } from 'express'

export const bodiesCorsMiddleware: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
  response.setHeader('Access-Control-Allow-Origin', request.header('origin') ?? '*')
  response.setHeader('Access-Control-Allow-Methods', 'POST')
  response.setHeader('Access-Control-Allow-Headers', 'content-type')
  response.setHeader('Access-Control-Expose-Headers', 'content-type')
  next()
}
