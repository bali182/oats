/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/methods.json
 */

import { ClientAdapter } from '@oats-ts/openapi-http'
import { deleteMethod, getMethod, patchMethod, postMethod, putMethod } from './operations'
import {
  DeleteMethodResponse,
  GetMethodResponse,
  PatchMethodResponse,
  PostMethodResponse,
  PutMethodResponse,
} from './responseTypes'
import { HttpMethodsSdk } from './sdkType'

export class HttpMethodsSdkImpl implements HttpMethodsSdk {
  protected readonly adapter: ClientAdapter
  public constructor(adapter: ClientAdapter) {
    this.adapter = adapter
  }
  public async getMethod(): Promise<GetMethodResponse> {
    return getMethod(this.adapter)
  }
  public async postMethod(): Promise<PostMethodResponse> {
    return postMethod(this.adapter)
  }
  public async putMethod(): Promise<PutMethodResponse> {
    return putMethod(this.adapter)
  }
  public async patchMethod(): Promise<PatchMethodResponse> {
    return patchMethod(this.adapter)
  }
  public async deleteMethod(): Promise<DeleteMethodResponse> {
    return deleteMethod(this.adapter)
  }
}
