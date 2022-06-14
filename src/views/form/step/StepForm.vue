<script lang="ts" setup>
import StepOne from "./components/StepOne.vue";
import { ElResult } from "element-plus";

const stepList = ["基本信息", "信息确认", "创建成功"];
const active = ref(1);

const data = {
  name: "姓名",
  sex: "性别",
  date: "生日",
  type: "身份",
  desc: "备注",
};

const formData = ref({
  name: "xx",
  sex: "xx",
  date: "xx",
  type: ["xx"],
  desc: "xx",
});

function onSuccess(data: any) {
  formData.value = data;
}
</script>

<template>
  <div class="flex h-120 w-screen">
    <el-steps direction="vertical" :active="active">
      <el-step v-for="title in stepList" :title="title" :key="title"></el-step>
    </el-steps>
    <div class="px-100">
      <div class="text-center text-4xl leading-loose">
        {{ stepList[active - 1] }}
      </div>
      <StepOne v-if="active === 1" v-model="active" @success="onSuccess" />
      <div v-else-if="active === 2" class="w-50 mt-10 m-auto">
        <div class="mb-5" v-for="(value, key) in data" :key="key">
          <span class="mr-4">{{ value }} :</span>
          <span>{{ formData[key] }}</span>
        </div>
        <div>
          <el-button @click="active--">上一步</el-button>
          <el-button type="primary" @click="active++"> 下一步 </el-button>
        </div>
      </div>
      <div v-else>
        <el-result icon="success" title="创建成功">
          <template #extra>
            <el-button type="primary" size="large" @click="active = 1">
              再次创建
            </el-button>
          </template>
        </el-result>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.form-container {
  display: flex;
  width: 100%;
  height: 500px;

  .content {
    padding: 0 100px;
    flex: 1;
  }
}
</style>
