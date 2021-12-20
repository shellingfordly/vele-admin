<script lang="ts" setup>
import { ref, reactive } from "vue";

const $props = defineProps<{ modelValue: number }>();
const $emit = defineEmits(["update:modelValue", "success"]);

const ruleFormRef = ref<any>();
const formData = reactive({
  name: "",
  sex: "",
  date: "",
  type: [],
  desc: "",
});

const rules = {
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur",
    },
  ],
  sex: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
};

function submitForm() {
  ruleFormRef.value.validate((valid: any) => {
    if (valid) {
      $emit("update:modelValue", $props.modelValue + 1);
      $emit("success", formData);
    } else {
      return false;
    }
  });
}
function resetForm() {
  ruleFormRef.value.resetFields();
}
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="formData"
    :rules="rules"
    label-width="60px"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="formData.name"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-select v-model="formData.sex" placeholder="please select sex">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="生日" prop="date">
      <el-date-picker
        v-model="formData.date"
        type="date"
        placeholder="Pick a date"
      ></el-date-picker>
    </el-form-item>
    <el-form-item label="身份" prop="type">
      <el-checkbox-group v-model="formData.type">
        <el-checkbox label="老师" name="type"></el-checkbox>
        <el-checkbox label="程序员" name="type"></el-checkbox>
        <el-checkbox label="医生" name="type"></el-checkbox>
        <el-checkbox label="律师" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="备注" prop="desc">
      <el-input v-model="formData.desc" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm">重置</el-button>
      <el-button type="primary" @click="submitForm"> 下一步 </el-button>
    </el-form-item>
  </el-form>
</template>
