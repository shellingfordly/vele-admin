<template>
  <div>
    <div>Home {{ aaa }}</div>
    <div :class="[getClass]">
    <div :class="[`${getClass}-top`]">
      <div :class="[`${getClass}-top__title`]">
        layout-container-top__title
      </div>
      <div :class="[`${getClass}-top__content`]">
        layout-container-top__content
      </div>
    </div>
    <div :class="[`${getClass}-bot`]">
      <div :class="[`${getClass}-bot__title`]">
        layout-container-bot__title
      </div>
      <div :class="[`${getClass}-bot__content`]">
        layout-container-bot__content
      </div>
    </div>
  </div>
    <div>
      <ul>
        <li v-for="v in obj">
          {{ v }}
        </li>
      </ul>
    </div>
    <div>
      <el-button @click="onClick">获取用户信息</el-button>
      <el-button @click="actionDialog()">open dialog</el-button>
      <home-dialog @register="registerDialog" />
    </div>
    <div>
      <el-button @click="() => actionDrawer()">打开 Drawer</el-button>
      <home-drawer @register="registerDrawer" />
    </div>
    <div>
      <Switch>
        <template #1> 1 </template>
        <template #2> 2 </template>
        <template #3> 3 </template>
        <template #default> default </template>
      </Switch>
    </div>
  </div>
</template>
<script lang="ts">
import { useDialog } from "../../components/dialog/useDialog";
import { useDrawer } from "/@/components/drawer/useDrawer";
import { defineComponent, onMounted } from "vue";
import { userStore } from "/@/store/modules/user";
import HomeDialog from "./components/HomeDialog.vue";
import HomeDrawer from "./components/HomeDrawer.vue";
import Switch from "/@/components/switch/Switch.vue";

export default defineComponent({
  components: { HomeDialog, HomeDrawer, Switch },
  setup() {
    const [registerDialog, { actionDialog }] = useDialog({ title: "sss" });
    const [registerDrawer, { actionDrawer }] = useDrawer({ title: "测试" });

    async function onClick() {
      const userInfo = await userStore.getUserInfoAction();
      console.log(userInfo);
    }
    const getClass = "layout-container"

    onMounted(() => {});

    
    return {
      onClick,
      registerDialog,
      actionDialog,
      registerDrawer,
      actionDrawer,
      getClass
    };
  },
});
</script>
