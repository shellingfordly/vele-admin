import type { AppRouteRecordRaw } from "/@/router/types/types";
import { LAYOUT } from "../baseRoute";

const homeRoutes: AppRouteRecordRaw[] = [
  {
    path: "/form",
    name: "Form",
    component: LAYOUT,
    redirect: "/form/step",
    meta: {
      title: "表单",
      icon: "Tickets",
      menuNum: 50,
    },
    children: [
      {
        path: "base",
        name: "BaseForm",
        component: () => import("/@/views/form/base/BaseForm.vue"),
        meta: {
          title: "基础表单",
        },
      },
      {
        path: "step",
        name: "StepForm",
        component: () => import("/@/views/form/step/StepForm.vue"),
        meta: {
          title: "分布表单",
        },
      },
      {
        path: "diy",
        name: "DiyForm",
        component: () => import("/@/views/form/diy/Diy.vue"),
        meta: {
          title: "自定义",
        },
      },
    ],
  },
];

export default homeRoutes;
