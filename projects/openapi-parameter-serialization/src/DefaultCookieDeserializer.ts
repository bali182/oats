import { CookieValue } from '@oats-ts/openapi-http'
import { failure, fluent, fromRecord, success, Try } from '@oats-ts/try'
import { isNil } from './utils'
import { BaseDeserializer } from './BaseDeserializer'
import { unexpectedStyle, unexpectedType } from './errors'
import {
  ParameterValue,
  Primitive,
  CookieDeserializer,
  CookieParameters,
  CookieParameterDescriptor,
  CookiePrimitive,
  CookieSchema,
} from './types'

export class DefaultCookieDeserializer<T> extends BaseDeserializer implements CookieDeserializer<T> {
  constructor(protected readonly parameters: CookieParameters<T>) {
    super()
  }

  public deserialize(input: string): Try<T> {
    return fluent(this.deserializeCookie(input, this.basePath())).flatMap((rawData) => {
      const parsedData = Object.keys(this.parameters.descriptor).reduce(
        (acc: Record<string, Try<ParameterValue>>, _key: string) => {
          const key = _key as keyof T & string
          const values = rawData.filter(({ name }) => name === key)
          const paramDescriptor = this.parameters.descriptor[key]
          acc[key] = this.deserializeParameter(paramDescriptor, key, values, this.append(this.basePath(), key))
          return acc
        },
        {},
      )
      return fromRecord(parsedData) as Try<T>
    })
  }

  protected basePath(): string {
    return 'headers'
  }

  protected deserializeParameter(
    descriptor: CookieParameterDescriptor,
    name: string,
    data: CookieValue[],
    path: string,
  ): Try<ParameterValue> {
    if (descriptor.type === 'schema') {
      return this.schema(descriptor, name, data, path)
    }
    switch (descriptor.style) {
      case 'form': {
        switch (descriptor.type) {
          case 'primitive':
            return this.formPrimitive(descriptor, name, data, path)
          default: {
            throw unexpectedType(descriptor.type, ['primitive'])
          }
        }
      }
      default:
        throw unexpectedStyle(descriptor.style, ['form'])
    }
  }

  protected formPrimitive(
    descriptor: CookiePrimitive,
    name: string,
    data: CookieValue[],
    path: string,
  ): Try<Primitive> {
    switch (data.length) {
      case 0: {
        return descriptor.required ? this.values.deserialize(descriptor.value, undefined, path) : success(undefined!)
      }
      case 1: {
        return this.values.deserialize(descriptor.value, this.decode(data[0].value), path)
      }
      default: {
        return failure({
          message: `duplicate cookie, should occur maximum once (found ${data.length} times)`,
          path,
          severity: 'error',
        })
      }
    }
  }

  protected schema(descriptor: CookieSchema, name: string, data: CookieValue[], path: string): Try<any> {
    throw new Error('implement me')
  }

  protected deserializeCookie(cookie: string | undefined, path: string): Try<CookieValue[]> {
    if (isNil(cookie) || cookie.length === 0) {
      return success([])
    }

    try {
      const sliced = cookie
        .trim() // Remove any possible excess whitespace from beginning and end
        .split('; ') // Split on semicolon
        .map((tuple) => tuple.split('=')) // Split key=value tuples on "="

      return success(sliced.map(([rawKey, value]): CookieValue => ({ name: this.decode(rawKey), value })))
    } catch (e) {
      return failure({
        message: (e as Error)?.message,
        path,
        severity: 'error',
      })
    }
  }
}
