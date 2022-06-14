<script lang="ts" setup>
import { isString } from "/@/utils/help/is";
import type { OptionItem } from "/@/types/common";
import { ElCheckbox, ElCheckboxButton } from "element-plus";
import { CheckboxType } from "/@/enums/component";

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
  options: {
    type: Array as PropType<string[] | OptionItem[]>,
    default: [],
  },
  type: {
    type: String as PropType<CheckboxType>,
    default: "Checkbox",
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
  props.type === CheckboxType.CheckboxButton ? ElCheckboxButton : ElCheckbox
);
</script>

<template>
  <el-checkbox-group v-model="modelValue" v-bind="$attrs">
    <template v-for="item in getOptions" :key="item.value">
      <component :label="item.value" :is="comp">{{ item.label }}</component>
    </template>
  </el-checkbox-group>
</template>
