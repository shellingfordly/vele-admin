<template>
  <div class="Trigger">
    <el-icon class="icon" @click="changCollapse">
      <component :is="isCollapse ? 'Expand' : 'Fold'"></component>
    </el-icon>
  </div>
</template>
<script setup lang="ts">
import appStore from "/@/store/modules/app";

const isCollapse = computed(() => appStore.getIsCollapse);

function changCollapse() {
  appStore.setIsCollapse(!isCollapse.value);
}
</script>

<style lang="less" scoped>
.Trigger {
  .icon {
    cursor: pointer;
  }
}
</style>
