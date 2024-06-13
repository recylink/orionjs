#!/usr/bin/env node
import program from 'commander'
import start from './start'
import build from './build'
import colors from 'colors/safe'
import checkVersion from './helpers/checkVersion'
import test from './test'
import './handleErrors'

const run = function (action) {
  return async function (...args) {
    try {
      await checkVersion()
      await action(...args)
    } catch (e) {
      console.error(colors.red('Error: ' + e.message))
    }
  }
}

program
  .command('start')
  .description('Run the Orionjs app')
  .option('--shell', 'Opens a shell in Chrome developer tools')
  .option('--skip-compilation', 'Skip inital compilation')
  .action(run(start))

program.command('test').allowUnknownOption().description('Runs Jest').action(run(test))

program
  .command('build')
  .description('Compiles an Orionjs app and exports it to a simple nodejs app')
  .option('-o, --output [output]', 'Output directory')
  .action(run(build))

program.version(require('../package.json').version, '-v --version')

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
