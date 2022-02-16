import type { AppRouteRecordRaw } from "/@/router/types/types";
import { LAYOUT } from "../baseRoute";

const homeRoutes: AppRouteRecordRaw[] = [
  {
    path: "/about",
    name: "About",
    component: LAYOUT,
    redirect: "/about/index",
    meta: {
      title: "关于我",
      icon: "user",
      menuNum: 100,
    },
    children: [
      {
        path: "index",
        name: "About",
        component: () => import("/@/views/about/About.vue"),
        meta: {
          title: "关于我",
          hideMenu: true,
        },
      },
    ],
  },
];

export default homeRoutes;
