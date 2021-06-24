import { Options, format } from 'prettier'
import { TypeScriptModule } from './typings'
import { factory, createPrinter, NewLineKind, SyntaxKind, NodeFlags, Statement, SourceFile } from 'typescript'

function file(nodes: Statement[]): SourceFile {
  return factory.createSourceFile([...nodes], factory.createToken(SyntaxKind.EndOfFileToken), NodeFlags.None)
}

export const tsPrettierStringify =
  (options: Options) =>
  async (data: TypeScriptModule): Promise<string> => {
    const printer = createPrinter({
      newLine: NewLineKind.LineFeed,
      removeComments: false,
    })
    const files = [
      ...(data.imports.length > 0 ? [file(data.imports)] : []),
      ...data.statements.map((statement) => file([statement])),
    ]
    return files.map((file) => format(printer.printFile(file), options)).join('\n')
  }
