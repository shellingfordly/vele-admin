import { userStore } from '/@/store/modules/user';
import type { Router } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';
import { configure, start, done } from 'nprogress'
import { ErrorRoute } from '/@/router/baseRoute'
import { permissionStore } from '/@/store/modules/permission';

const LOGIN_PATH = PageEnum.BASE_LOGIN;
configure({ showSpinner: false })

const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    start()

    if (from.path === LOGIN_PATH && to.name === ErrorRoute.name) {
      next(PageEnum.BASE_HOME);
      return;
    }

    if (whitePathList.includes(to.path as PageEnum)) {
      done()
      next()
      return
    }

    const token = userStore.getTokenState;

    if (!token) {
      const redirectData: { path: string; replace: boolean; query?: Indexable<string> } = {
        path: LOGIN_PATH,
        replace: true,
      };

      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: encodeURIComponent(to.fullPath),
        };
      }
      next(redirectData);
      return
    }

    if (permissionStore.getIsDynamicAddedRouteState) {
      next();
      return;
    }

    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);
    const nextData = redirect === to.path ? { ...to, replace: true }: redirect
    permissionStore.commitDynamicAddedRouteState(true);
    next(nextData)
  });

  router.afterEach(() => {
    done()
  })
}

