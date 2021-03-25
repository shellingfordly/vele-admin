<template>
  <div>
    Home
    <el-button @click="onClick">click</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { userStore } from "/@/store/modules/user";

export default defineComponent({
  name: "",
  setup() {
    async function onClick() {
      const userInfo = await userStore.getUserInfoAction();
      console.log(userInfo);
    }

    return { onClick };
  },
});
</script>
