<template>
  <div>
    Home
    <el-button type="primary" @click="onClick">主要按钮</el-button>
    <router-link to="/about">about</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "",
  setup() {
    const router = useRouter();
    function onClick() {
      router.push("/aaaa");
    }

    return { onClick };
  },
});
</script>
