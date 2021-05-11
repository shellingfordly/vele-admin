<template>
  <div>
    <div>Son2:</div>
    <div>
      <span>{{ data.msg }}</span>
      <el-button size="small" @click="change">change</el-button>
    </div>
    <div>{{parentData}}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useData, { parentData } from "./useData";

export default defineComponent({
  name: "",
  setup() {
    const { data } = useData();

    const change = () => {
      data.msg = "Son2 changed message";
    }

    // setTimeout(()=>{
    //   parentData.value = 'Son2 changed parentData'
    // }, 3000)

    return { data, change, parentData };
  },
});
</script>
