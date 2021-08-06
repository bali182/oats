import { SchemaObject, ReferenceObject, isReferenceObject } from '@oats-ts/json-schema-model'
import { TypeScriptModule } from '@oats-ts/typescript-writer'
import { OpenAPIGeneratorContext } from '@oats-ts/openapi-common'
import { getTypeGuardFunctionAst } from './getTypeGuardFunctionAst'
import { TypeGuardGeneratorConfig, UnionTypeGuardGeneratorConfig } from './typings'
import { getDiscriminators } from '@oats-ts/openapi-common'
import { isNil, keys } from 'lodash'
import { factory } from 'typescript'
import { getTypeAssertionAst } from './getTypeAssertionAst'
import { getDiscriminatorBasedTypeAssertionAst } from './getDiscriminatorBasedTypeAssertionAst'
import { getTypeGuardImports } from './getTypeGuardImports'

function isUnionTypeGuardGeneratorConfig(input: any): input is UnionTypeGuardGeneratorConfig {
  return typeof input === 'object' && input !== null && input.discriminatorBased === true
}

export function generateTypeGuard(
  schema: SchemaObject | ReferenceObject,
  context: OpenAPIGeneratorContext,
  config: TypeGuardGeneratorConfig,
): TypeScriptModule {
  const { pathOf, dependenciesOf } = context
  const path = pathOf(schema, 'openapi/type-guard')
  const typeImports = dependenciesOf(path, schema, 'openapi/type')
  if (isUnionTypeGuardGeneratorConfig(config)) {
    if (isReferenceObject(schema)) {
      return undefined
    }
    const discriminators = getDiscriminators(schema, context)
    if (keys(discriminators).length === 0 || (!isNil(schema.oneOf) && schema.oneOf.length > 0)) {
      return undefined
    }
    return {
      path,
      content: [getTypeGuardFunctionAst(schema, context, getDiscriminatorBasedTypeAssertionAst(schema, context))],
      dependencies: [...typeImports],
    }
  }
  return {
    path,
    dependencies: [...typeImports, ...getTypeGuardImports(schema, context, config)],
    content: [
      getTypeGuardFunctionAst(
        schema,
        context,
        getTypeAssertionAst(schema, context, factory.createIdentifier('input'), config, 0),
      ),
    ],
  }
}
