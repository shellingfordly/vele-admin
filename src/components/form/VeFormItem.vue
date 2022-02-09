<script lang="ts" setup>
import { useAttrs } from "vue";

defineProps<{
  label: string;
}>();

const attrs = useAttrs();
</script>

<template>
  <div class="ve-form-item">
    <div>{{ label }}:</div>
    <slot />
  </div>
</template>

<style scoped lang="less">
.ve-form-item {
  display: flex;
  width: 100%;
}
</style>
