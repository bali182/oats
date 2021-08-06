import { SchemaObject } from '@oats-ts/json-schema-model'
import { boolean, shape, object, optional, string, number, array, items, any, record } from '@oats-ts/validators'

export const schemaObject = object(
  shape<SchemaObject>(
    {
      type: optional(string()),
      format: optional(string()),
      deprecated: optional(boolean()),
      multipleOf: optional(number()),
      maximum: optional(number()),
      exclusiveMaximum: optional(boolean()),
      minimum: optional(number()),
      exclusiveMinimum: optional(boolean()),
      maxLength: optional(number()),
      minLength: optional(number()),
      pattern: optional(string()),
      maxItems: optional(number()),
      minItems: optional(number()),
      uniqueItems: optional(boolean()),
      description: optional(string()),
      required: optional(array(items(string()))),
      enum: optional(array()),
      discriminator: optional(object()),
      properties: optional(object()),
      allOf: optional(array(items(object()))),
      oneOf: optional(array(items(object()))),
      anyOf: optional(array(items(object()))),
      items: optional(object()),
      additionalProperties: optional(object()),
      default: optional(any),
      examples: optional(array()),
      externalDocs: optional(object()),
      maxProperties: optional(number()),
      minProperties: optional(number()),
      not: optional(object()),
      readOnly: optional(boolean()),
      title: optional(string()),
      writeOnly: optional(boolean()),
      if: optional(object()),
      then: optional(object()),
      else: optional(object()),
      contains: optional(object()),
      patternProperties: optional(object(record(string(), object()))),
      additionalItems: optional(object()),
      propertyNames: optional(object()),
      const: optional(any),
    },
    true,
  ),
)
