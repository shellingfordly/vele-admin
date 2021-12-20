<script lang="ts" setup>
import { useDialog } from "/@/components/dialog/useDialog";
import Dialog from "/@/components/dialog/Dialog.vue";

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
  <Dialog @register="baseRegister"> Base Dialog Content </Dialog>
  <Dialog @register="outerRegister">
    <div class="mb-10">Nested Dialog Content</div>
    <Dialog @register="innerRegister"> Inner Dialog Content </Dialog>
    <el-button @click="innerAction(true)">Inner Dialog</el-button>
  </Dialog>
  <Dialog @register="centeredRegister"> Centered Dialog Content </Dialog>
  <Dialog @register="centeredRegister"> Centered Dialog Content </Dialog>
  <Dialog @register="closeRegister">
    <div class="mb-5">限制点击弹窗外部时无法关闭</div>
    <el-button type="primary" @click="closeAction(false)"
      >点击此处关闭弹窗</el-button
    >
  </Dialog>
</template>

<style scoped lang="less"></style>
