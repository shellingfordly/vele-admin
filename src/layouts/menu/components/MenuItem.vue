<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyMenuItem",
});
</script>

<script lang="ts" setup>
import { computed, PropType, h } from "vue";
import SvgIcon from "/@/components/svgIcon/SvgIcon.vue";
import { MenuModel } from "/@/types/router/menu";
import { useGoPath } from "/@/utils/router/useRouter";

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
}
</script>

<template>
  <el-sub-menu v-if="isSubmenu" :index="menu.name">
    <template #title>
      <!-- <i v-if="menu.icon.includes('el')" :class="['el-icon', menu.icon]"></i>
      <SvgIcon v-else :name="menu.icon" /> -->
      <span>{{ menu.title }}</span>
    </template>
    <MyMenuItem :menu="item" v-for="item in menu.children" :key="item.path" />
  </el-sub-menu>
  <el-menu-item v-else :index="menu.name" @click="onClick(menu)">
    <!-- <i v-if="menu.icon.includes('el')" :class="['el-icon', menu.icon]"></i>
    <SvgIcon v-else :name="menu.icon" /> -->
    <template #title>{{ menu.title }}</template>
  </el-menu-item>
</template>
