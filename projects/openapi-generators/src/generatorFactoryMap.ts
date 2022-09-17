import { OpenAPIGeneratorTarget } from '@oats-ts/openapi-common'
import { factories } from './factories'
import { OpenAPIGenerator } from './types'

export const generatorFactoryMap: Record<OpenAPIGeneratorTarget, (config?: any) => OpenAPIGenerator> = {
  'oats/type-guard': factories.typeGuards,
  'oats/type-validator': factories.typeValidators,
  'oats/type': factories.types,
  'oats/api-type': factories.apiType,
  'oats/express-cors-middleware': factories.expressCorsMiddleware,
  'oats/express-router-factory': factories.expressRouterFactory,
  'oats/express-router': factories.expressRouters,
  'oats/express-routers-type': factories.expressRoutersType,
  'oats/operation': factories.operations,
  'oats/path-deserializer': factories.pathDeserializers,
  'oats/path-serializer': factories.pathSerializers,
  'oats/path-type': factories.pathTypes,
  'oats/cookies-type': factories.cookiesTypes,
  'oats/query-deserializer': factories.queryDeserializers,
  'oats/query-serializer': factories.querySerializers,
  'oats/query-type': factories.queryTypes,
  'oats/request-body-validator': factories.requestBodyValidators,
  'oats/request-headers-deserializer': factories.requestHeadersDeserializers,
  'oats/request-headers-serializer': factories.requestHeadersSerializers,
  'oats/request-headers-type': factories.requestHeadersTypes,
  'oats/request-server-type': factories.requestServerTypes,
  'oats/request-type': factories.requestTypes,
  'oats/response-body-validator': factories.responseBodyValidators,
  'oats/response-headers-deserializer': factories.responseHeadersDeserializers,
  'oats/response-headers-serializer': factories.responseHeadersSerializers,
  'oats/response-headers-type': factories.responseHeadersTypes,
  'oats/response-type': factories.responseTypes,
  'oats/response-server-type': factories.responseServerTypes,
  'oats/sdk-impl': factories.sdkImpl,
  'oats/sdk-type': factories.sdkType,
  'oats/cookie-serializer': undefined!,
  'oats/set-cookie-serializer': undefined!,
  'oats/cookie-deserializer': undefined!,
  'oats/set-cookie-deserializer': undefined!,
}
