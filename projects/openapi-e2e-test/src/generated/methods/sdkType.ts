/*
 * This file has been generated by Oats, please don't modify it by hand!
 *
 * Generated from https://raw.githubusercontent.com/oats-ts/oats-schemas/master/generated-schemas/methods.json
 */

import {
  DeleteMethodResponse,
  GetMethodResponse,
  OptionsMethodResponse,
  PatchMethodResponse,
  PostMethodResponse,
  PutMethodResponse,
} from './responseTypes'

export type HttpMethodsSdk = {
  getMethod(): Promise<GetMethodResponse>
  postMethod(): Promise<PostMethodResponse>
  putMethod(): Promise<PutMethodResponse>
  patchMethod(): Promise<PatchMethodResponse>
  optionsMethod(): Promise<OptionsMethodResponse>
  deleteMethod(): Promise<DeleteMethodResponse>
}
