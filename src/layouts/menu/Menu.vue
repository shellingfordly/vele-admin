<template>
  <div class="menu-container">
    <div class="app-title" :style="getTitleStyle" @click="$router.push('/')">
      <img src="/src/assets/svg/logo.svg" />
      <span v-if="!isCollapse">{{ appTitle }}</span>
    </div>
    <div class="menu">
      <menu-bar />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import MenuBar from "./components/MenuBar.vue";
import { useGlobSetting } from "/@/hooks/setting/globSetting";
import appStore from "/@/store/modules/app";

const isCollapse = computed(() => appStore.getIsCollapse);
const getTitleStyle = computed(() => ({
  width: isCollapse.value ? "64px" : "200px",
}));
const { title } = useGlobSetting();
const appTitle = computed(() => title);
</script>

<style lang="less" scoped>
@title-height: 56px;

.menu-container {
  height: 100%;
  background-color: @menu-background-color;
  overflow: hidden;

  .app-title {
    height: @title-height;
    color: @white;
    font-size: 18px;
    line-height: 56px;
    text-align: center;
    transition: all 0.1s linear;

    img {
      display: inline-block;
      width: 30px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }

  .menu {
    height: calc(100% - @title-height);
  }
}
</style>
