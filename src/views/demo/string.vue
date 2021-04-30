<template>
  <div>
    <div>value1 ====== {{ value1 }}</div>
    <div>value2 ====== {{ value2 }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const value1 = ref("使用ref声明的value1");
    let value2 = "普通字符串value2";

    watch(
      value1,
      () => {
        console.log("===watch===");
        console.log("value1===", value1);
        console.log("value2===", value2);
      },
      { deep: true }
    );

    setTimeout(() => {
      value1.value = "修改value1";
      value2 = "修改value2";
    }, 1000);


    return { value1, value2 };
  },
});
</script>
