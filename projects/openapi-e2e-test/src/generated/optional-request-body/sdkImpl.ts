/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/schemas/optional-request-body.json
 */

import { RunnableOperation, SyncClientAdapter } from '@oats-ts/openapi-runtime'
import { OptionalRequestBodyOperation } from './operationClasses'
import { OptionalRequestBodyRequest } from './requestTypes'
import { OptionalRequestBodyResponse } from './responseTypes'
import { OptionalBodiesSdk } from './sdkType'

export class OptionalBodiesSdkImpl implements OptionalBodiesSdk {
  protected readonly adapter: SyncClientAdapter
  public constructor(adapter: SyncClientAdapter) {
    this.adapter = adapter
  }
  public async optionalRequestBody(request: OptionalRequestBodyRequest): Promise<OptionalRequestBodyResponse> {
    return this.createOptionalRequestBodyOperation().run(request)
  }
  protected createOptionalRequestBodyOperation(): RunnableOperation<
    OptionalRequestBodyRequest,
    OptionalRequestBodyResponse
  > {
    return new OptionalRequestBodyOperation(this.adapter)
  }
}
