<script lang="ts" setup>
import { useSlots, watch } from "vue";

defineProps({
  model: {
    type: Object,
  },
  labelCol: {
    type: Number,
    default: 4,
  },
});
</script>

<template>
  <div class="ve-form">
    <slot />
  </div>
</template>

<style scoped lang="less">
.ve-form {
  width: 100%;
}
</style>
