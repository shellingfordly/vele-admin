import vue from "@vitejs/plugin-vue";
import { ViteEnv } from "../../types/env";
import type { Plugin } from "vite";
import { configMockPlugin } from "./mock";
import { configSvgIconsPlugin } from "./svgSprite";
import { configHtmlPlugin } from "./html";
import { configAutoImportPlugin } from "./autoImport";
import windiCSS from "vite-plugin-windicss";
import vueJsx from "@vitejs/plugin-vue-jsx";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const plugins: (Plugin | Plugin[])[] = [vue(), vueJsx()];

  plugins.push(configHtmlPlugin(viteEnv));
  plugins.push(configMockPlugin(isBuild));
  plugins.push(configSvgIconsPlugin(isBuild));
  plugins.push(windiCSS());
  plugins.push(configAutoImportPlugin());

  return plugins;
}
