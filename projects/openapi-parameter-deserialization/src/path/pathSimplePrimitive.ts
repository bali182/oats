import { flatMap, Try } from '@oats-ts/try'
import { ValueParser, RawPathParams, PathOptions, Primitive, PathValueDeserializer } from '../types'
import { decode } from '../utils'
import { getPathValue } from './pathUtils'

export const pathSimplePrimitive =
  <T extends Primitive>(parse: ValueParser<string, T>, options: PathOptions = {}): PathValueDeserializer<T> =>
  (name: string, data: RawPathParams): Try<T> => {
    return flatMap(getPathValue(name, data), (pathValue) => {
      return parse(name, decode(pathValue))
    })
  }
