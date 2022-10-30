import { EnhancedOperation, OpenAPIGeneratorTarget } from '@oats-ts/openapi-common'
import { BaseParameterObject } from '@oats-ts/openapi-model'
import { BaseDslGenerator } from '../utils/BaseDslGenerator'

export class SetCookieSerializersGenerator extends BaseDslGenerator {
  public name(): OpenAPIGeneratorTarget {
    return 'oats/set-cookie-serializer'
  }
  public consumes(): OpenAPIGeneratorTarget[] {
    return ['oats/cookies-type']
  }
  protected getTypeGeneratorTarget(): OpenAPIGeneratorTarget {
    return 'oats/cookies-type'
  }
  protected getFactoryFunctionName(): string {
    return this.paramsPkg.content.serializers.createSetCookieSerializer
  }
  protected getRuntimeImport(): string | [string, string] {
    return this.paramsPkg.imports.serializers
  }
  protected getRuntimeFactoryName(): string {
    return this.paramsPkg.exports.serializers
  }
  protected getParameters(data: EnhancedOperation): BaseParameterObject[] {
    return data?.cookie ?? []
  }
}
