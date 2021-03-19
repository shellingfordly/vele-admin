
import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { UserInfoModel } from '/@/types/user'
import { CacheModel } from '/@/types/cache/cache'
import { PageEnum } from '/@/enums/pageEnum';
import { TOKEN_KEY, USER_INFO_KEY } from '/@/enums/cacheEnum'
import store from '/@/store';
import router from '/@/router';
import API from '/@/api'

const NAME = 'user';

function getCache(key: CacheModel) {
  return localStorage.getItem(key)
}

function setCache(key: CacheModel, token: string) {
  localStorage.setItem(key, token)
}

@Module({ dynamic: true, namespaced: true, store, name: NAME })
export default class User extends VuexModule {
  private token = '';
  private userInfo: Partial<UserInfoModel> = {};

  get getTokenState() {
    return this.token || getCache(TOKEN_KEY)
  }

  get getUserInfoState() {
    return this.userInfo || getCache(USER_INFO_KEY)
  }

  @Mutation
  commitToken(token: string) {
    this.token = token
    setCache(TOKEN_KEY, token)
  }


  @Mutation
  commitUserInfo(userInfo: UserInfoModel) {
    this.userInfo = userInfo
    setCache(USER_INFO_KEY, JSON.stringify(userInfo))
  }

  @Action
  async loginAction(params: UserInfoModel) {
    try {
      const token = await API.login(params)
      this.commitToken(token)

      const userInfo = await this.getUserInfoAction();

      await router.replace(PageEnum.BASE_HOME)
      return userInfo
    } catch (error) {
      return null
    }
  }


  @Action
  async getUserInfoAction() {
    const userInfo = await API.getUserInfo()
    this.commitUserInfo(userInfo)
    return userInfo
  }


}

export const userStore = getModule<User>(User);
