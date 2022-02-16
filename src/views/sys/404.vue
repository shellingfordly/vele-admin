<template>
  <div class="error-container">
    <img class="error-svg" src="/src/assets/svg/404.svg" alt="" />
    <div class="error-btn">
      <el-button type="primary" @click="$router.push('/')">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .error-svg {
    width: 300px;
  }

  .error-btn {
    margin-top: 10px;
  }
}
</style>
