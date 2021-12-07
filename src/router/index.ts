import type { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import type { AppRouteRecordRaw } from "/@/router/types/types";
import parseMenu from "./menu";
import createGuard from "./guard/index";
import baseRoutes from "./baseRoute";

const modules = import.meta.globEager("./modules/**.ts");
const routeModules: AppRouteRecordRaw[] = Object.keys(modules).reduce<any[]>(
  (pre, k) => [...pre, ...modules[k].default],
  []
);

const allRoutes = [...routeModules, ...baseRoutes];

parseMenu(routeModules);

const router = createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: allRoutes as unknown as RouteRecordRaw[],
});

export function setRouter(app: App<Element>) {
  app.use(router);
  createGuard(router);
}

export default router;
