<template>
  <div class="layout-login-container">
    <div class="login-form-container">
      <LoginForm />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "./components/LoginForm.vue";

export default defineComponent({
  components: {
    LoginForm,
  },
  setup() {
    
    return {};
  },
});
</script>

<style lang="less" scoped>
.layout-login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .login-form-container {
    padding: 50px;
    border: 1px solid #eee;
  }
}
</style>
