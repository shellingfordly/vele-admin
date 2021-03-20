<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#d3dce6"
      text-color="#444"
      active-text-color="#000"
    >
      <MenuItem :menus="menus" />
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import appStore from "/@/store/modules/app";
import { menuStore } from "../../../store/modules/menu";
import { MenuModel } from "/@/types/router/menu";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  components: { MenuItem },
  setup() {
    const isCollapse = computed(() => appStore.getIsCollapse);
    const menus: ComputedRef<MenuModel[]> = computed(() => menuStore.getMenus);

    function handleOpen(key: any, keyPath: any) {
      console.log(key, keyPath);
    }

    function handleClose(key: any, keyPath: any) {
      console.log(key, keyPath);
    }

    return {
      menus,
      isCollapse,
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
