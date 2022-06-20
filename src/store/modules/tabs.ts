import {
  VuexModule,
  getModule,
  Module,
  Mutation,
  Action,
} from "vuex-module-decorators";
import store from "../index";
import type { MenuModel } from "/@/types/router/menu";
import { menuStore } from "/@/store/modules/menu";

const NAME = "tabs";

@Module({ dynamic: true, namespaced: true, store, name: NAME })
export default class Tabs extends VuexModule {
  private activeTab = "Home";
  private historyRoutes: MenuModel[] = [];

  get getHistoryRoutes() {
    return this.historyRoutes;
  }

  get getActiveTab() {
    return this.activeTab;
  }

  @Mutation
  commitAddRoute(route: MenuModel) {
    this.historyRoutes.push(route);
  }

  @Mutation
  commitActiveTab(tab: string) {
    this.activeTab = tab;
  }

  @Mutation
  commitRemoveRoute(routes: MenuModel[]) {
    this.historyRoutes = routes;
  }

  @Action
  public initHistoryRoute() {
    const route = useRoute();
    const tab = menuStore.getAllMenus.find((m) => m.name === route.name);
    if (tab) {
      this.commitAddRoute(tab);
      this.commitActiveTab(tab.name);
    }
  }

  @Action
  public setHistoryRoute(route: MenuModel) {
    if (this.historyRoutes.includes(route)) {
      return;
    }
    this.commitAddRoute(route);
  }

  @Action
  public removeHistoryRoute(name: string) {
    const routes: MenuModel[] = [];
    let index = -1;
    this.historyRoutes.forEach((r, i) => {
      if (r.name !== name) {
        routes.push(r);
      } else {
        index = i;
      }
    });
    if (name === this.activeTab) {
      const name = routes[index]?.name || routes[index - 1]?.name;
      this.commitActiveTab(name);
    }
    this.commitRemoveRoute(routes);
  }

  @Action
  public setActiveTab(tab: string) {
    this.commitActiveTab(tab);
  }
}

export const tabsStore = getModule<Tabs>(Tabs);
