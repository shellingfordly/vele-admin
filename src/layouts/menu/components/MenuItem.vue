<template>
  <el-sub-menu v-if="isSubmenu" index="1">
    <template #title>
      <i v-if="menu.icon" :class="menu.icon"></i>
      <span>{{ menu.title }}</span>
    </template>
    <MyMenuItem :menu="item" v-for="item in menu.children" :key="item.path" />
  </el-sub-menu>
  <el-menu-item v-else :class="['is-active']" index="2" @click="onClick(menu)">
    <i v-if="menu.icon" :class="menu.icon"></i>
    <template #title>{{ menu.title }}</template>
  </el-menu-item>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { MenuModel } from "/@/types/router/menu";
import { useGoPath } from "/@/utils/router/useRouter";

export default defineComponent({
  name: "MyMenuItem",
  props: {
    menu: {
      type: Object as PropType<MenuModel>,
      default: {},
    },
  },
  setup(props) {
    const goPath = useGoPath();
    const isSubmenu = computed(() => props.menu.children.length > 0)

    console.log('menu--------', props.menu.name)

    function onClick(menu: MenuModel) {
      goPath(menu.path);
    }

    return { onClick, isSubmenu };
  },
});
</script>
