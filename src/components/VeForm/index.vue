<script lang="ts" setup>
import { computed, onMounted, ref, unref, useAttrs, watch } from "vue";
import { FormActionType, FormProps } from "./types";
import type { ElForm } from "element-plus";
import VeFormItem from "./components/VeFormItem.vue";

type FormInstance = InstanceType<typeof ElForm>;

const attrs = useAttrs();
const emit = defineEmits(["register"]);
const props = defineProps();
const propsRef = ref<Partial<FormProps>>({});
const formRef = ref<FormInstance>();

const getBindValue = computed<Recordable>(() => ({
  ...attrs,
  ...props,
  ...propsRef.value,
}));

const getSchema = computed(() => {
  const { schemas } = unref(propsRef);
  return schemas;
});

function setProps(formProps: Partial<FormProps>) {
  propsRef.value = { ...propsRef.value, ...formProps };
}

function validate(callback: (valid: any) => void) {
  formRef.value && formRef.value.validate(callback);
}

function resetFields() {
  formRef.value && formRef.value.resetFields();
}

function clearValidate() {
  formRef.value && formRef.value.clearValidate();
}

const formActionType: Partial<FormActionType> = {
  setProps,
  validate,
  resetFields,
  clearValidate,
};

onMounted(() => {
  emit("register", formActionType);
});
</script>

<template>
  <el-form ref="formRef" v-bind="getBindValue">
    <slot name="formHeader"></slot>
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data"></slot>
    </template>
    <template v-for="schema in getSchema" :key="schema.field">
      <VeFormItem
        v-model:value="(propsRef.model as Recordable)[schema.field]"
        :schema="schema"
      >
        <template #[item]="data" v-for="item in Object.keys($slots)">
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
      </VeFormItem>
    </template>
    <slot name="formFooter"></slot>
  </el-form>
</template>

<style scoped lang="less">
.ve-form {
  width: 100%;
}
</style>
