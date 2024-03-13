module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/typedef': [
      'error',
      {
        parameter: true,
        propertyDeclaration: true,
      },
    ],
    '@typescript-eslint/method-signature-style': 'error',
  },
};
