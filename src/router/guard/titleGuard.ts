import type { Router } from 'vue-router';

import { useGlobSetting } from '/@/hooks/setting/globSetting';

import { setTitle } from '/@/utils/page/title';

import { REDIRECT_NAME } from '/@/router/baseRoute';

const globSetting = useGlobSetting();

export function createTitleGuard(router: Router) {
  router.afterEach(async (to) => {
    to.name !== REDIRECT_NAME && setTitle(to.meta.title as string, globSetting.title);
    return true;
  });
}
