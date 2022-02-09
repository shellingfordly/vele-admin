import {
  VuexModule,
  getModule,
  Module,
  Mutation,
  Action,
} from "vuex-module-decorators";
import { UserInfoModel } from "/@/types/user";
import { CacheModel } from "/@/types/cache/cache";
import { PageEnum } from "/@/enums/pageEnum";
import { TOKEN_KEY, USER_INFO_KEY } from "/@/enums/cacheEnum";
import store from "/@/store";
import router from "/@/router";
import { loginApi, getUserInfo } from "/@/api";
import { ElMessageBox } from "element-plus";

const NAME = "user";

function getCache(key: CacheModel) {
  const data: string = localStorage.getItem(key) || "";
  if (data.includes("{")) {
    return JSON.parse(data);
  }
  return data;
}

function setCache(key: CacheModel, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

@Module({ dynamic: true, namespaced: true, store, name: NAME })
export default class User extends VuexModule {
  private token = "";
  private userInfo: Partial<UserInfoModel> = {};

  get getTokenState() {
    return this.token || getCache(TOKEN_KEY);
  }

  get getUserInfoState() {
    return this.userInfo.username ? this.userInfo : getCache(USER_INFO_KEY);
  }

  @Mutation
  commitToken(token: string) {
    this.token = token;
    setCache(TOKEN_KEY, token);
  }

  @Mutation
  commitUserInfo(userInfo: UserInfoModel) {
    this.userInfo = userInfo;
    setCache(USER_INFO_KEY, userInfo);
  }

  @Action
  async loginAction(params: UserInfoModel) {
    try {
      const { token } = await loginApi(params);
      this.commitToken(token);
      const userInfo = await this.getUserInfoAction();
      await router.replace(PageEnum.BASE_HOME);
      return userInfo;
    } catch (error) {
      return null;
    }
  }

  @Action
  logout(goLogin = false) {
    goLogin && router.push(PageEnum.BASE_LOGIN);
  }

  @Action
  async getUserInfoAction() {
    const userInfo: any = await getUserInfo({
      token: "token__token",
    });
    this.commitUserInfo(userInfo);
    return userInfo;
  }

  @Action
  async confirmLoginOut() {
    ElMessageBox.confirm("温馨提示", "是否确认退出系统？", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "info",
    })
      .then(() => {
        this.logout(true);
      })
      .catch(() => {});
  }
}

export const userStore = getModule<User>(User);
