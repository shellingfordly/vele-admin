import type { AppRouteRecordRaw } from '/@/router/types/types';
import { LAYOUT } from '../baseRoute'

const tableRoutes: AppRouteRecordRaw[] = [
  {
    path: '/table',
    name: 'Table',
    component: LAYOUT,
    redirect: '/table/normal',
    meta: {
      title: '表格',
      icon: 'el-icon-menu',
      menuNum: 30,
    },
    children: [
      {
        path: 'normal',
        name: 'Normal',
        redirect: '/table/normal/one',
        component: () => import('/@/views/table/normal/Normal.vue'),
        meta: {
          title: '普通表格',
        },
        children: [
          {
            path: 'one',
            name: 'One',
            component: () => import('/@/views/table/normal/components/Normal1.vue'),
            meta: {
              title: '普通表格1',
            },
          },
          {
            path: 'two',
            name: 'Two',
            component: () => import('/@/views/table/normal/components/Normal2.vue'),
            meta: {
              title: '普通表格2',
            },
          }
        ]
      },
      {
        path: 'high',
        name: 'TableHigh',
        component: () => import('/@/views/table/high/HighTable.vue'),
        meta: {
          title: '高级表格',
        },
      },
    ]
  },
]

export default tableRoutes