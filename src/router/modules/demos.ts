import type { AppRouteRecordRaw } from "/@/router/types/types";
import { LAYOUT } from "../baseRoute";

const demoRoutes: AppRouteRecordRaw[] = [
  {
    path: "/demo",
    name: "Demo",
    component: LAYOUT,
    redirect: "/demo/draggable",
    meta: {
      title: "Demos",
      icon: "Monitor",
      menuNum: 50,
    },
    children: [
      {
        path: "draggable",
        name: "Draggable",
        component: () => import("/@/views/demos/VueDraggable.vue"),
        meta: {
          title: "组件拖拽",
        },
      },
    ],
  },
];

export default demoRoutes;
