import { getData, getIssues, isFailure } from '@oats-ts/try'
import { Primitive, ValueParser } from '../types'

export type ValueSuccessData<Input extends Primitive, Output extends Primitive> = [Output, Input]
export type ValueErrorData<Input extends Primitive> = [Input]

export type ValueTestData<Input extends Primitive, Output extends Primitive> = {
  data: ValueSuccessData<Input, Output>[]
  error: ValueErrorData<Input>[]
}

export const createValueParserTest = <Input extends Primitive, Output extends Primitive>(
  name: string,
  data: ValueTestData<Input, Output>,
  parser: ValueParser<Input, Output>,
): void => {
  describe(name, () => {
    if (data.data.length > 0) {
      it.each(data.data)('should parse to %j, given input: %j', (expected: Output, input: Input) => {
        const result = parser('test', input)
        expect(getData(result)).toEqual(expected)
      })
    }
    if (data.error.length > 0) {
      it.each(data.error)('should produce issues, given input: %j', (input: Input) => {
        const result = parser('test', input)
        expect(isFailure(result)).toBe(true)
        expect(getIssues(result)).not.toHaveLength(0)
      })
    }
  })
}
