<template>
  <div>
    <button @click="modify">modify</button>
    <div>value1 ====== {{ value1 }}</div>
    <div>value2 ====== {{ value2 }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const value1 = ref(111111);
    let value2 = 111111;

    watch(
      value1,
      () => {
        console.log("===watch===");
        console.log("value1===", value1);
        console.log("value2===", value2);
      },
      { deep: true }
    );

    function modify() {
      value1.value = 222222;
      value2 = 222222;
    }

    return { value1, value2, modify };
  },
});
</script>
