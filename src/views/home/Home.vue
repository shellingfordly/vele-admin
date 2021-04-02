<template>
  <div>
    <div>Home</div>
    <div>
      <el-button @click="onClick">获取用户信息</el-button>
      <el-button @click="actionDialog()">open dialog</el-button>
      <home-form @register="registerDialog" />
    </div>
    <div>
      <el-button @click="()=>actionDrawer()">打开 Drawer</el-button>
      <home-drawer @register="registerDrawer" />
    </div>
  </div>
</template>
<script lang="ts">
import { useDialog } from "../../components/dialog/useDialog";
import { useDrawer } from "/@/components/drawer/useDrawer";
import { defineComponent } from "vue";
import { userStore } from "/@/store/modules/user";
import HomeForm from "./components/HomeForm.vue";
import HomeDrawer from "./components/HomeDrawer.vue";

export default defineComponent({
  components: { HomeForm, HomeDrawer },
  name: "",
  setup() {
    const [registerDialog, { actionDialog }] = useDialog({ title: "sss" });
    const [registerDrawer, { actionDrawer }] = useDrawer({ title: "测试" });

    async function onClick() {
      const userInfo = await userStore.getUserInfoAction();
      console.log(userInfo);
    }

    return {
      onClick,
      registerDialog,
      actionDialog,
      registerDrawer,
      actionDrawer,
    };
  },
});
</script>
