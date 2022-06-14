<template>
  <el-drawer
    :before-close="() => actionDrawer(false)"
    v-model="isShow"
    v-bind="getProps"
    destroy-on-close
  >
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data"></slot>
    </template>
  </el-drawer>
</template>
<script lang="ts">
import { deepClone } from "/@/utils/help/obj";

export default defineComponent({
  name: "Drawer",
  setup(props, { emit, attrs }) {
    const isShow = ref(false);
    const propsRef = reactive({});
    const getProps = computed(() => {
      const values = deepClone(Object.assign(attrs, props));
      return Object.assign(values, propsRef);
    });

    const drawerInstance = {
      actionDrawer,
      setProps,
    };

    const instance = getCurrentInstance();

    if (instance) {
      emit("register", drawerInstance, instance.uid);
    }

    function actionDrawer(bool: boolean) {
      isShow.value = bool;
    }

    function setProps(propsValue: any) {
      Object.assign(propsRef || {}, propsValue);
    }

    return { isShow, getProps, actionDrawer };
  },
});
</script>
