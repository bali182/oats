import { SchemaObject } from '@oats-ts/json-schema-model'
import { combine, enumeration, Issue, object, shape } from '@oats-ts/validators'
import { validatorConfig } from '../utils/validatorConfig'
import { ignore } from '../utils/ignore'
import { ifNotValidated } from '../utils/ifNotValidated'
import { OpenAPIValidatorConfig, OpenAPIValidatorContext } from '../typings'

const validator = object(
  combine(
    shape(
      {
        type: enumeration(['string', 'boolean', 'number', 'integer']),
      },
      true,
    ),
    ignore([
      'discriminator',
      'allOf',
      'oneOf',
      'anyOf',
      'not',
      'items',
      'properties',
      'additionalProperties',
      'required',
      'enum',
    ]),
  ),
)

export function primitiveSchemaObject(
  schema: SchemaObject,
  context: OpenAPIValidatorContext,
  config: OpenAPIValidatorConfig,
): Issue[] {
  return ifNotValidated(
    context,
    schema,
  )(() => {
    const { uriOf } = context
    return validator(schema, uriOf(schema), validatorConfig)
  })
}
