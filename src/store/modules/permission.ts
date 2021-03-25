import store from '/@/store/index';

import { VuexModule, Mutation, Module, getModule, Action } from 'vuex-module-decorators';

const NAME = 'permission';

@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Permission extends VuexModule {
  // Whether the route has been dynamically added
  private isDynamicAddedRouteState = false;

  get getIsDynamicAddedRouteState() {
    return this.isDynamicAddedRouteState;
  }

  @Mutation
  commitDynamicAddedRouteState(added: boolean): void {
    this.isDynamicAddedRouteState = added;
  }

}
export const permissionStore = getModule<Permission>(Permission);
