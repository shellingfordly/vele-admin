<script lang="ts" setup>
import { elementIcons } from "./const";
</script>

<template>
  <div class="icons-container">
    <div class="icon-item" v-for="item of elementIcons" :key="item">
      <i :class="'el-icon-' + item" />
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.icons-container {
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;

  .icon-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 150px;
    height: 70px;
    text-align: center;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    cursor: pointer;

    &:hover {
      background-color: rgb(236, 245, 255);
      color: rgb(140, 197, 255);
    }

    i {
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
}
</style>
