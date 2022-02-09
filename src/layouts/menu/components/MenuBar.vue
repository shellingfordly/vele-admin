<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      v-bind="getMenuColor()"
    >
      <MenuItem :menu="menu" v-for="menu in menus" :key="menu.path" />
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import appStore from "/@/store/modules/app";
import { menuStore } from "../../../store/modules/menu";
import { MenuModel } from "/@/types/router/menu";
import MenuItem from "./MenuItem.vue";
import { getMenuColor } from "/@/theme/menu";
import { useRoute } from "vue-router";
import { useGoPath } from "/@/utils/router/useRouter";

export default defineComponent({
  components: { MenuItem },
  setup() {
    const isCollapse = computed(() => appStore.getIsCollapse);
    const menus: ComputedRef<MenuModel[]> = computed(() => menuStore.getMenus);
    const route = useRoute();
    const defaultActive = route.name as string;
    const goPath = useGoPath();

    function onClick(menu: MenuModel) {
      goPath(menu.path);
    }

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
      getMenuColor,
      defaultActive,
      onClick,
    };
  },
});
</script>

<style lang="less" scoped>
.scrollbar-wrapper {
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.el-menu {
  border: 0;
}

/deep/ .el-scrollbar__view {
  height: 100% !important;
}
</style>
