import { TypeScriptModule, mergeTypeScriptModules } from '@oats-ts/typescript-writer'
import { sortBy, isNil } from 'lodash'
import { getNamedSchemas, ReadOutput, HasSchemas, createGeneratorContext } from '@oats-ts/model-common'
import { generateValidator } from './generateValidator'
import { ValidatorsGeneratorConfig, ValidatorsGeneratorContext } from './typings'
import { Result, GeneratorConfig, CodeGenerator } from '@oats-ts/generator'
import { Expression, ImportDeclaration, factory } from 'typescript'
import { SchemaObject, ReferenceObject } from '@oats-ts/json-schema-model'
import { collectExternalReferenceImports, getValidatorImports } from './getValidatorImports'
import { getRightHandSideValidatorAst } from './getRightHandSideValidatorAst'

export abstract class JsonSchemaValidatorsGenerator<
  T extends ReadOutput<HasSchemas>,
  Id extends string,
  C extends string,
> implements CodeGenerator<T, TypeScriptModule>
{
  private context: ValidatorsGeneratorContext = null
  private validatorConfig: ValidatorsGeneratorConfig

  public abstract readonly id: Id
  public abstract readonly consumes: [C]

  public constructor(config: ValidatorsGeneratorConfig) {
    this.validatorConfig = config
  }

  public initialize(data: T, config: GeneratorConfig, generators: CodeGenerator<T, TypeScriptModule>[]): void {
    this.context = {
      ...createGeneratorContext(data, config, generators),
      produces: this.id,
      consumes: this.consumes[0],
    }
  }

  public async generate(): Promise<Result<TypeScriptModule[]>> {
    const { context, validatorConfig } = this
    const { nameOf } = context
    const schemas = sortBy(getNamedSchemas(context), (schema) => nameOf(schema, context.produces))
    const data = mergeTypeScriptModules(
      schemas.map((schema): TypeScriptModule => generateValidator(schema, context, validatorConfig)),
    )
    return {
      data,
      isOk: true,
      issues: [],
    }
  }

  public referenceOf(input: SchemaObject | ReferenceObject): Expression {
    const { context, validatorConfig: config } = this
    const { nameOf, dereference } = context
    const schema = dereference(input)
    const name = nameOf(schema, context.produces)
    return isNil(name) ? getRightHandSideValidatorAst(input, context, config, 0) : factory.createIdentifier(name)
  }

  public dependenciesOf(fromPath: string, input: SchemaObject | ReferenceObject): ImportDeclaration[] {
    const { context, validatorConfig: config } = this
    return getValidatorImports(fromPath, input, context, config, collectExternalReferenceImports)
  }
}
