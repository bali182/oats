/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from generated-schemas/parameters.json (originating from oats-ts/oats-schemas)
 */

import { SetCookieValue as _SetCookieValue } from '@oats-ts/openapi-runtime'
import { SimpleResponseHeaderParameters200ResponseHeaderParameters } from './responseHeaderTypes'
import {
  DeepObjectQueryParameters,
  FormCookieParameters,
  FormQueryParameters,
  LabelPathParameters,
  MatrixPathParameters,
  ParameterIssue,
  PipeDelimitedQueryParameters,
  SimpleHeaderParameters,
  SimplePathParameters,
  SpaceDelimitedQueryParameters,
} from './types'

export type DeepObjectQueryParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: DeepObjectQueryParameters
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
    }

export type FormCookieParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: FormCookieParameters
      cookies: _SetCookieValue[]
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
      cookies: _SetCookieValue[]
    }

export type FormQueryParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: FormQueryParameters
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
    }

export type LabelPathParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: LabelPathParameters
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
    }

export type MatrixPathParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: MatrixPathParameters
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
    }

export type PipeDelimitedQueryParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: PipeDelimitedQueryParameters
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
    }

export type SimpleHeaderParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: SimpleHeaderParameters
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
    }

export type SimplePathParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: SimplePathParameters
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
    }

export type SimpleResponseHeaderParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: {
        ok: boolean
      }
      headers: SimpleResponseHeaderParameters200ResponseHeaderParameters
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
    }

export type SpaceDelimitedQueryParametersResponse =
  | {
      statusCode: 200
      mimeType: 'application/json'
      body: SpaceDelimitedQueryParameters
    }
  | {
      statusCode: 400
      mimeType: 'application/json'
      body: ParameterIssue[]
    }
