import { ref, unref } from '@vue/reactivity'
import { isInSetup } from '/@/utils/help/vue'
import { DrawerPropsModel, ResultModel, MethodsModel } from "./types";

export function useDrawer(props?: DrawerPropsModel): ResultModel {
  // 监测是否在setup里面调用
  isInSetup()

  const instanceRef = ref()
  const uuidRef = ref()

  function register(dialogInstance: any, uuid: string) {
    instanceRef.value = dialogInstance
    uuidRef.value = uuid

    props && methods.setProps(props)
  }

  const getInstance = () => {
    const instance = unref(instanceRef);
    if (!instance) {
      console.error('useModal instance is undefined!');
    }
    return instance;
  };


  const methods: MethodsModel = {
    actionDrawer(open = true) {
      getInstance()?.actionDrawer(open)
    },
    setProps(props: any) {
      getInstance()?.setProps(props)
    }
  }

  return [register, methods]
}
