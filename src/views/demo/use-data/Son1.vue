<template>
  <div>
    <div>Son1:</div>
    <div>
      <span> {{ data.msg }} </span>
      <el-button size="small" @click="change"> change</el-button>
    </div>
    <div>{{ parentData }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useData, { parentData } from "./hooks/useData";

export default defineComponent({
  name: "",
  setup() {
    const { data, change } = useData();

    change();

    setTimeout(() => {
      parentData.value = "useData changed parentData";
    }, 4000);

    // setTimeout(()=>{
    //   parentData.value = 'Son1 changed parentData'
    // }, 2000)

    return { data, change, parentData };
  },
});
</script>
