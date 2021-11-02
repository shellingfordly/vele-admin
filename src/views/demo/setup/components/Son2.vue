<template>
  <div>
    <p>自组件 2</p>
    <p>{{ data.name }}</p>
    <p>{{ data.age }}</p>
    <el-button @click="onClick">son2 btn</el-button>
    <!-- <el-button @click="emit('ok', {})">son2 btn</el-button> -->
  </div>
</template>
<script setup lang="ts">
// import { useAttrs } from "vue";

defineProps({
  data: {
    type: Object,
    default: {
      name: "default",
      age: 0,
    },
  },
});


// const { emit } = useAttrs();

function onClick() {
  // emit("ok", {
  //   name: "son2",
  //   age: 20,
  // });
}
</script>
