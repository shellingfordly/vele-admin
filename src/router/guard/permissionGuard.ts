import type { Router } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';
import { configure, start, done } from 'nprogress'

const LOGIN_PATH = PageEnum.BASE_LOGIN;
configure({ showSpinner: false })

export function createPermissionGuard(router: Router) {
  router.beforeEach((_to, from, next) => {
    start()

    if (from.path === LOGIN_PATH) {
      done()
    }
    next()
  });

  router.afterEach(() => {
    done()
  })
}

