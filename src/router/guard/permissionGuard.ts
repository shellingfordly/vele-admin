import { userStore } from '/@/store/modules/user';
import type { Router } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';
import { configure, start, done } from 'nprogress'

const LOGIN_PATH = PageEnum.BASE_LOGIN;
configure({ showSpinner: false })

const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  router.beforeEach((to, _, next) => {
    start()

    if (whitePathList.includes(to.path as PageEnum)) {
      done()
      next()
      return
    }

    const token = userStore.getTokenState;

    if (!token) {
      const redirectData = {
        path: LOGIN_PATH,
        replace: true,
      };
      next(redirectData);
      return
    }

    next()
  });

  router.afterEach(() => {
    done()
  })
}

