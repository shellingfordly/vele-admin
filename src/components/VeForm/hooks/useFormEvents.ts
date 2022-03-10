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

  return { resetFields, clearValidate, validate };
}
