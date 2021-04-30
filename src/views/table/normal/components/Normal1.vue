<template>
  <div>
    普通表格11111111
    <div :style="style"></div>
    <div>
      <el-table :data="tableData" ref="tableRef" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, unref } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const tableData = [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
      },
    ];
    const tableRef = ref();
    const style = reactive({
      width: "200px",
      height: "0px",
      backgroundColor: "pink",
    });

    setTimeout(() => {
      style.height = "100px";
    }, 2000);

    onMounted(() => {
      const el = unref(tableRef);
      if (el) {
        const top = el.$el.offsetTop;
        console.log("初始top", top);

        setTimeout(() => {
          const top = el.$el.offsetTop;
          console.log("2s-top", top);
        }, 3000);
      }
    });

    return { tableData, tableRef, style };
  },
});
</script>
