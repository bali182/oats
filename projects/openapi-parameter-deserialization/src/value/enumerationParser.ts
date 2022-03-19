import { Try, failure, success } from '@oats-ts/try'
import { ValidatorConfig } from '@oats-ts/validators'
import { Primitive, ValueParser } from '../types'

export const enumerationParser =
  <T extends Primitive, E extends T>(values: E[]): ValueParser<T, E> =>
  (value: T, name: string, path: string, config: ValidatorConfig): Try<E> => {
    if (values.indexOf(value as E) < 0) {
      const valuesLiteral = values.map((v) => (typeof v === 'string' ? `"${v}"` : `${v}`)).join(',')
      return failure([
        {
          message: `should be one of ${valuesLiteral}.`,
          path,
          severity: 'error',
          type: '',
        },
      ])
    }
    return success(value as E)
  }
