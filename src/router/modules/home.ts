import type { AppRouteRecordRaw } from '/@/router/types/types';
import { LAYOUT } from '../baseRoute'

const homeRoutes: AppRouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: LAYOUT,
    redirect: '/home/desc',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'desc',
        name: 'Desc',
        component: () => import('/@/views/Home.vue'),
        meta: {
          title: '首页'
        },
      },
    ]
  },
]

export default homeRoutes