<template>
  <div class="layout-content-container">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutContent",
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.layout-content-container {
  height: 100%;
}
</style>
