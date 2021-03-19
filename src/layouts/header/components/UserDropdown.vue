<template>
  <div class="user-dropdown">
    <el-dropdown>
      <div class="el-dropdown-link">
        <el-icon class="el-icon-user-solid" />
        <span class="user-name">管理员</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button">登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
@import "/@/style/color.less";

.user-dropdown {
  
  .el-dropdown-link {
    height: 100%;
    cursor: pointer;
    color: @base-font-color;

    .el-icon-user-solid {
      margin-right: 5px;
    }

    .user-name {
      margin-right: 5px;
    }
  }
}

.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
