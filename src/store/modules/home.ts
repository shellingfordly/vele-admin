
import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import store from '../index';

const NAME = 'home';

@Module({ dynamic: true, namespaced: true, store, name: NAME })
export default class Home extends VuexModule {
  private count = 0;

  get getCount(){
    return this.count
  }

  @Mutation
  commitCount(num: number){
    this.count = num
  }

  @Action
  public setCount(num: number){
    this.commitCount(num)
  }
  
}

export const homeStore = getModule<Home>(Home);
