import { Issue, object, optional, shape, combine, string, literal, boolean, enumeration } from '@oats-ts/validators'
import { ParameterObject } from '@oats-ts/openapi-model'
import { append } from '../utils/append'
import { paramterObjectArraySchema, parameterObjectObjectSchema, parameterObjectSchema } from './parameterObjectSchema'
import { warnContent } from '../utils/warnContent'
import { ordered } from '../utils/ordered'
import { OpenAPIValidatorConfig, OpenAPIValidatorContext } from '../typings'
import { referenceable } from './referenceable'

const validator = object(
  combine([
    shape<ParameterObject>(
      {
        name: string(),
        in: literal('query'),
        required: optional(boolean()),
        style: optional(enumeration(['form', 'spaceDelimited', 'pipeDelimited', 'deepObject'])),
        schema: object(),
      },
      true,
    ),
    warnContent,
  ]),
)

export function queryParameterObject(
  input: ParameterObject,
  context: OpenAPIValidatorContext,
  config: OpenAPIValidatorConfig,
): Issue[] {
  const { uriOf } = context
  const uri = uriOf(input)
  return ordered(() =>
    validator(input, {
      path: uri,
      append,
    }),
  )(() => {
    switch (input.style) {
      case 'form': {
        return referenceable(parameterObjectSchema)(input.schema, context, config)
      }
      case 'spaceDelimited': {
        return [
          ...literal(true)(input.explode, { path: append(uri, 'explode'), append }),
          ...referenceable(paramterObjectArraySchema)(input.schema, context, config),
        ]
      }
      case 'pipeDelimited': {
        return [
          ...literal(true)(input.explode, { path: append(uri, 'explode'), append }),
          ...referenceable(paramterObjectArraySchema)(input.schema, context, config),
        ]
      }
      case 'deepObject': {
        return [
          ...literal(true)(input.explode, { path: append(uri, 'explode'), append }),
          ...referenceable(parameterObjectObjectSchema)(input.schema, context, config),
        ]
      }
    }
    return []
  })
}
