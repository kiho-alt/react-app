// ここは、Viteの設定ファイル！　新規でプラグインを追加する際のみ使用するよ

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
