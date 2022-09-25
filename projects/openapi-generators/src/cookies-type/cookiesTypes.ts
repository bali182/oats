import { GeneratorConfig } from '@oats-ts/oats-ts'
import { OpenAPIGenerator } from '../types'
import { ParameterTypesGeneratorConfig } from '../utils/parameters/typings'
import { CookiesTypesGenerator } from './CookiesTypesGenerator'

function defaultConfig({
  documentation,
  ...rest
}: Partial<ParameterTypesGeneratorConfig & GeneratorConfig>): ParameterTypesGeneratorConfig & Partial<GeneratorConfig> {
  return {
    documentation: documentation ?? true,
    ...rest,
  }
}

export function cookiesTypes(config: Partial<ParameterTypesGeneratorConfig & GeneratorConfig> = {}): OpenAPIGenerator {
  return new CookiesTypesGenerator(defaultConfig(config))
}
