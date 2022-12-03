/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from edge-cases/no-operation-ids.json (originating from oats-ts/oats-schemas)
 */

import { PatchFooParam1BarParam2Request, PutFooParam1BarParam2Request } from './requestTypes'
import {
  Delete123Response,
  DeleteResponse,
  GetFooResponse,
  PatchFooParam1BarParam2Response,
  PostFooResponse,
  PutFooParam1BarParam2Response,
} from './responseTypes'

export type NoOperationIdsSdk = {
  delete(): Promise<DeleteResponse>
  delete123(): Promise<Delete123Response>
  getFoo(): Promise<GetFooResponse>
  postFoo(): Promise<PostFooResponse>
  putFooParam1BarParam2(request: PutFooParam1BarParam2Request): Promise<PutFooParam1BarParam2Response>
  patchFooParam1BarParam2(request: PatchFooParam1BarParam2Request): Promise<PatchFooParam1BarParam2Response>
}
