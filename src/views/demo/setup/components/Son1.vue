<template>
  <div>
    <p>自组件 1</p>
    <p>{{ data.name }}</p>
    <p>{{ data.age }}</p>
  </div>
</template>
<script setup lang="ts">
export type DataModel = {
  name: string;
  age: number;
};

defineProps<{
  data: DataModel;
}>();
</script>
