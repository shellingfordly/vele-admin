<script lang="ts" setup>
import TableHeader from "./components/TableHeader.vue";
import { getTableList } from "/@/api";

const tableData = ref([]);
const allData = ref([]);

onMounted(async () => {
  const data = await getTableList();
  tableData.value = allData.value = data;
});

async function onSearch(searchKey: string) {
  tableData.value = allData.value.filter((item: any) =>
    item.name.includes(searchKey)
  );
}
</script>

<template>
  <TableHeader
    title="普通表格"
    placeholder="请输入搜索的名字"
    @search="onSearch"
  />
  <el-table :data="tableData" :border="true" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="email" label="Email" />
    <el-table-column prop="address" label="Address" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small">Detail</el-button>
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped>
.tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .title {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
