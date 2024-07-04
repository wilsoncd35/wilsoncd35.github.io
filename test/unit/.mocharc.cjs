/** Unit test configuration.
 * @module
 */

/** Simple logger. */
/* istanbul ignore next: Unnecessary. */
if (!global.log) global.log = console

/** mocha results report configuration. */
const report = {
  title: process.env.config_test_results_report_title || 'Unit Test Results',
  path:
    process.env.config_test_results_report_path ||
    '.ci/report/test/unit/results',
}

/** mocha configuration.
 * @see {@link https://mochajs.org/api/module-lib_cli-options.html}
 * @type {import('mocha').MochaOptions}
 */
const config = {
  exit: true,
  recursive: true,
  parallel: true,
  require: 'test/index.js',
  reporter: 'mochawesome',
  reporterOptions: `reportDir=${report.path}, reportFilename=index.html, html=true, json=true, reportTitle=${report.title}, reportPageTitle=${report.title}, showSkipped=true`,
}

if (typeof require !== 'undefined' && require.main === module) {
  log.debug(JSON.stringify(config, null, 2))
} else {
  module.exports = config
}
