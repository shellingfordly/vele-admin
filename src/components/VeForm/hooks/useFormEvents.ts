import { nextTick, Ref, unref } from "vue";
import type { FormActionType, FormProps } from "../types";

export interface UseFormActionContext {
  propsRef: Ref<Partial<FormProps>>;
  formElRef: Ref<FormActionType>;
}

export function useFormEvents({ formElRef }: UseFormActionContext) {
  async function resetFields() {
    await unref(formElRef).resetFields();
    nextTick(() => clearValidate());
  }

  async function clearValidate(name?: string | string[]) {
    await unref(formElRef).clearValidate(name);
  }

  async function validate(callback: (valid: any) => void) {
    return await unref(formElRef).validate(callback);
  }

  async function validateField(
    prop: string | string[],
    callback: (err: string) => void
  ) {
    return await unref(formElRef).validateField(prop, callback);
  }

  async function scrollToField(prop: string) {
    return await unref(formElRef).scrollToField(prop);
  }

  return { resetFields, clearValidate, validate, validateField, scrollToField };
}
