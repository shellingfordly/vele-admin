
import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import store from '../index';
import {ILoadingInstance} from 'element-plus/lib/el-loading/src/loading.type'

const NAME = 'layout';

@Module({ dynamic: true, namespaced: true, store, name: NAME })
export class Home extends VuexModule {
  // 折叠菜单
  private isCollapse = false;
  private windowsHeight = 0
  private footerHeirght = 48
  private headerHeirght = 48
  private loadingInstance: ILoadingInstance | null = null

  get getIsCollapse() {
    return this.isCollapse
  }

  get getWindowsHeight() {
    return this.windowsHeight
  }

  get getLoadingInstance() {
    return this.loadingInstance
  }

  // 内容高度
  get getContentHeight() {
    return this.windowsHeight - this.footerHeirght - this.headerHeirght
  }

  @Mutation
  commitIsCollapse(bool: boolean) {
    this.isCollapse = bool
  }

  @Mutation
  commitWindowsHeight(height: number) {
    if (height < 400) {
      height = 400
    }
    this.windowsHeight = height
  }

  @Mutation
  commitLoadingInstance(loading: any){
    this.loadingInstance = loading
  }

  @Action
  public setIsCollapse(bool: boolean) {
    this.commitIsCollapse(bool)
  }

  // 设置页面高度
  @Action
  public setWindowsHeight(height: number) {
    this.commitWindowsHeight(height)
  }

  @Action
  public setLoadingInstance(loading: any){
    this.commitLoadingInstance(loading)
  }

}

const appStore = getModule<Home>(Home);

export default appStore
