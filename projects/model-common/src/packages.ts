import { entries } from 'lodash'
import { GeneratorContext, RuntimePackage, RuntimePackageInternal } from './types'

const validatorsExports = {
  validators: 'validators',
}

const validatorsContent = {
  validators: {
    string: 'string',
    combine: 'combine',
    enumeration: 'enumeration',
    number: 'number',
    boolean: 'boolean',
    array: 'array',
    object: 'object',
    optional: 'optional',
    shape: 'shape',
    items: 'items',
    record: 'record',
    any: 'any',
    union: 'union',
    lazy: 'lazy',
    literal: 'literal',
    tuple: 'tuple',
  },
}

const tryExports = {
  Try: 'Try',
  getData: 'getData',
  map: 'map',
  flatMap: 'flatMap',
}

const openApiHttpExports = {
  HasHeaders: 'HasHeaders',
  HasPathParameters: 'HasPathParameters',
  HasQueryParameters: 'HasQueryParameters',
  HasRequestBody: 'HasRequestBody',
  HasIssues: 'HasIssues',
  HasNoIssues: 'HasNoIssues',
  HttpMethod: 'HttpMethod',
  HttpResponse: 'HttpResponse',
  RawHttpHeaders: 'RawHttpHeaders',
  RawHttpRequest: 'RawHttpRequest',
  RawHttpResponse: 'RawHttpResponse',
  ResponseExpectation: 'ResponseExpectation',
  ResponseExpectations: 'ResponseExpectations',
  CookieValue: 'CookieValue',
  Cookies: 'Cookies',
  ClientAdapter: 'ClientAdapter',
  ServerAdapter: 'ServerAdapter',
  CorsConfiguration: 'CorsConfiguration',
}

const openApiExpressServerAdapterExports = {
  ExpressToolkit: 'ExpressToolkit',
}

const openApiParameterSerializationExports = {
  createHeaderSerializer: 'createHeaderSerializer',
  createPathSerializer: 'createPathSerializer',
  createQuerySerializer: 'createQuerySerializer',
  createCookieSerializer: 'createCookieSerializer',
  createSetCookieSerializer: 'createSetCookieSerializer',
  serializers: 'serializers',
  createQueryDeserializer: 'createQueryDeserializer',
  createPathDeserializer: 'createPathDeserializer',
  createHeaderDeserializer: 'createHeaderDeserializer',
  createCookieDeserializer: 'createCookieDeserializer',
  createSetCookieDeserializer: 'createSetCookieDeserializer',
  deserializers: 'deserializers',
  dsl: 'dsl',
  HeaderDsl: 'HeaderDsl',
  CookieDsl: 'CookieDsl',
  PathDsl: 'PathDsl',
  QueryDsl: 'QueryDsl',
}

const openApiParameterSerializationContent = {
  serializers: {
    createHeaderSerializer: 'createHeaderSerializer',
    createPathSerializer: 'createPathSerializer',
    createQuerySerializer: 'createQuerySerializer',
    createCookieSerializer: 'createCookieSerializer',
    createSetCookieSerializer: 'createSetCookieSerializer',
  },
  deserializers: {
    createQueryDeserializer: 'createQueryDeserializer',
    createPathDeserializer: 'createPathDeserializer',
    createHeaderDeserializer: 'createHeaderDeserializer',
    createCookieDeserializer: 'createCookieDeserializer',
    createSetCookieDeserializer: 'createSetCookieDeserializer',
  },
  dsl: {
    value: {
      optional: 'optional',
      string: 'string',
      number: 'number',
      boolean: 'boolean',
      literal: 'literal',
      enum: 'enum',
    },
    path: {
      simple: { primitive: 'primitive', array: 'array', object: 'object' },
      label: { primitive: 'primitive', array: 'array', object: 'object' },
      matrix: { primitive: 'primitive', array: 'array', object: 'object' },
    },
    query: {
      form: { primitive: 'primitive', array: 'array', object: 'object' },
      spaceDelimited: { array: 'array' },
      pipeDelimited: { array: 'array' },
      deepObject: { object: 'object' },
    },
    header: {
      simple: { primitive: 'primitive', array: 'array', object: 'object' },
    },
    cookie: {
      form: { primitive: 'primitive' },
    },
  },
}

const expressExports = {
  Router: 'Router',
  IRouter: 'IRouter',
  Request: 'Request',
  Response: 'Response',
  NextFunction: 'NextFunction',
  RequestHandler: 'RequestHandler',
  Handler: 'Handler',
}

export type ValidatorsExports = typeof validatorsExports
export type ValidatorsContent = typeof validatorsContent
export type ValidatorsPackage = RuntimePackage<ValidatorsExports, ValidatorsContent>

export type TryExports = typeof tryExports
export type TryPackage = RuntimePackage<TryExports, {}>

export type OpenApiHttpExports = typeof openApiHttpExports
export type OpenApiHttpPackage = RuntimePackage<OpenApiHttpExports, {}>

export type OpenApiParameterSerializationExports = typeof openApiParameterSerializationExports
export type OpenApiParameterSerializationContent = typeof openApiParameterSerializationContent
export type OpenApiParameterSerializationPackage = RuntimePackage<
  OpenApiParameterSerializationExports,
  OpenApiParameterSerializationContent
>

export type OpenApiExpressServerAdapterExports = typeof openApiExpressServerAdapterExports
export type OpenApiExpressServerAdapterPackage = RuntimePackage<OpenApiExpressServerAdapterExports, {}>

export type ExpressExports = typeof expressExports
export type ExpressPackage = RuntimePackage<ExpressExports, {}>

export type OpenAPIRuntimeExports = ValidatorsExports &
  TryExports &
  OpenApiHttpExports &
  OpenApiParameterSerializationExports
export type OpenAPIRuntimeContent = ValidatorsContent & OpenApiParameterSerializationContent
export type OpenAPIRuntimePackage = RuntimePackage<OpenAPIRuntimeExports, OpenAPIRuntimeContent>

const validators = {
  name: '@oats-ts/validators',
  exports: validatorsExports,
  content: validatorsContent,
}

const _try = {
  name: '@oats-ts/try',
  exports: tryExports,
  content: {},
}

const openApiHttp = {
  name: '@oats-ts/openapi-http',
  exports: openApiHttpExports,
  content: {},
}

const openApiExpressServerAdapter = {
  name: '@oats-ts/openapi-express-server-adapter',
  exports: openApiExpressServerAdapterExports,
  content: {},
}

const openApiParameterSerialization = {
  name: '@oats-ts/openapi-parameter-serialization',
  exports: openApiParameterSerializationExports,
  content: openApiParameterSerializationContent,
}

const express = {
  name: 'express',
  exports: expressExports,
  content: {},
}

const openApiRuntime = {
  name: '@oats-ts/openapi-runtime',
  exports: {
    ...validatorsExports,
    ...tryExports,
    ...openApiHttpExports,
    ...openApiParameterSerializationExports,
  },
  content: {
    ...validatorsContent,
    ...openApiParameterSerializationContent,
  },
}

const openApiFetchClientAdapter = {
  name: '@oats-ts/openapi-fetch-client-adapter',
  content: {},
  exports: {},
}

const createPackage =
  <T extends RuntimePackage<any, any>>(pkg: RuntimePackageInternal<any, any>) =>
  (context: GeneratorContext): T => {
    const { name, content, exports } = pkg
    return {
      name,
      content,
      imports: entries(exports).reduce((newExports: Record<string, string | [string, string]>, [key, originalName]) => {
        const exportedName = context.exportOf(name, originalName as string)
        const value =
          exportedName === originalName ? originalName : ([originalName, exportedName] as string | [string, string])
        return {
          ...newExports,
          [key]: value,
        }
      }, {}),
      exports: entries(exports).reduce((newExports: Record<string, string>, [key, originalName]) => {
        const exportedName = context.exportOf(name, originalName as string)
        return {
          ...newExports,
          [key]: exportedName === originalName ? originalName : exportedName,
        }
      }, {}),
    } as T
  }

export const packages = {
  validators: createPackage<ValidatorsPackage>(validators),
  try: createPackage<TryPackage>(_try),
  openApiHttp: createPackage<OpenApiHttpPackage>(openApiHttp),
  openApiExpressServerAdapter: createPackage<OpenApiExpressServerAdapterPackage>(openApiExpressServerAdapter),
  openApiParameterSerialization: createPackage<OpenApiParameterSerializationPackage>(openApiParameterSerialization),
  express: createPackage<ExpressPackage>(express),
  openApiRuntime: createPackage<OpenAPIRuntimePackage>(openApiRuntime),
  openApiFetchClientAdapter: createPackage(openApiFetchClientAdapter),
}
