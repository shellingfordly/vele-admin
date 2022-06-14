<script lang="ts" setup>
import type { Ref } from "vue";
import type { FormActionType, FormProps } from "./types";
import { useFormEvents } from "./hooks/useFormEvents";

const attrs = useAttrs();
const emit = defineEmits(["register"]);
const props = defineProps();
const propsRef = ref<Partial<FormProps>>({});
const formRef = ref<Nullable<FormActionType>>(null);

const getBindValue = computed<Recordable>(() => ({
  ...attrs,
  ...props,
  ...propsRef.value,
}));

const getSchema = computed(() => {
  const { schemas } = unref(propsRef);
  return schemas || [];
});

const { validate, resetFields, clearValidate, scrollToField, validateField } =
  useFormEvents({
    propsRef,
    formElRef: formRef as Ref<FormActionType>,
  });

function setFormModel(key: string, value: any) {
  if (propsRef.value.model) {
    propsRef.value.model[key] = value;
  }
}

function setProps(formProps: Partial<FormProps>) {
  propsRef.value = { ...propsRef.value, ...formProps };
}

const formAction: Partial<FormActionType> = {
  setProps,
  validate,
  resetFields,
  clearValidate,
  scrollToField,
  validateField,
};

// 暴露给外面的组件实例使用
defineExpose(formAction);

onMounted(() => {
  emit("register", formAction);
});
</script>

<template>
  <el-form ref="formRef" v-bind="getBindValue">
    <slot name="formHeader"></slot>
    <template v-for="schema in getSchema" :key="schema.field">
      <VeFormItem
        :schema="schema"
        :formProps="propsRef"
        :setFormModel="setFormModel"
      >
        <template #[item]="data" v-for="item in Object.keys($slots)">
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
      </VeFormItem>
    </template>
    <slot name="formFooter"></slot>
  </el-form>
</template>
