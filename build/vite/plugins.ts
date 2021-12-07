import vue from "@vitejs/plugin-vue";
import { ViteEnv } from "../types/env";
import type { Plugin } from "vite";
import { configMockPlugin } from "./mock";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const plugins: (Plugin | Plugin[])[] = [vue()];

  plugins.push(configHtmlPlugin(viteEnv));
  plugins.push(configMockPlugin(isBuild));

  return plugins;
}

export function configHtmlPlugin(env: ViteEnv) {
  const { VITE_APP_TITLE = "" } = env;

  return {
    name: "html-transform",
    transformIndexHtml(html: any) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>${VITE_APP_TITLE}</title>`
      );
    },
  };
}
