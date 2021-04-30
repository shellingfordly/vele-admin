<template>
  <div>
    Test

    <button @click="modify">modify</button>
    <div>{{ obj1 }}</div>
    <div>{{ obj2 }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const obj1 = reactive({
      key1: "obj1 key1",
    });
    const obj2 = {
      key1: "obj2 key1",
    };

    watch(
      obj1,
      () => {
        console.log("===watch obj1===");
        console.log("obj1===", obj1);
        console.log("obj2===", obj2);
      },
      { deep: true }
    );

    watch(
      obj2,
      () => {
        console.log("watch obj2===", obj2);
      },
      { deep: true }
    );

    function modify() {
      obj1.key1 = "modify obj1 key1";
      obj2.key1 = "modify obj2 key1";
    }

    return { obj1, obj2, modify };
  },
});
</script>
