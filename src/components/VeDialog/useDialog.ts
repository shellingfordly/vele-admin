import { ref, unref } from "@vue/reactivity";
import { isInSetup } from "/@/utils/help/vue";
import { DialogPropsModel, ResultModel, MethodsModel } from "./types";

export function useDialog(props?: DialogPropsModel): ResultModel {
  // 监测是否在setup里面调用
  isInSetup();

  const instanceRef = ref();
  const uuidRef = ref();

  function register(dialogInstance: any, uuid: string) {
    instanceRef.value = dialogInstance;
    uuidRef.value = uuid;

    props && methods.setProps(props);
  }

  const getInstance = () => {
    const instance = unref(instanceRef);

    if (!instance) {
      console.error("useModal instance is undefined!");
    }
    return instance;
  };

  const methods: MethodsModel = {
    actionDialog(open = true) {
      getInstance()?.actionDialog(open);
    },
    setProps(props: any) {
      getInstance()?.setProps(props);
    },
  };

  return [register, methods];
}
