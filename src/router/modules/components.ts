import type { AppRouteRecordRaw } from "/@/router/types/types";
import { LAYOUT } from "../baseRoute";

const homeRoutes: AppRouteRecordRaw[] = [
  {
    path: "/comps",
    name: "Components",
    component: LAYOUT,
    redirect: "/comps/dialog",
    meta: {
      title: "组件",
      icon: "el-icon-user",
      menuNum: 70,
    },
    children: [
      {
        path: "dialog",
        name: "Dialog",
        component: () => import("/@/views/components/Dialog.vue"),
        meta: {
          title: "弹窗",
        },
      },
      {
        path: "drawer",
        name: "Drawer",
        component: () => import("/@/views/components/Drawer.vue"),
        meta: {
          title: "抽屉",
        },
      },
    ],
  },
];

export default homeRoutes;
