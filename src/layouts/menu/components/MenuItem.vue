<template>
  <el-submenu v-if="menu.children.length > 0" :index="menu.path">
    <template #title>
      <i v-if="menu.icon" :class="menu.icon"></i>
      <span>{{ menu.name }}</span>
    </template>
    <MenuItem :menu="item" v-for="item in menu.children" :key="item.path" />
  </el-submenu>
  <el-menu-item v-else :index="menu.path" @click="onClick(menu)">
    <i v-if="menu.icon" :class="menu.icon"></i>
    <template #title>{{ menu.name }}</template>
  </el-menu-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuModel } from "/@/types/router/menu";
import { useGoPath } from "/@/utils/router/useRouter";

export default defineComponent({
  name: "MenuItem",
  props: {
    menu: {
      type: Object as PropType<MenuModel>,
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
