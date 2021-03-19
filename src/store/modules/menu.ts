
import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import store from '../index';
import {MenuModel} from '/@/types/router/menu'

const NAME = 'menu';

@Module({ dynamic: true, namespaced: true, store, name: NAME })
export default class Menu extends VuexModule {
  private menus: MenuModel[] = [];

  get getMenus(){
    return this.menus
  }

  @Mutation
  commitMenus(menus: MenuModel[]){
    this.menus = menus
  }

  @Action
  public setMenusAction(menus: MenuModel[]){
    this.commitMenus(menus)
  }
  
}

export const menuStore = getModule<Menu>(Menu);
