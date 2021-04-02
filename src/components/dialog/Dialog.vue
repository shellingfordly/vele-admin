<template>
  <el-dialog
    :before-close="()=>{ actionDialog(false) }"
    v-model="visible"
    v-bind="getProps"
  >
    <template #[item]="data" v-for="item in Object.keys($slots, 'default')">
      <slot :name="item" v-bind="data"></slot>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  reactive,
  ref,
} from "vue";

export default defineComponent({
  name: "",
  setup(props, { emit }) {
    const visible = ref(false);
    const propsRef = reactive({
      visible: false,
      title: undefined,
    });
    const getProps = computed(() => {
      return Object.assign(propsRef, props);
    });

    const dialogInstance = {
      actionDialog,
      setProps,
    };

    const instance = getCurrentInstance();

    if (instance) {
      emit("register", dialogInstance);
    }

    function actionDialog(isShow: boolean) {
      visible.value = isShow;
    }

    function setProps(propsValue: any) {
      Object.assign(propsRef || {}, propsValue);
    }

    return {
      visible,
      getProps,
      actionDialog,
    };
  },
});
</script>
