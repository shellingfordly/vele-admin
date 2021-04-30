<template>
  <el-container>
    <el-aside width="inherit">
      <layout-menu />
    </el-aside>
    <el-container>
      <el-header v-if="isShow.header">
        <layout-header />
      </el-header>
      <el-main>
        <layout-content />
      </el-main>
      <el-footer v-if="isShow.footer">
        <layout-footer />
      </el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import LayoutContent from "./content/Content.vue";
import LayoutFooter from "./footer/Footer.vue";
import LayoutHeader from "./header/Header.vue";
import LayoutMenu from "./menu/Menu.vue";
import AppModule from "../store/modules/app";

export default defineComponent({
  name: "Layout",
  components: {
    LayoutContent,
    LayoutFooter,
    LayoutHeader,
    LayoutMenu,
  },
  setup() {
    const isShow = reactive({
      header: true,
      footer: false
    })

    onMounted(() => {
      const saveWindowSize = () => {
        const height =
          window.innerHeight ||
          document.documentElement.clientWidth ||
          document.body.clientHeight;
        AppModule.setWindowsHeight(height);
      };
      saveWindowSize();
      window.addEventListener("resize", saveWindowSize);
    });

    return {isShow};
  },
});
</script>

<style lang="less" scoped>
.el-container {
  height: inherit;

  .el-header {
    height: initial !important;
    line-height: 48px;
    border-bottom: 1px solid #eee;
  }
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
