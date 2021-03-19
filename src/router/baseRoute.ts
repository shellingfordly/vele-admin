import type { AppRouteRecordRaw } from '/@/router/types/types';
import { PageEnum } from '/@/enums/pageEnum';


export const LAYOUT = () => import('/@/layouts/index.vue');

export const RedirectRoute: AppRouteRecordRaw = {
  path: '/redirect',
  name: 'redirect',
  component: LAYOUT,
  meta: {
    title: 'redirect',
    hideBreadcrumb: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: 'redirect',
      component: () => import('/@/views/sys/Redirect.vue'),
      meta: {
        title: 'redirect',
        hideBreadcrumb: true,
      },
    },
  ],
};

export const ErrorRoute: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: 'ErrorPage',
      component: () => import('/@/views/sys/404.vue'),
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
      },
    },
  ],
};

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/Login.vue'),
  meta: {
    title: '登录',
  },
};

export default [RootRoute, LoginRoute, ErrorRoute, RedirectRoute]
