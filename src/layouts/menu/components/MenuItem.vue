<template>
  <li v-for="(menu, i) in menus" :key="menu.path">
    <el-submenu v-if="menu.children.length >= 1" :index="menu.path">
      <template #title>
        <i v-if="menu.icon" :class="menu.icon"></i>
        <span>{{ menu.name }}</span>
      </template>
      <MenuItem v-if="menu.children" :menus="menu.children" />
    </el-submenu>
    <el-menu-item v-else :index="menu.path" @click="onClick(menu)">
      <i v-if="menu.icon" :class="menu.icon"></i>
      <template #title>{{ menu.name }}</template>
    </el-menu-item>
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuModel } from "/@/types/router/menu";
import { useGoPath } from "/@/utils/router/useRouter";

export default defineComponent({
  name: "MenuItem",
  props: {
    menus: {
      type: Array as PropType<MenuModel[]>,
      default: [],
    },
  },
  setup() {
    const goPath = useGoPath();
    function onClick(menu: MenuModel) {
      goPath(menu.path);
    }

    return { onClick };
  },
});
</script>
