import { onUnmounted, ref, unref, watch } from "vue";
import { BasicTableProps, TableActionType } from "../types";
import { throwError } from "/@/utils/common/log";
import { isProdMode } from "/@/utils/env/env";

export function useTable(tableProps?: BasicTableProps) {
  const tableRef = ref();
  const loadedRef = ref<Nullable<boolean>>(false);

  function register(instance: TableActionType) {
    if (isProdMode()) {
      onUnmounted(() => {
        tableRef.value = null;
        loadedRef.value = null;
      });
    }

    // 生产环境下 ，instance 存在，直接返回
    if (unref(loadedRef) && isProdMode() && instance === unref(tableRef)) {
      return;
    }

    tableRef.value = instance;
    loadedRef.value = true;

    watch(
      () => tableProps,
      () => {
        if (tableProps) {
          instance.setProps(tableProps);
        }
      },
      { immediate: true, deep: true }
    );
  }

  function getTableInstance(): TableActionType {
    const table = unref(tableRef);

    if (!table) {
      throwError(
        "The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"
      );
    }

    return table;
  }

  const methods: TableActionType = {
    setProps(props: Partial<BasicTableProps>) {
      getTableInstance().setProps(props);
    },
  };

  return {
    register,
    methods,
  };
}
