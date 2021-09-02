<template>
  <div>
    <div>
      <Son1 :data="data" />
      <div style="width: 200px">
        <el-input v-model="data.name"></el-input>
        <el-input v-model="data.age"></el-input>
      </div>
    </div>
    <div>
      <Son2 :data="data" @ok="handleOk" />
    </div>
    {{ bbb }}
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import Son1 from "./components/Son1.vue";
import Son2 from "./components/Son2.vue";
import { useData, bbb } from "./hooks/useData";

const { data, setName, setAge } = useData();
const state = reactive({
  
})

function handleOk(data) {
  setName(data.name);
  setAge(data.age);
}

</script>
