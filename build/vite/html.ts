import { ViteEnv } from "../types/env";

export function configHtmlPlugin(env: ViteEnv) {
  const { VITE_APP_TITLE = "Vue3-Admin" } = env;

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
