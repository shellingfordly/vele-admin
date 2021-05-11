<template>
  <div class="breadcrumb">
    <el-icon :class="iconClass" @click="changCollapse" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import appStore from "/@/store/modules/app";

export default defineComponent({
  name: "Breadcrumb",
  setup() {
    const isCollapse = computed(() => appStore.getIsCollapse);
    const iconClass = computed(() =>
      isCollapse.value ? "el-icon-s-unfold" : "el-icon-s-fold"
    );

    function changCollapse() {
      appStore.setIsCollapse(!isCollapse.value);
    }

    return {
      iconClass,
      changCollapse,
    };
  },
});
</script>

<style lang="less" scoped>
.breadcrumb {
  .el-icon-s-fold,
  .el-icon-s-unfold {
    cursor: pointer;
  }
}
</style>
