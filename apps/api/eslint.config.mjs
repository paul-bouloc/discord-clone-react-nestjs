import eslintNestJs from '@darraghor/eslint-plugin-nestjs-typed'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import jestPlugin from 'eslint-plugin-jest'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const config = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintNestJs.configs.flatRecommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    ignores: ['dist/**', 'node_modules/**', '*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parser: tseslint.parser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      '@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true }],
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@darraghor/nestjs-typed/controllers-should-supply-api-tags': 'off',
      '@darraghor/nestjs-typed/api-method-should-specify-api-response': 'off',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.e2e-spec.ts', '**/*.int.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
    plugins: { jest: jestPlugin },
    extends: [jestPlugin.configs['flat/recommended']],
    rules: {
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error',
    },
  },
)

export default config
