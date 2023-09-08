/** @type import('prettier').Config */
module.exports = {
  printWidth: 110,
  endOfLine: 'auto',
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
  tailwindConfig: 'tailwind.config.cjs',
  tailwindFunctions: ['cn']
}
