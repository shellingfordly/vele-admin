<script lang="ts" setup>
import { ElTable, ElTableColumn } from "element-plus";
import { computed, onMounted, ref, unref, useAttrs } from "vue";
import { BasicTableProps, TableActionType } from "./types";
import { useTableEvent } from "./hooks/useTableEvent";
import { AnySoaRecord } from "dns";

const attrs = useAttrs();
const emit = defineEmits(["register"]);
const props = defineProps();
const propsRef = ref<Partial<BasicTableProps<AnySoaRecord>>>({});
const tableRef = ref<Nullable<TableActionType>>(null);

const getBinValue = computed<Recordable>(() => ({
  ...attrs,
  ...props,
  ...propsRef.value,
}));

const getColumns = computed(() => {
  const { columns } = unref(propsRef);
  return columns || [];
});

const {} = useTableEvent();

function setProps(tableProps: Partial<BasicTableProps>) {
  propsRef.value = {
    ...propsRef.value,
    ...tableProps,
  } as any;
}

const tableAction: Partial<TableActionType> = {
  setProps,
};

onMounted(() => {
  emit("register", tableAction);
});
</script>

<template>
  <ElTable ref="tableRef" v-bind="getBinValue">
    <ElTableColumn v-bind="column" v-for="(column, index) in getColumns" :key="index" />
  </ElTable>
</template>
