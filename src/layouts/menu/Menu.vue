<template>
  <div class="menu-container">
    <div class="app-title" :style="getTitleStyle">
      {{ appTitle }}
    </div>
    <div class="menu">
      <menu-bar />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import MenuBar from "./components/MenuBar.vue";
import { useGlobSetting } from "/@/hooks/setting/globSetting";
import appStore from "/@/store/modules/app";

export default defineComponent({
  name: "Menu",
  components: { MenuBar },
  setup() {
    const getTitleStyle = computed(() => ({
      width: appStore.getIsCollapse ? "64px" : "200px",
    }));
    const { shortName } = useGlobSetting();
    const appTitle = ref(shortName);

    return { appTitle, getTitleStyle };
  },
});
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
  }

  .menu {
    height: calc(100% - @title-height);
  }
}
</style>
