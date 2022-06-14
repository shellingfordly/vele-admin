<script lang="ts" setup>
import { componentMap } from "../componentMap";
import { FormSchema } from "../types";
import { ElFormItem } from "element-plus";
import { isString } from "/@/utils/help/is";

const attrs = useAttrs();
const props = defineProps<{
  schema: FormSchema;
  formProps: Recordable;
  setFormModel: (k: string, v: any) => {};
}>();
const { component, field, label } = props.schema;

const labelIsVNode = computed(() => !isString(label));

const compAttr = computed(() => ({
  ...props.schema.componentProps,
}));

// 内容组件的双向绑定数据
const getModelValue = computed({
  get() {
    return props.formProps.model[field];
  },
  set(value) {
    props.setFormModel(field, value);
  },
});

const getBindValue = computed(() => {
  const value: Recordable = {
    ...attrs,
    prop: field,
  };
  if (isString(label)) {
    value.label = label;
  }
  return value;
});

function renderComponent() {
  if (props.schema.render) {
    return props.schema.render;
  }
  return componentMap.get(component);
}
</script>

<template>
  <ElFormItem v-bind="getBindValue">
    <template v-if="labelIsVNode" #label>
      <component :is="label" />
    </template>
    <component
      v-model="getModelValue"
      v-bind="compAttr"
      :is="renderComponent()"
    />
  </ElFormItem>
</template>
