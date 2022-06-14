<template>
  <el-form :model="formData" ref="formRef" label-width="60px">
    <el-form-item label="用户名" prop="username">
      <el-input
        v-model="formData.username"
        placeholder="please enter username"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="formData.password"
        placeholder="please enter password"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" @click="submitForm">
        提交
      </el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { userStore } from "/@/store/modules/user";

export default defineComponent({
  setup() {
    const formData = reactive({
      username: "admin",
      password: "123456",
    });
    const loading = ref(false);
    const formRef = ref();

    function submitForm() {
      loading.value = true;
      formRef.value.validate(async (valid: any) => {
        if (valid) {
          await userStore.loginAction(formData as any);
        } else {
          ElMessage.error("用户名或密码错误！");
          return false;
        }
        loading.value = false;
      });
    }

    function resetForm() {
      formRef.value.resetFields();
    }

    return { formData, formRef, loading, submitForm, resetForm };
  },
});
</script>

<style></style>
