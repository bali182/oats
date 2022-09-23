/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/parameters.json
 */

import { NextFunction, Request, RequestHandler, Response } from 'express'

export const parametersCorsMiddleware: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
  response.setHeader('Access-Control-Allow-Origin', request.header('origin') ?? '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  response.setHeader(
    'Access-Control-Allow-Headers',
    'x-strexpl-header, x-optstrexpl-header, x-str-header, x-optstr-header, x-numexpl-header, x-optnumexpl-header, x-num-header, x-optnum-header, x-boolexpl-header, x-optboolexpl-header, x-bool-header, x-optbool-header, x-enmexpl-header, x-optenmexpl-header, x-enm-header, x-optenm-header, x-strarrexpl-header, x-optstrarrexpl-header, x-strarr-header, x-optstrarr-header, x-numarrexpl-header, x-optnumarrexpl-header, x-numarr-header, x-optnumarr-header, x-boolarrexpl-header, x-optboolarrexpl-header, x-boolarr-header, x-optboolarr-header, x-enmarrexpl-header, x-optenmarrexpl-header, x-enmarr-header, x-optenmarr-header, x-objexpl-header, x-optobjexpl-header, x-obj-header, x-optobj-header, content-type',
  )
  response.setHeader(
    'Access-Control-Expose-Headers',
    'content-type, x-strexpl-header, x-optstrexpl-header, x-str-header, x-optstr-header, x-numexpl-header, x-optnumexpl-header, x-num-header, x-optnum-header, x-boolexpl-header, x-optboolexpl-header, x-bool-header, x-optbool-header, x-enmexpl-header, x-optenmexpl-header, x-enm-header, x-optenm-header, x-strarrexpl-header, x-optstrarrexpl-header, x-strarr-header, x-optstrarr-header, x-numarrexpl-header, x-optnumarrexpl-header, x-numarr-header, x-optnumarr-header, x-boolarrexpl-header, x-optboolarrexpl-header, x-boolarr-header, x-optboolarr-header, x-enmarrexpl-header, x-optenmarrexpl-header, x-enmarr-header, x-optenmarr-header, x-objexpl-header, x-optobjexpl-header, x-obj-header, x-optobj-header',
  )
  next()
}
