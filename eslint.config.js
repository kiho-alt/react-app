// ここは、eslintというライブラリで、コードの書き方やフォーマットを指定する設定ファイル(=全体のバリデーション設定をまとめて書いておく、バリデーションフォルダ)
// ここを入れておくとケアレスミスが減らせるので、簡単な設定を入れておくことがおすすめ

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],// 定義したけど使っていない変数がある場合エラー出させる
      'no-undef': 'error',　// 未定義の変数をエラー出させる
      'react/prop-types': 'off',// React特有の型定義ルールオフ。これはTypescriptにとて変わられている。
    },
  },
])
