<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    closable
    :stretch="false"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      size="small"
      :lazy="true"
    >
      <slot></slot>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { tabsStore } from "/@/store/modules/tabs";
import type { MenuModel } from "/@/types/router/menu";
import Sortable from "sortablejs";

const router = useRouter();
const editableTabsValue = computed({
  get: () => tabsStore.getActiveTab,
  set(val) {
    tabsStore.setActiveTab(val);
  },
});
const editableTabs = computed<MenuModel[]>(() => tabsStore.getHistoryRoutes);
const removeTab = (path: string | number) => {
  if (tabsStore.getHistoryRoutes.length > 1) {
    tabsStore.removeHistoryRoute(path as string);
  }
};

watch(editableTabsValue, (name) => {
  router.push({ name });
});

tabsStore.initHistoryRoute();

onMounted(() => {
  const tabsScroll = document.querySelector(
    ".el-tabs__nav-scroll .el-tabs__nav"
  );
  tabsScroll && Sortable.create(tabsScroll);
});
</script>

<style lang="less">
.demo-tabs {
  .el-tabs__header {
    margin: 0;
  }

  .el-tabs__content {
    display: none !important;
  }
}
</style>
