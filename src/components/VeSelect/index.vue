<script lang="ts" setup>
import { computed, PropType, useAttrs } from "vue";
import type { SelectOption } from "./types";

const attrs = useAttrs();

const props = defineProps({
  options: {
    type: Array as PropType<SelectOption[]>,
    default: [],
  },
});

const getBindValue = computed(() => ({
  ...props,
  ...attrs,
}));
</script>

<template>
  <ElSelect v-bind="getBindValue">
    <template v-if="props.options.length">
      <ElOption
        v-for="item in props.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
    <slot />
  </ElSelect>
</template>
