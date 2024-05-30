import js from '@eslint/js'
import cypress from 'eslint-plugin-cypress'

export default [
  js.configs.recommended, // Enable recommended config
  {
    files: ['**/*.js'], // Apply to all JavaScript files
    languageOptions: {
      sourceType: 'module', // Ensure ES Modules are supported
    },
    plugins: {
      cypress, // Add Cypress plugin
    },
    env: {
      'cypress/globals': true, // Add Cypress environment
    },
    rules: {
      indent: ['error', 2],
      'no-unused-vars': 'warn',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'max-len': [
        'error',
        { code: 120, ignoreComments: true, ignoreStrings: true },
      ],
    },
  },
]