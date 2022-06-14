<script lang="ts" setup>
import { useTable, BasicColumnProps } from "/@/components/VeTable";
import TableHeader from "./components/TableHeader.vue";
import { useTableData } from "./hooks/useTableData";

const columns: BasicColumnProps[] = [
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "age",
    label: "性别",
  },
];

const data = useTableData();

const { register, methods } = useTable({
  columns,
  data,
  stripe: true,
});
</script>

<template>
  <TableHeader title="UseTable" placeholder="请输入搜索的名字" />
  <VeTable @register="register" />
</template>

<style scoped lang="less"></style>
