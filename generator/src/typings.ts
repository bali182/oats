import { Issue } from '@oats-ts/validators'

export type Failure = { issues: Issue[] }
export type Try<T> = T | Failure

export type ContentReader<R> = () => Promise<Try<R>>
export type Writer<G, W> = (data: G[]) => Promise<Try<W>>

export type Module<C = any, D = any> = {
  path: string
  content: C[]
  dependencies: D[]
}

export type CodeGenerator<R, G extends Module<C, D>, C = any, D = any> = {
  id: string
  produces: string[]
  consumes: string[]
  generate: (data: R, generators: CodeGenerator<R, G>[]) => Promise<Try<G[]>>
  reference?: (data: R, generators: CodeGenerator<R, G>[], input: any, target: string) => C
}

export type GeneratorInput<R, G extends Module, W> = {
  reader: ContentReader<R>
  generators: CodeGenerator<R, G>[]
  writer: Writer<G, W>
}
