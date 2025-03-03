import { fileURLToPath, URL } from 'node:url'
import eslint from 'vite-plugin-eslint'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import compressedFiles from './compressedFiles'
import gitLog from './gitLog'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    build: {
      sourcemap: false // 是否生成map文件
    },
    plugins: [
      vue(),
      eslint(),
      VueDevTools(),
      {
        name: 'build-complete',
        async writeBundle () {
          if (env.VITE_USER_NODE_ENV !== 'production') return
          await gitLog({ mode })
          compressedFiles({ mode })
        }
      }
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    logLevel: 'info',
    clearScreen: true,
    server: {
      host: '0.0.0.0'
    }
  })
}
