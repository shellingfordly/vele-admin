import { resolve } from 'path'
import vue from '@vitejs/plugin-vue';

export default {
  base: process.env.VITE_PUBLIC_PATH,
  resolve: {
    alias: [
      {
        find: /^\/@\//,
        replacement: `${resolve(__dirname, './src')}/`,
      },
    ],
  },
  plugins: [vue()],
  optimizeDeps: {
    include: ['nprogress']
  },
}