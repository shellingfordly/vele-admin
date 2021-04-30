import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import { resolve } from 'path'
import { createVitePlugins } from './build/vite/plugins'
import { wrapperEnv } from './build/vite/env'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  return {
    base: process.env.VITE_PUBLIC_PATH,
    resolve: {
      alias: [
        {
          find: /^\/@\//,
          replacement: `${resolve(__dirname, './src')}/`,
        },
      ],
    },
    server: {
      proxy: {
        '/test': {
          target: 'https://all-w1.cosmeapp.com/test',
          changeOrigin: true,
          rewrite: (path: any) => path.replace(/^\/test/, '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/style/global/config.less')}";`,
          },
          javascriptEnabled: true,
        }
      }
    },
    plugins: createVitePlugins(viteEnv),
    optimizeDeps: {
      include: ['nprogress', 'md5']

    },
  }
}