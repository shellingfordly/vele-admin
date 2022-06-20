<template>
  <el-sub-menu v-if="isSubmenu" :index="menu.name">
    <template #title>
      <el-icon v-if="menu.icon">
        <component :is="menu.icon" />
      </el-icon>
      <span>{{ menu.title }}</span>
    </template>
    <MyMenuItem :menu="item" v-for="item in menu.children" :key="item.path" />
  </el-sub-menu>
  <el-menu-item v-else :index="menu.name" @click="onClick(menu)">
    <el-icon v-if="menu.icon">
      <component :is="menu.icon" />
    </el-icon>
    <template #title>{{ menu.title }}</template>
  </el-menu-item>
</template>

<script lang="ts">
export default {
  name: "MyMenuItem",
};
</script>

<script lang="ts" setup>
import { MenuModel } from "/@/types/router/menu";
import { useGoPath } from "/@/utils/router/useRouter";
import type { PropType } from "vue";
import { tabsStore } from "/@/store/modules/tabs";

const props = defineProps({
  menu: {
    type: Object as PropType<MenuModel>,
    default: {},
  },
});

const goPath = useGoPath();
const isSubmenu = computed(() => props.menu.children.length > 0);

function onClick(menu: MenuModel) {
  goPath(menu.path);
  tabsStore.setHistoryRoute(menu);
  tabsStore.setActiveTab(menu.name);
}
</script>
