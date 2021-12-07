import { Router } from "vue-router";
import { userStore } from "/@/store/modules/user";
import { PageEnum } from "/@/enums/pageEnum";

export function createRolesGuard(router: Router) {
  const BASE_HOME = PageEnum.BASE_HOME;

  const whitePathList: PageEnum[] = [BASE_HOME];

  router.beforeEach(async (route) => {
    if (route.name && whitePathList.includes(route.path as PageEnum)) {
      try {
        const info = await userStore.getUserInfoAction();
        const tokenList = userStore.getTokenState?.split(".") || [];
        if (!tokenList.length) return true;
        const tokenInfo =
          tokenList.length > 1
            ? JSON.parse(decodeURIComponent(atob(tokenList[1])))
            : "";
        const time = tokenInfo.iat * 1000;
        const newTime = new Date(info.updated_at).getTime();
        if (time < newTime || info.roles !== tokenInfo.role_id) {
          userStore.logout(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    return true;
  });
}
