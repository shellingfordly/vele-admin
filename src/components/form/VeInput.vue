<script lang="ts" setup>
const emit = defineEmits(["update:modelValue"]);

defineProps<{
  modelValue: string;
}>();

function onInput(event: any) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <input
    class="ve-input"
    type="text"
    :value="modelValue"
    @input="onInput"
    v-bind="$attrs"
  />
</template>

<style scoped lang="less"></style>
