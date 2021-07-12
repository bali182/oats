import { Module, Result } from './typings'
import { red, green, blue, yellow } from 'chalk'
import { noop } from 'lodash'
import { Issue, Severity } from '../../validators/lib'
import { issueComparator, severityOf } from './issueUtils'

export type Logger = {
  issues: (message: string, issues: Issue[]) => void
  readSuccess(): void
  generatorSuccess(name: string, result: Result<Module[]>): void
  writerSuccess(modules: Module[]): void
}

export const noopLogger: Logger = {
  issues: noop,
  readSuccess: noop,
  generatorSuccess: noop,
  writerSuccess: noop,
}

const x = red('✕')
const c = green('✔')
const w = yellow('!')
const i = blue('i')

const severityIcon = (severity: Severity) => {
  switch (severity) {
    case 'warning':
      return w
    case 'info':
      return i
    case 'error':
      return x
    default:
      return '?'
  }
}

const moduleToString = (m: Module) =>
  `    ${m.path} (${blue(m.content.length)} elements, ${blue(m.dependencies.length)} dependencies)`

const issueToString = (issue: Issue) => `    ${severityIcon(issue.severity)} ${issue.message} at "${issue.path}"`

export const consoleLogger: Logger = {
  issues: (message: string, issues: Issue[]): void => {
    const maxSeverity = severityOf(issues)
    const icon = severityIcon(maxSeverity)
    const lines = [`${icon} ${message}:`, ...Array.from(issues).sort(issueComparator).map(issueToString), '']
    console.log(lines.join('\n'))
  },
  readSuccess(): void {
    console.log(`${c} Read step successful!\n`)
  },
  generatorSuccess(name: string, { data, issues }: Result<Module[]>): void {
    const issueLines =
      issues.length === 0
        ? []
        : [
            `${w} Generator step "${blue(name)}" produced ${blue(issues.length)} non-critical issue(s):`,
            ...issues.map(issueToString),
          ]
    const lines: string[] = [
      `${c} Generator step "${blue(name)}" succesfully generated ${blue(data.length)} module(s):`,
      ...data.map(moduleToString),
      ...issueLines,
      '',
    ]
    console.log(lines.join('\n'))
  },
  writerSuccess(modules: Module[]): void {
    const lines: string[] = [
      `${c} Write step succesfully written ${blue(modules.length)} module(s) to disk:`,
      ...modules.map(moduleToString),
      '',
    ]
    console.log(lines.join('\n'))
  },
}
