import { pathToRegexp } from 'path-to-regexp'
import { parsePathToSegments } from '../../parsePathToSegments'
import { dsl } from '../dsl'
import { enm, lit, obj } from './common'
import { EnumType, LiteralType, ObjType } from './model'
import { PathTestCase } from './types'

export const requiredSimpleStringPath: PathTestCase<{ str: string }> = {
  name: 'required simple path string',
  dsl: {
    matcher: pathToRegexp('/foo/:str'),
    pathSegments: parsePathToSegments('/foo/{str}'),
    schema: {
      str: dsl.path.simple.primitive(dsl.value.string(), { required: true }),
    },
  },
  data: [
    { model: { str: 'string' }, serialized: '/foo/string' },
    { model: { str: 'hello test' }, serialized: '/foo/hello%20test' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { str: '' }],
}

export const requiredSimpleNumberPath: PathTestCase<{ num: number }> = {
  name: 'required simple path number',
  dsl: {
    matcher: pathToRegexp('/foo/:num'),
    pathSegments: parsePathToSegments('/foo/{num}'),
    schema: {
      num: dsl.path.simple.primitive(dsl.value.number(), { required: true }),
    },
  },
  data: [
    { model: { num: 1 }, serialized: '/foo/1' },
    { model: { num: 2.234 }, serialized: '/foo/2%2E234' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined],
}

export const requiredSimpleBooleanPath: PathTestCase<{ bool: boolean }> = {
  name: 'required simple path boolean',
  dsl: {
    matcher: pathToRegexp('/foo/:bool'),
    pathSegments: parsePathToSegments('/foo/{bool}'),
    schema: {
      bool: dsl.path.simple.primitive(dsl.value.boolean(), { required: true }),
    },
  },
  data: [
    { model: { bool: false }, serialized: '/foo/false' },
    { model: { bool: true }, serialized: '/foo/true' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined],
}

export const requiredSimpleLiteralPath: PathTestCase<{ lit: LiteralType }> = {
  name: 'required simple path literal',
  dsl: {
    matcher: pathToRegexp('/foo/:lit'),
    pathSegments: parsePathToSegments('/foo/{lit}'),
    schema: {
      lit: dsl.path.simple.primitive(lit, { required: true }),
    },
  },
  data: [{ model: { lit: 'cat' }, serialized: '/foo/cat' }],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined],
}

export const requiredSimpleEnumPath: PathTestCase<{ enm: EnumType }> = {
  name: 'required simple path enum',
  dsl: {
    matcher: pathToRegexp('/foo/:enm'),
    pathSegments: parsePathToSegments('/foo/{enm}'),
    schema: {
      enm: dsl.path.simple.primitive(enm, { required: true }),
    },
  },
  data: [
    { model: { enm: 'cat' }, serialized: '/foo/cat' },
    { model: { enm: 'dog' }, serialized: '/foo/dog' },
    { model: { enm: 'racoon' }, serialized: '/foo/racoon' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined],
}

export const requiredSimpleStringArrayPath: PathTestCase<{ arr: string[] }> = {
  name: 'required simple path string[]',
  dsl: {
    matcher: pathToRegexp('/foo/:arr'),
    pathSegments: parsePathToSegments('/foo/{arr}'),
    schema: {
      arr: dsl.path.simple.array(dsl.value.string(), { required: true }),
    },
  },
  data: [
    { model: { arr: ['a', 'b', 'c'] }, serialized: '/foo/a,b,c' },
    { model: { arr: ['a b c'] }, serialized: '/foo/a%20b%20c' },
    { model: { arr: ['this is a long param'] }, serialized: '/foo/this%20is%20a%20long%20param' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { arr: undefined! }, { arr: [] }, { arr: [''] }],
}

export const requiredSimpleObjectPath: PathTestCase<{ obj: ObjType }> = {
  name: 'required simple path object',
  dsl: {
    matcher: pathToRegexp('/foo/:obj'),
    pathSegments: parsePathToSegments('/foo/{obj}'),
    schema: {
      obj: dsl.path.simple.object(obj, { required: true }),
    },
  },
  data: [
    {
      model: { obj: { s: 'str', b: false, n: 123, e: 'racoon', l: 'cat' } },
      serialized: '/foo/s,str,b,false,n,123,e,racoon,l,cat',
    },
    {
      model: { obj: { s: 'some long str', b: false, n: 123, e: 'dog', l: 'cat' } },
      serialized: '/foo/s,some%20long%20str,b,false,n,123,e,dog,l,cat',
    },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { obj: {} as any }],
}

export const requiredExplodeSimpleObjectPath: PathTestCase<{ obj: ObjType }> = {
  name: 'required exploded simple path object',
  dsl: {
    matcher: pathToRegexp('/foo/:obj'),
    pathSegments: parsePathToSegments('/foo/{obj}'),
    schema: {
      obj: dsl.path.simple.object(obj, { required: true, explode: true }),
    },
  },
  data: [
    {
      model: { obj: { s: 'str', b: false, n: 123, e: 'racoon', l: 'cat' } },
      serialized: '/foo/s=str,b=false,n=123,e=racoon,l=cat',
    },
    {
      model: { obj: { s: 'some long str', b: false, n: 123, e: 'dog', l: 'cat' } },
      serialized: '/foo/s=some%20long%20str,b=false,n=123,e=dog,l=cat',
    },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined],
}

export const requiredLabelStringPath: PathTestCase<{ str: string }> = {
  name: 'required label path string',
  dsl: {
    matcher: pathToRegexp('/foo/:str'),
    pathSegments: parsePathToSegments('/foo/{str}'),
    schema: {
      str: dsl.path.label.primitive(dsl.value.string(), { required: true }),
    },
  },
  data: [
    { model: { str: 'string' }, serialized: '/foo/.string' },
    { model: { str: 'hello test' }, serialized: '/foo/.hello%20test' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { str: '' }],
}

export const requiredLabelStringArrayPath: PathTestCase<{ arr: string[] }> = {
  name: 'required label path string[]',
  dsl: {
    matcher: pathToRegexp('/foo/:arr'),
    pathSegments: parsePathToSegments('/foo/{arr}'),
    schema: {
      arr: dsl.path.label.array(dsl.value.string(), { required: true }),
    },
  },
  data: [
    { model: { arr: ['str', 'foo', 'bar'] }, serialized: '/foo/.str,foo,bar' },
    { model: { arr: ['hello label', 'hello label 2'] }, serialized: '/foo/.hello%20label,hello%20label%202' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { arr: [] }, { arr: [''] }],
}

export const requiredExplodeLabelStringArrayPath: PathTestCase<{ arr: string[] }> = {
  name: 'required exploded label path string[]',
  dsl: {
    matcher: pathToRegexp('/foo/:arr'),
    pathSegments: parsePathToSegments('/foo/{arr}'),
    schema: {
      arr: dsl.path.label.array(dsl.value.string(), { required: true, explode: true }),
    },
  },
  data: [
    { model: { arr: ['str', 'foo', 'bar'] }, serialized: '/foo/.str.foo.bar' },
    { model: { arr: ['hello label', 'hello label 2'] }, serialized: '/foo/.hello%20label.hello%20label%202' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { arr: [] }, { arr: [''] }],
}

export const requiredLabelObjectPath: PathTestCase<{ obj: ObjType }> = {
  name: 'required label path object',
  dsl: {
    matcher: pathToRegexp('/foo/:obj'),
    pathSegments: parsePathToSegments('/foo/{obj}'),
    schema: {
      obj: dsl.path.label.object(obj, { required: true }),
    },
  },
  data: [
    {
      model: { obj: { s: 'str', b: false, n: 123, e: 'racoon', l: 'cat' } },
      serialized: '/foo/.s,str,b,false,n,123,e,racoon,l,cat',
    },
    {
      model: { obj: { s: 'some long str', b: false, n: 123, e: 'dog', l: 'cat' } },
      serialized: '/foo/.s,some%20long%20str,b,false,n,123,e,dog,l,cat',
    },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { obj: {} as any }],
}

export const requiredExplodeLabelObjectPath: PathTestCase<{ obj: ObjType }> = {
  name: 'required exploded label path object',
  dsl: {
    matcher: pathToRegexp('/foo/:obj'),
    pathSegments: parsePathToSegments('/foo/{obj}'),
    schema: {
      obj: dsl.path.label.object(obj, { required: true, explode: true }),
    },
  },
  data: [
    {
      model: { obj: { s: 'str', b: false, n: 123, e: 'racoon', l: 'cat' } },
      serialized: '/foo/.s=str.b=false.n=123.e=racoon.l=cat',
    },
    {
      model: { obj: { s: 'some long str', b: false, n: 123, e: 'dog', l: 'cat' } },
      serialized: '/foo/.s=some%20long%20str.b=false.n=123.e=dog.l=cat',
    },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { obj: {} as any }],
}

export const requiredMatrixStringPath: PathTestCase<{ str: string }> = {
  name: 'required matrix path string',
  dsl: {
    matcher: pathToRegexp('/foo/:str'),
    pathSegments: parsePathToSegments('/foo/{str}'),
    schema: {
      str: dsl.path.matrix.primitive(dsl.value.string(), { required: true }),
    },
  },
  data: [
    { model: { str: 'string' }, serialized: '/foo/;str=string' },
    { model: { str: 'hello test' }, serialized: '/foo/;str=hello%20test' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { str: '' }],
}

export const requiredMatrixStringArrayPath: PathTestCase<{ arr: string[] }> = {
  name: 'required matrix path string[]',
  dsl: {
    matcher: pathToRegexp('/foo/:arr'),
    pathSegments: parsePathToSegments('/foo/{arr}'),
    schema: {
      arr: dsl.path.matrix.array(dsl.value.string(), { required: true }),
    },
  },
  data: [
    { model: { arr: ['str', 'foo', 'bar'] }, serialized: '/foo/;arr=str,foo,bar' },
    { model: { arr: ['hello label', 'hello label 2'] }, serialized: '/foo/;arr=hello%20label,hello%20label%202' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { arr: [] }, { arr: [''] }],
}

export const requiredExplodeMatrixStringArrayPath: PathTestCase<{ arr: string[] }> = {
  name: 'required exploded matrix path string[]',
  dsl: {
    matcher: pathToRegexp('/foo/:arr'),
    pathSegments: parsePathToSegments('/foo/{arr}'),
    schema: {
      arr: dsl.path.matrix.array(dsl.value.string(), { required: true, explode: true }),
    },
  },
  data: [
    { model: { arr: ['str', 'foo', 'bar'] }, serialized: '/foo/;arr=str;arr=foo;arr=bar' },
    { model: { arr: ['hello label', 'hello label 2'] }, serialized: '/foo/;arr=hello%20label;arr=hello%20label%202' },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { arr: [] }, { arr: [''] }],
}

export const requiredMatrixObjectPath: PathTestCase<{ obj: ObjType }> = {
  name: 'required matrix path object',
  dsl: {
    matcher: pathToRegexp('/foo/:obj'),
    pathSegments: parsePathToSegments('/foo/{obj}'),
    schema: {
      obj: dsl.path.matrix.object(obj, { required: true }),
    },
  },
  data: [
    {
      model: { obj: { s: 'str', b: false, n: 123, e: 'racoon', l: 'cat' } },
      serialized: '/foo/;obj=s,str,b,false,n,123,e,racoon,l,cat',
    },
    {
      model: { obj: { s: 'some long str', b: false, n: 123, e: 'dog', l: 'cat' } },
      serialized: '/foo/;obj=s,some%20long%20str,b,false,n,123,e,dog,l,cat',
    },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { obj: {} as any }],
}

export const requiredExplodedMatrixObjectPath: PathTestCase<{ obj: ObjType }> = {
  name: 'required exploded matrix path object',
  dsl: {
    matcher: pathToRegexp('/foo/:obj'),
    pathSegments: parsePathToSegments('/foo/{obj}'),
    schema: {
      obj: dsl.path.matrix.object(obj, { required: true, explode: true }),
    },
  },
  data: [
    {
      model: { obj: { s: 'str', b: false, n: 123, e: 'racoon', l: 'cat' } },
      serialized: '/foo/;s=str;b=false;n=123;e=racoon;l=cat',
    },
    {
      model: { obj: { s: 'some long str', b: false, n: 123, e: 'dog', l: 'cat' } },
      serialized: '/foo/;s=some%20long%20str;b=false;n=123;e=dog;l=cat',
    },
  ],
  deserializerErrors: [null, undefined],
  serializerErrors: [null, undefined, { obj: {} as any }],
}
