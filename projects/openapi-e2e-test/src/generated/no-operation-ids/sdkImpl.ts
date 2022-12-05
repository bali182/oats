/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from edge-cases/no-operation-ids.json (originating from oats-ts/oats-schemas)
 */

import { ClientAdapter, RunnableOperation } from '@oats-ts/openapi-runtime'
import {
  Delete123Operation,
  DeleteOperation,
  GetEmptyOperation,
  GetFooOperation,
  PatchFooParam1BarParam2Operation,
  PostFooOperation,
  PutFooParam1BarParam2Operation,
} from './operations'
import { PatchFooParam1BarParam2Request, PutFooParam1BarParam2Request } from './requestTypes'
import {
  Delete123Response,
  DeleteResponse,
  GetEmptyResponse,
  GetFooResponse,
  PatchFooParam1BarParam2Response,
  PostFooResponse,
  PutFooParam1BarParam2Response,
} from './responseTypes'
import { NoOperationIdsSdk } from './sdkType'

export class NoOperationIdsSdkImpl implements NoOperationIdsSdk {
  protected readonly adapter: ClientAdapter
  public constructor(adapter: ClientAdapter) {
    this.adapter = adapter
  }
  public async delete(): Promise<DeleteResponse> {
    return this.createDeleteOperation().run()
  }
  public async delete123(): Promise<Delete123Response> {
    return this.createDelete123Operation().run()
  }
  public async getFoo(): Promise<GetFooResponse> {
    return this.createGetFooOperation().run()
  }
  public async postFoo(): Promise<PostFooResponse> {
    return this.createPostFooOperation().run()
  }
  public async putFooParam1BarParam2(request: PutFooParam1BarParam2Request): Promise<PutFooParam1BarParam2Response> {
    return this.createPutFooParam1BarParam2Operation().run(request)
  }
  public async patchFooParam1BarParam2(
    request: PatchFooParam1BarParam2Request,
  ): Promise<PatchFooParam1BarParam2Response> {
    return this.createPatchFooParam1BarParam2Operation().run(request)
  }
  public async getEmpty(): Promise<GetEmptyResponse> {
    return this.createGetEmptyOperation().run()
  }
  protected createDeleteOperation(): RunnableOperation<void, DeleteResponse> {
    return new DeleteOperation(this.adapter)
  }
  protected createDelete123Operation(): RunnableOperation<void, Delete123Response> {
    return new Delete123Operation(this.adapter)
  }
  protected createGetFooOperation(): RunnableOperation<void, GetFooResponse> {
    return new GetFooOperation(this.adapter)
  }
  protected createPostFooOperation(): RunnableOperation<void, PostFooResponse> {
    return new PostFooOperation(this.adapter)
  }
  protected createPutFooParam1BarParam2Operation(): RunnableOperation<
    PutFooParam1BarParam2Request,
    PutFooParam1BarParam2Response
  > {
    return new PutFooParam1BarParam2Operation(this.adapter)
  }
  protected createPatchFooParam1BarParam2Operation(): RunnableOperation<
    PatchFooParam1BarParam2Request,
    PatchFooParam1BarParam2Response
  > {
    return new PatchFooParam1BarParam2Operation(this.adapter)
  }
  protected createGetEmptyOperation(): RunnableOperation<void, GetEmptyResponse> {
    return new GetEmptyOperation(this.adapter)
  }
}
