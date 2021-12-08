<script lang="ts" setup>
import TableHeader from "./components/TableHeader.vue";
import { getTableTreeList } from "/@/api";
import { onMounted, ref } from "vue";

const tableData = ref([]);
const allData = ref([]);
const expandRowKeys = ref<string[]>([]);

onMounted(async () => {
  const data = await getTableTreeList();
  tableData.value = allData.value = data;
});

async function onSearch(searchKey: string) {
  tableData.value = allData.value.filter((item: any) =>
    item.name.includes(searchKey)
  );
}

function expandChange(isExpand: boolean) {
  if (isExpand) {
    expandRowKeys.value = tableData.value.map((item: any) => item.id);
  } else {
    expandRowKeys.value = [];
  }
}
</script>

<template>
  <TableHeader
    title="树型表格"
    placeholder="请输入搜索的名字"
    @search="onSearch"
  >
    <el-button type="primary" @click="() => expandChange(true)"
      >展开全部</el-button
    >
    <el-button type="primary" @click="() => expandChange(false)"
      >折叠全部</el-button
    >
  </TableHeader>
  <el-table
    :data="tableData"
    style="width: 100%; margin-bottom: 20px"
    row-key="id"
    border
    :expand-row-keys="expandRowKeys"
  >
    <el-table-column prop="date" label="date" sortable width="180" />
    <el-table-column prop="name" label="Name" sortable width="180" />
    <el-table-column prop="email" label="Email" sortable />
    <el-table-column prop="address" label="Address" sortable />
  </el-table>
</template>

<style scoped lang="less"></style>
