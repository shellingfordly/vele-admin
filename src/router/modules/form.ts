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
        component: () => import("/@/views/form/BaseForm.vue"),
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
        path: "use-form",
        name: "UseForm",
        component: () => import("/@/views/form/UseForm.vue"),
        meta: {
          title: "UseForm",
        },
      },
    ],
  },
];

export default homeRoutes;
