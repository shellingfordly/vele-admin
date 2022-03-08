<script lang="tsx" setup>
import { computed, defineComponent, PropType } from "vue";
import { componentMap } from "../componentMap";
import { FormSchema } from "../types";
import { ElFormItem } from "element-plus";
import { isString } from "/@/utils/help/is";

const emit = defineEmits(["update:value"]);
const props = defineProps({
  schema: {
    type: Object as PropType<FormSchema>,
    default: () => ({}),
  },
  value: Object as PropType<Recordable>,
});

const { component, field, label } = props.schema;

const labelIsVNode = computed(() => !isString(label));

const getElFormItemValue = computed(() => {
  if (isString(label)) {
    return { label };
  }
  return {};
});

const getModelValue = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("update:value", value);
  },
});

function renderComponent() {
  if (props.schema.render) {
    return props.schema.render;
  }
  const Comp = componentMap.get(component) as ReturnType<
    typeof defineComponent
  >;

  return <Comp {...props.schema.componentProps} />;
}
</script>

<template>
  <ElFormItem v-bind="getElFormItemValue">
    <template v-if="labelIsVNode" #label>
      <component :is="label" />
    </template>
    <component v-model="getModelValue" :is="renderComponent()" />
  </ElFormItem>
</template>
