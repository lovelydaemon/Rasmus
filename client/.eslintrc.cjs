module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', 'import', 'react'],
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
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandLast: true,
        multiline: 'ignore',
        reservedFirst: true,
      },
    ],
    'react/button-has-type': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-no-useless-fragment': 'error',
    'react/no-object-type-as-default-prop': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
};
