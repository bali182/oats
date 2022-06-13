import { nanoid } from 'nanoid'
import { Try } from '@oats-ts/try'
import { CodeGenerator, GeneratorConfig, GeneratorInit } from './typings'
import { GeneratorEventEmitter } from '@oats-ts/events'

export abstract class BaseGenerator<R, G, C extends object> implements CodeGenerator<R, G> {
  public readonly id = nanoid(6)

  protected parent?: CodeGenerator<R, G>
  protected input!: R
  protected globalConfig!: GeneratorConfig
  protected emitter!: GeneratorEventEmitter<G>
  protected dependencies: CodeGenerator<R, G>[] = []
  protected readonly config: C
  private readonly globalConfigOverride: Partial<GeneratorConfig>

  constructor(config: C & Partial<GeneratorConfig>) {
    const { nameProvider, pathProvider, ...cfg } = config
    this.globalConfigOverride = {
      ...(nameProvider ? { nameProvider } : {}),
      ...(pathProvider ? { pathProvider } : {}),
    }
    this.config = cfg as C
  }

  public initialize({ globalConfig, input, dependencies, emitter, parent }: GeneratorInit<R, G>): void {
    this.parent = parent
    this.input = input
    this.globalConfig = { ...globalConfig, ...this.globalConfigOverride }
    this.emitter = emitter
    this.dependencies = dependencies ?? []
  }

  protected tick() {
    return new Promise<void>((resolve) => setTimeout(resolve, 0))
  }

  public resolve(name: string): CodeGenerator<R, G> | undefined {
    if (name === this.name()) {
      return this
    }
    for (const dep of this.dependencies) {
      const resolved = dep.resolve(name)
      if (resolved) {
        return dep
      }
    }
    return undefined
  }

  public abstract generate(): Promise<Try<G[]>>
  public abstract referenceOf<Model = any, Code = any>(input: Model): Code
  public abstract dependenciesOf<Model = any, Dep = any>(fromPath: string, input: Model): Dep[]
  public abstract name(): string
  public abstract produces(): string[]
  public abstract consumes(): string[]
  public abstract runtimeDependencies(): string[]
}
