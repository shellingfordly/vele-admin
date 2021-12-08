<script lang="ts" setup>
import { ref } from "vue";
const searchKey = ref("");
defineProps<{ title: string; placeholder?: string }>();
const emit = defineEmits(["search"]);
function onSearch() {
  emit("search", searchKey.value);
}
</script>

<template>
  <div class="table-header-container">
    <div class="title">{{ title }}</div>
    <div class="search">
      <el-input
        class="input"
        v-model="searchKey"
        @keyup.enter="onSearch"
        :placeholder="placeholder"
      />
      <slot />
    </div>
  </div>
</template>

<style scoped lang="less">
.table-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .search {
    display: flex;
    .input {
      margin-right: 10px;
    }
  }
}
</style>
