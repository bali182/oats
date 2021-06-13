import {
  AwaitExpression,
  awaitExpression,
  callExpression,
  identifier,
  memberExpression,
  objectExpression,
  objectProperty,
  ObjectProperty,
  stringLiteral,
} from '@babel/types'
import { nameAst } from '../../babelUtils'
import { OpenAPIGeneratorContext } from '../../typings'
import { EnhancedOperation } from '../typings'
import { getParameterSerializerCallAst } from './getParameterSerializerCallAst'
import { getUrlAst } from './getUrlAst'

export function getOperationRequestAst(data: EnhancedOperation, context: OpenAPIGeneratorContext): AwaitExpression {
  const { accessor } = context
  const { method, header } = data

  const properties: ObjectProperty[] = [
    objectProperty(nameAst('url'), getUrlAst(data, context)),
    objectProperty(nameAst('method'), stringLiteral(method)),
  ]

  if (header.length > 0) {
    properties.push(
      objectProperty(
        nameAst('headers'),
        getParameterSerializerCallAst(accessor.name(data, 'operation-headers-serializer'), 'headers'),
      ),
    )
  }

  return awaitExpression(
    callExpression(memberExpression(identifier('config'), identifier('request')), [objectExpression(properties)]),
  )
}
