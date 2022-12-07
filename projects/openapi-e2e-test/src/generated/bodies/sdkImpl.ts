/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from generated-schemas/bodies.json (originating from oats-ts/oats-schemas)
 */

import { ClientAdapter, RunnableOperation } from '@oats-ts/openapi-runtime'
import {
  ArrObjOperation,
  BoolArrOperation,
  BoolOperation,
  EnmArrOperation,
  EnmOperation,
  NestedObjOperation,
  NumArrOperation,
  NumOperation,
  OptPrimTupleOperation,
  PrimObjOperation,
  PrimTupleOperation,
  StrArrOperation,
  StrOperation,
} from './operations'
import {
  ArrObjRequest,
  BoolArrRequest,
  BoolRequest,
  EnmArrRequest,
  EnmRequest,
  NestedObjRequest,
  NumArrRequest,
  NumRequest,
  OptPrimTupleRequest,
  PrimObjRequest,
  PrimTupleRequest,
  StrArrRequest,
  StrRequest,
} from './requestTypes'
import {
  ArrObjResponse,
  BoolArrResponse,
  BoolResponse,
  EnmArrResponse,
  EnmResponse,
  NestedObjResponse,
  NumArrResponse,
  NumResponse,
  OptPrimTupleResponse,
  PrimObjResponse,
  PrimTupleResponse,
  StrArrResponse,
  StrResponse,
} from './responseTypes'
import { BodiesSdk } from './sdkType'

export class BodiesSdkImpl implements BodiesSdk {
  protected readonly adapter: ClientAdapter
  public constructor(adapter: ClientAdapter) {
    this.adapter = adapter
  }
  public async arrObj(request: ArrObjRequest): Promise<ArrObjResponse> {
    return this.createArrObjOperation().run(request)
  }
  public async bool(request: BoolRequest): Promise<BoolResponse> {
    return this.createBoolOperation().run(request)
  }
  public async boolArr(request: BoolArrRequest): Promise<BoolArrResponse> {
    return this.createBoolArrOperation().run(request)
  }
  public async enm(request: EnmRequest): Promise<EnmResponse> {
    return this.createEnmOperation().run(request)
  }
  public async enmArr(request: EnmArrRequest): Promise<EnmArrResponse> {
    return this.createEnmArrOperation().run(request)
  }
  public async nestedObj(request: NestedObjRequest): Promise<NestedObjResponse> {
    return this.createNestedObjOperation().run(request)
  }
  public async num(request: NumRequest): Promise<NumResponse> {
    return this.createNumOperation().run(request)
  }
  public async numArr(request: NumArrRequest): Promise<NumArrResponse> {
    return this.createNumArrOperation().run(request)
  }
  public async optPrimTuple(request: OptPrimTupleRequest): Promise<OptPrimTupleResponse> {
    return this.createOptPrimTupleOperation().run(request)
  }
  public async primObj(request: PrimObjRequest): Promise<PrimObjResponse> {
    return this.createPrimObjOperation().run(request)
  }
  public async primTuple(request: PrimTupleRequest): Promise<PrimTupleResponse> {
    return this.createPrimTupleOperation().run(request)
  }
  public async str(request: StrRequest): Promise<StrResponse> {
    return this.createStrOperation().run(request)
  }
  public async strArr(request: StrArrRequest): Promise<StrArrResponse> {
    return this.createStrArrOperation().run(request)
  }
  protected createArrObjOperation(): RunnableOperation<ArrObjRequest, ArrObjResponse> {
    return new ArrObjOperation(this.adapter)
  }
  protected createBoolOperation(): RunnableOperation<BoolRequest, BoolResponse> {
    return new BoolOperation(this.adapter)
  }
  protected createBoolArrOperation(): RunnableOperation<BoolArrRequest, BoolArrResponse> {
    return new BoolArrOperation(this.adapter)
  }
  protected createEnmOperation(): RunnableOperation<EnmRequest, EnmResponse> {
    return new EnmOperation(this.adapter)
  }
  protected createEnmArrOperation(): RunnableOperation<EnmArrRequest, EnmArrResponse> {
    return new EnmArrOperation(this.adapter)
  }
  protected createNestedObjOperation(): RunnableOperation<NestedObjRequest, NestedObjResponse> {
    return new NestedObjOperation(this.adapter)
  }
  protected createNumOperation(): RunnableOperation<NumRequest, NumResponse> {
    return new NumOperation(this.adapter)
  }
  protected createNumArrOperation(): RunnableOperation<NumArrRequest, NumArrResponse> {
    return new NumArrOperation(this.adapter)
  }
  protected createOptPrimTupleOperation(): RunnableOperation<OptPrimTupleRequest, OptPrimTupleResponse> {
    return new OptPrimTupleOperation(this.adapter)
  }
  protected createPrimObjOperation(): RunnableOperation<PrimObjRequest, PrimObjResponse> {
    return new PrimObjOperation(this.adapter)
  }
  protected createPrimTupleOperation(): RunnableOperation<PrimTupleRequest, PrimTupleResponse> {
    return new PrimTupleOperation(this.adapter)
  }
  protected createStrOperation(): RunnableOperation<StrRequest, StrResponse> {
    return new StrOperation(this.adapter)
  }
  protected createStrArrOperation(): RunnableOperation<StrArrRequest, StrArrResponse> {
    return new StrArrOperation(this.adapter)
  }
}
