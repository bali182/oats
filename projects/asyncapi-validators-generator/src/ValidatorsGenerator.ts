import { AsyncAPIReadOutput } from '@oats-ts/asyncapi-reader'
import { AsyncAPIGeneratorTarget } from '@oats-ts/asyncapi'
import { JsonSchemaValidatorsGenerator } from '@oats-ts/json-schema-validators-generator'

export class ValidatorsGenerator extends JsonSchemaValidatorsGenerator<
  AsyncAPIReadOutput,
  'asyncapi/validator',
  AsyncAPIGeneratorTarget
> {
  public readonly id = 'asyncapi/validator'
  public readonly consumes: [AsyncAPIGeneratorTarget] = ['asyncapi/type']
}
