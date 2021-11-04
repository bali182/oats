import { HttpResponse } from '@oats-ts/openapi-http'
import { PathParametersPayload } from '../types/PathParametersPayload'
import { ServerIssue } from '../types/ServerIssue'

export type SimplePathParametersResponse =
  | HttpResponse<PathParametersPayload, 200, 'application/json', undefined>
  | HttpResponse<ServerIssue[], 400, 'application/json', undefined>
