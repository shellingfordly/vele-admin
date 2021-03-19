import type { AppRouteRecordRaw } from '/@/router/types/types';
import { LAYOUT } from '../baseRoute'

const aboutRoutes: AppRouteRecordRaw[] = [
  {
    path: '/about',
    name: 'About',
    component: LAYOUT,
    redirect: '/about/desc',
    meta: {
      title: '关于'
    },
    children: [
      {
        path: 'desc',
        name: 'Desc',
        component: () => import('/@/views/About.vue'),
        meta: {
          title: '关于'
        },
      },
    ]
  },
]

export default aboutRoutes