<template>
  <div class="layout-header-container">
    <el-row>
      <el-col :span="12" class="header-left-container">
        <Trigger class="mr-5" />
        <Breadcrumb />
      </el-col>
      <el-col :span="12" class="header-right-container">
        <UserDropdown />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Trigger from "./components/Trigger.vue";
import UserDropdown from "./components/UserDropdown.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
</script>

<style lang="less" scoped>
.layout-header-container {
  .header-left-container {
    display: flex;
    align-items: center;
  }
  .header-right-container {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
