import type { AppRouteRecordRaw } from '/@/router/types/types';
import { LAYOUT } from '../baseRoute'

const demoRoutes: AppRouteRecordRaw[] = [
  {
    path: '/demo',
    name: 'Demo',
    component: LAYOUT,
    redirect: '/demo/file-split',
    meta: {
      title: 'Demo',
      icon: 'el-icon-menu',
      menuNum: 30,
    },
    children: [
      {
        path: 'file-split',
        name: 'FileSplit',
        component: () => import('/@/views/demo/file-split/FileSplit.vue'),
        meta: {
          title: '文件拆分',
        },
      },

      {
        path: 'usedate',
        name: 'UseData',
        component: () => import('/@/views/demo/use-data/useData.vue'),
        meta: {
          title: 'useData',
        },
      },

      {
        path: 'setup',
        name: 'Setup',
        component: () => import('/@/views/demo/setup/index.vue'),
        meta: {
          title: 'Setup',
        },
      },
    ]
  },
]

export default demoRoutes