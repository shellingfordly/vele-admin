<template>
  <div v-for="(menu, i) in menus" :key="menu.path">
    <el-submenu v-if="menu.isSubmenu" :index="menu.path">
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{ menu.name }}</span>
      </template>
      <MenuItem :menus="menu.children" />
    </el-submenu>
    <el-menu-item v-else :index="menu.path" @click="onClick(menu)">
      <i :class="menu.icon"></i>
      <template #title>{{ menu.name }}</template>
    </el-menu-item>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuBarModel } from "/@/types/router/menu";
import { useGoPath } from "/@/utils/router/useRouter";

export default defineComponent({
  name: "MenuItem",
  props: {
    menus: {
      type: Array as PropType<MenuBarModel[]>,
      default: [],
    },
  },
  setup() {
    const goPath = useGoPath();
    function onClick(menu: MenuBarModel) {
      goPath(menu.path);
    }

    return { onClick };
  },
});
</script>
