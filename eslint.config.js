import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
			'react/jsx-no-target-blank': 'off',
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"semi": [
				"error",
				"never",
				{
					"beforeStatementContinuationChars": "never"
				}
			],
			"semi-spacing": [
				"error",
				{
					"after": true,
					"before": false
				}
			],
			"semi-style": [
				"error",
				"first"
			],
			"no-extra-semi": "error",
			"no-unexpected-multiline": "error",
			"no-unreachable": "error"
    },
  },
]
