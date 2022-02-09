<template>
  <div class="Trigger">
    <el-icon class="icon" @click="changCollapse">
      <Expand v-if="isCollapse" />
      <Fold v-else />
    </el-icon>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import appStore from "/@/store/modules/app";
import { Expand, Fold } from "@element-plus/icons-vue";

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
