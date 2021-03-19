import { userStore } from '/@/store/modules/user';
import type { Router } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';
import { configure, start, done } from 'nprogress'

const LOGIN_PATH = PageEnum.BASE_LOGIN;
configure({ showSpinner: false })

const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    start()

    if (whitePathList.includes(to.path as PageEnum)) {
      done()
      next()
      return
    }

    const token = userStore.getTokenState;

    // 检查token
    if (!token) {

      const redirectData = {
        path: LOGIN_PATH,
        replace: true,
      };

      console.log(to, from);

      next(redirectData);
      return
    }


    next()
  });

  router.afterEach(() => {
    done()
  })
}

