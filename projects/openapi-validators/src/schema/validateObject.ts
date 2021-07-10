import { SchemaObject, ReferenceObject } from 'openapi3-ts'
import { values, flatMap } from 'lodash'
import { Issue, object, optional, shape, combine, array, items, string, literal } from '@oats-ts/validators'
import { OpenAPIGeneratorContext } from '@oats-ts/openapi-common'
import { append } from '../append'
import { validateSchema } from './validateSchema'
import { SchemaValidator } from './typings'
import { ordered } from '../ordered'
import { ignore } from '../ignore'

const validator = object(
  combine(
    shape<SchemaObject>(
      {
        type: optional(literal('object')),
        required: optional(array(items(string()))),
        properties: object(),
      },
      true,
    ),
    ignore(['discriminator', 'allOf', 'oneOf', 'anyOf', 'not', 'items', 'additionalProperties', 'enum']),
  ),
)

export const validateObject =
  (properties: SchemaValidator = validateSchema): SchemaValidator =>
  (data: SchemaObject | ReferenceObject, context: OpenAPIGeneratorContext, validated: Set<SchemaObject>): Issue[] => {
    const { dereference, uriOf } = context
    const input = dereference(data)
    if (validated.has(input)) {
      return []
    }
    validated.add(input)
    return ordered(() =>
      validator(input, {
        path: uriOf(input),
        append,
      }),
    )(() => flatMap(values(input.properties), (schema) => properties(schema, context, validated)))
  }
