<template>
  <div class="layout-header-container">
    <el-row>
      <el-col :span="12">
        <breadcrumb />
      </el-col>
      <el-col :span="12" class="header-right-container">
          <user-dropdown />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import UserDropdown from "./components/UserDropdown.vue";

export default defineComponent({
  name: "LayoutHeader",
  components: {
    Breadcrumb,
    UserDropdown,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.layout-header-container {
  .header-right-container {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
