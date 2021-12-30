import { Try, flatMap, success } from '@oats-ts/try'
import { Primitive, ValueParser, QueryOptions, RawQueryParams } from '../types'
import { decode, isNil, mapArray } from '../utils'
import { getQueryValue } from './queryUtils'

export const queryDelimitedArray =
  (delimiter: string) =>
  <T extends Primitive>(parse: ValueParser<string, T>, opts: QueryOptions = {}) =>
  (name: string, data: RawQueryParams): Try<T[]> => {
    const options: QueryOptions = { explode: true, ...opts }

    const valuesTry = options.explode
      ? success(data[name] ?? undefined)
      : flatMap(getQueryValue(name, data, options), (v) => success(isNil(v) ? undefined : v.split(delimiter)))

    return flatMap(valuesTry, (values) => {
      return isNil(values) ? success(undefined) : mapArray(values, (value) => parse(name, decode(value)))
    })
  }
