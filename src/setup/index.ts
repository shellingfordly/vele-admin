import type { App } from "vue";
import setupElement from "./element-plus";

export default function setup(app: App<Element>) {
  setupElement(app);
  // app.use(ElementPlus)
}
