const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
    'eslint-config-turbo'
  ].map(require.resolve),
  parserOptions: {
    project
  },
  globals: {
    React: true,
    JSX: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    // CHANGE: For apps we don't need explicit return types.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // CHANGE: Next uses certain default exports.
    'import/no-default-export': 'off',
    // CHANGE: Remove `includeInternal: true` otherwise eslint reports false positives for our own @ imports.
    'import/no-extraneous-dependencies': ['error', { includeTypes: true }]
  }
}
