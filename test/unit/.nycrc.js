/** Unit test coverage configuration.
 * @module
 */
import { fileURLToPath } from 'url'

/** Simple logger. */
/* istanbul ignore next: Unnecessary. */
if (!global.log) global.log = console

/** nyc coverage configuration.
 * @import {import('nyc').NycOptions}
 */
const config = {
  'report-dir': '.ci/report/test/unit/coverage',
  'temp-directory': '.ci/report/test/unit/coverage/.nyc_output',
  all: true,
  'check-coverage': true,
  exclude: ['.ci/', 'dist/', 'log/', 'node_modules/', 'test/', '**.*rc.js'],
  reporter: ['text', 'html'],
  instrument: true,
  branches: 0,
  lines: 0,
  functions: 0,
  statements: 0,
  watermarks: {
    branches: [75, 95],
    lines: [75, 95],
    functions: [75, 95],
    statements: [75, 95],
  },
  cache: true,
  'cache-dir': '.ci/report/test/unit/coverage/.cache',
  clean: false,
}

// if (typeof require !== 'undefined' && require.main === module) {
//   log.debug(JSON.stringify(config, null, 2))
// } else {
//   module.exports = config
// }

// When a script.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  log.debug(JSON.stringify(config, null, 2))
}

export { config as default }
