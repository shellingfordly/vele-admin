<script lang="ts" setup>
import { reactive } from "vue";
import VeForm from "/@/components/form/VeForm.vue";
import VeFormItem from "/@/components/form/VeFormItem.vue";
import VeInput from "/@/components/form/VeInput.vue";

const formData = reactive({
  name: "tom",
});
</script>

<template>
  <VeForm :model="formData">
    <VeFormItem label="name">
      <VeInput v-model="formData.name" />
    </VeFormItem>
  </VeForm>
</template>

<style scoped lang="less"></style>
