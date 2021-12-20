<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const { currentRoute } = useRouter();
console.log();

const routes = computed(() => {
  if (currentRoute.value.path.includes("index")) return [currentRoute.value];
  else return currentRoute.value.matched;
});
console.log(routes.value);
</script>

<template>
  <el-breadcrumb separator="/" route>
    <el-breadcrumb-item v-for="route in routes" :to="{ path: route.path }">
      {{ route.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="less"></style>
