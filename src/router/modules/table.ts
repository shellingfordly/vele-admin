import type { AppRouteRecordRaw } from "/@/router/types/types";
import { LAYOUT } from "../baseRoute";

const tableRoutes: AppRouteRecordRaw[] = [
  {
    path: "/table",
    name: "Table",
    component: LAYOUT,
    redirect: "/table/normal",
    meta: {
      title: "表格",
      icon: "SetUp",
      menuNum: 30,
    },
    children: [
      {
        path: "normal",
        name: "Normal",
        component: () => import("/@/views/table/NormalTable.vue"),
        meta: {
          title: "普通表格",
        },
      },
      {
        path: "tree",
        name: "tree",
        component: () => import("/@/views/table/TreeTable.vue"),
        meta: {
          title: "树型表格",
        },
      },
    ],
  },
];

export default tableRoutes;
