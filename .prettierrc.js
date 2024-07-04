import { fileURLToPath } from 'url'

/** Simple logger. */
/* istanbul ignore next: Unnecessary. */
if (!global.log) global.log = console

/** Prettier configuration.
 * @type {import('prettier').Options}
 */
const config = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  printWidth: 80,
  proseWrap: 'never',
  quoteProps: 'as-needed',
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['prettier-plugin-packagejson'],
}

// When a script.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  log.debug(JSON.stringify(config, null, 2))
}

export { config as default }
