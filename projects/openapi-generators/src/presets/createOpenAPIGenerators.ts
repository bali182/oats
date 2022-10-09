import { OpenAPIGeneratorTarget } from '@oats-ts/openapi-common'
import { entries, isNil } from 'lodash'
import { generatorFactoryMap } from '../generatorFactoryMap'
import { OpenAPIGenerator } from '../types'
import { OpenAPIPresetConfig } from './types'

export function createOpenAPIGenerators(cfgs: Readonly<OpenAPIPresetConfig>): OpenAPIGenerator[] {
  const targetsWithConfigs = entries(cfgs).sort(([t1], [t2]) => t1.localeCompare(t2)) as [OpenAPIGeneratorTarget, any][]
  const generators: OpenAPIGenerator[] = []
  for (const [target, generatorConfig] of targetsWithConfigs) {
    if (generatorConfig !== false && !isNil(generatorConfig)) {
      const factory = generatorFactoryMap[target]
      if (isNil(factory)) {
        throw new TypeError(`Unknown target "${target}"`)
      }
      generators.push(generatorConfig === true ? factory() : factory(generatorConfig))
    }
  }
  return generators
}
