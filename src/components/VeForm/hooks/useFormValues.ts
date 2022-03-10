import { ComputedRef, nextTick, Ref, unref } from "vue";
import { FormProps, FormSchema } from "../types";

export interface UseFormValuesContext {
  defaultValueRef: Recordable;
  propsRef: Ref<Partial<FormProps>>;
  getSchema: ComputedRef<FormSchema[]>;
}

export function useFormValues({
  defaultValueRef,
  getSchema,
  propsRef,
}: UseFormValuesContext) {
    
  async function initDefault() {
    await nextTick();
    const schemas = unref(getSchema);
    const formModel = unref(propsRef).model;
    if (formModel) {
      schemas.forEach((item) => {
        const key = item.field;
        defaultValueRef[item.field] = formModel[key];
      });
    }
  }

  return {
    initDefault,
  };
}
