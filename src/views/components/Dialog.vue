<script lang="ts" setup>
import { useDialog } from "/@/components/VeDialog/useDialog";

const [baseRegister, { actionDialog: baseAction }] = useDialog({
  title: "Base Dialog",
});

const [outerRegister, { actionDialog: outerAction }] = useDialog({
  title: "Outer Dialog",
});
const [innerRegister, { actionDialog: innerAction }] = useDialog({
  title: "Inner Dialog",
  width: "30%",
});

const [centeredRegister, { actionDialog: centeredAction }] = useDialog({
  title: "Centered Dialog",
  center: true,
  destroyOnClose: true,
  closeOnClickModal: false,
});

const [closeRegister, { actionDialog: closeAction }] = useDialog({
  title: "No Close Dialog",
  closeOnClickModal: false,
  showClose: false,
});
</script>

<template>
  <div class="mb-5">
    <el-button @click="baseAction(true)">Base Dialog</el-button>
  </div>
  <div class="mb-5">
    <el-button @click="outerAction(true)">Outer Dialog</el-button>
  </div>
  <div class="mb-5">
    <el-button @click="centeredAction(true)">Centered Dialog</el-button>
  </div>
  <div class="mb-5">
    <el-button @click="closeAction(true)">Close Dialog</el-button>
  </div>
  <VeDialog @register="baseRegister"> Base Dialog Content </VeDialog>
  <VeDialog @register="outerRegister">
    <div class="mb-10">Nested Dialog Content</div>
    <VeDialog @register="innerRegister"> Inner Dialog Content </VeDialog>
    <el-button @click="innerAction(true)">Inner Dialog</el-button>
  </VeDialog>
  <VeDialog @register="centeredRegister"> Centered Dialog Content </VeDialog>
  <VeDialog @register="centeredRegister"> Centered Dialog Content </VeDialog>
  <VeDialog @register="closeRegister">
    <div class="mb-5">限制点击弹窗外部时无法关闭</div>
    <el-button type="primary" @click="closeAction(false)">
      点击此处关闭弹窗
    </el-button>
  </VeDialog>
</template>

<style scoped lang="less"></style>
