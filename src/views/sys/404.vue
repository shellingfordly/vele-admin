<template>
  <div class="error-container">
    <div class="error-content">
      <div class="error-img">
        <img class="error-svg" src="/@/assets/svg/404.svg" alt="" />
      </div>
      <div class="error-btn">
        <el-button type="primary" @click="onClick">
          返回首页
        </el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "",
  setup() {
    const router = useRouter()
    function onClick(){
      router.push('/')
      
    }
    return {onClick};
  },
});
</script>

<style lang="less" scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .error-svg {
    width: 300px;
  }

  .error-btn {
    margin-top: 10px;
    text-align: center;
  }
}
</style>
