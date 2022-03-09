<script lang="ts" setup>
import { computed, PropType, useAttrs } from "vue";
import { isString } from "/@/utils/help/is";
import type { OptionItem } from "/@/types/common";
import { ElRadio, ElRadioButton } from "element-plus";
import { RadioType } from "/@/enums/component";

const props = defineProps({
  modelValue: {
    type: String as PropType<string | number | boolean>,
    required: true,
  },
  options: {
    type: Array as PropType<string[] | OptionItem[]>,
    default: [],
  },
  type: {
    type: String as PropType<RadioType>,
    default: "Radio",
  },
});

const getOptions = computed<OptionItem[]>(() => {
  const options = props.options;
  if (options.length) {
    if (isString(options[0])) {
      return options.map((value) => ({ label: value, value })) as OptionItem[];
    } else {
      return options as OptionItem[];
    }
  }
  return [];
});

const comp = computed(() =>
  props.type === RadioType.RadioButton ? ElRadioButton : ElRadio
);
</script>

<template>
  <el-radio-group v-model="modelValue" v-bind="$attrs">
    <template v-for="item in getOptions" :key="item.value">
      <component :label="item.value" :is="comp">{{ item.label }}</component>
    </template>
  </el-radio-group>
</template>
