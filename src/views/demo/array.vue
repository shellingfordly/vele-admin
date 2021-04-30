<template>
  <div>
    

    <button @click="push">Push</button>
    <div style="display: flex">
      <ul style="margin-right: 20px">
        <li v-for="item in list1" :key="item">{{ item }}</li>
      </ul>
      <ul>
        <li v-for="item in list2" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const list1 = ref<string[]>(["aaa", "bbb", "ccc"]);
    const list2 = ["AAA", "BBB", "CCC"];

    watch(
      list1,
      () => {
        console.log("list1===", list1.value);
        console.log("list2===", list2);
      },
      { deep: true }
    );

    watch(
      list2,
      () => {
        console.log("watchlist2===", list2);
      },
      { deep: true }
    );

    // setTimeout(() => {
    //   list1.value[3] = "ddd";
    //   list2[3] = "DDD";
    // }, 1000);

    // setTimeout(() => {
    //   list2[3] = "DDD";
    // }, 1000);

  function push() {
    list1.value[3] = "ddd";
    list2[3] = "DDD";
  }

    return { list1, list2, push };
  },
});
</script>
