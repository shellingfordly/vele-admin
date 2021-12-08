import type { AppRouteRecordRaw } from "/@/router/types/types";
import { LAYOUT } from "../baseRoute";

const homeRoutes: AppRouteRecordRaw[] = [
  {
    path: "/icon",
    name: "Icon",
    component: LAYOUT,
    redirect: "/icon/index",
    meta: {
      title: "图标",
      icon: "el-icon-discount",
      menuNum: 10,
    },
    children: [
      {
        path: "index",
        name: "Icon",
        component: () => import("/@/views/icon/Icon.vue"),
        meta: {
          title: "图标",
          hideMenu: true,
        },
      },
    ],
  },
];

export default homeRoutes;
