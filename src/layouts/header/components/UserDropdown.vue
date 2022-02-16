<template>
  <div class="user-dropdown">
    <el-dropdown style="height: 100%">
      <div class="el-dropdown-link">
        <el-icon><UserFilled /></el-icon>
        <span class="user-name">{{ userInfo.username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <!-- <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item> -->
          <el-dropdown-item :icon="SwitchButton" @click="logout">
            登出
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { userStore } from "/@/store/modules/user";
import { UserFilled, SwitchButton } from "@element-plus/icons";

const userInfo = computed(() => userStore.getUserInfoState);
function logout() {
  userStore.confirmLoginOut();
}
</script>

<style lang="less" scoped>
@import "/@/style/color.less";

.user-dropdown {
  .el-dropdown-link {
    padding: 0 10px;
    height: 100%;
    cursor: pointer;
    color: @base-font-color;
    line-height: 48px;

    &:hover {
      background-color: @border-color;
    }
    .user-name {
      margin-left: 5px;
      font-size: 16px;
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
