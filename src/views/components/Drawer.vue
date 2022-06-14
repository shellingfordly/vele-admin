<script lang="ts" setup>
import { useDrawer } from "/@/components/VeDrawer/useDrawer";
import { Direction } from "/@/components/VeDrawer/types";
const baseTitle = ref("Left");

const [baseRegister, { actionDrawer, setProps }] = useDrawer({
  title: "Base Drawer",
  direction: "ltr",
});

function baseAction(direction: Direction = "ltr") {
  switch (direction) {
    case "rtl":
      baseTitle.value = "Right";
      break;
    case "btt":
      baseTitle.value = "Bottom";
      break;
    case "ttb":
      baseTitle.value = "Top";
      break;
  }
  setProps({
    title: baseTitle.value + " Drawer",
    direction,
  });
  actionDrawer(true);
}

const [outerRegister, { actionDrawer: outerAction }] = useDrawer({
  title: "Outer Drawer",
  size: "60%",
});
const [innerRegister, { actionDrawer: innerAction }] = useDrawer({
  title: "Inner Drawer",
  size: "30%",
});

const [noTitleRegister, { actionDrawer: noTitleAction }] = useDrawer({
  withHeader: false,
});

const [closeRegister, { actionDrawer: closeAction }] = useDrawer({
  title: "No Close Drawer",
  showClose: false,
  closeOnClickModal: false,
});
</script>

<template>
  <div class="mb-5">
    Base Drawer:
    <el-button @click="baseAction()">Left Drawer</el-button>
    <el-button @click="baseAction('rtl')">Right Drawer</el-button>
    <el-button @click="baseAction('ttb')">Top Drawer</el-button>
    <el-button @click="baseAction('btt')">Bottom Drawer</el-button>
  </div>
  <div class="mb-5">
    <el-button @click="outerAction(true)">Outer Drawer</el-button>
  </div>
  <div class="mb-5">
    <el-button @click="noTitleAction(true)">No Title Drawer</el-button>
  </div>
  <div class="mb-5">
    <el-button @click="closeAction(true)">Close Drawer</el-button>
  </div>
  <VeDrawer @register="baseRegister">
    Base {{ baseTitle }} Drawer Content
  </VeDrawer>
  <VeDrawer @register="outerRegister">
    <div class="mb-10">Nested Drawer Content</div>
    <VeDrawer @register="innerRegister"> Inner Drawer Content </VeDrawer>
    <el-button @click="innerAction(true)">Inner Drawer</el-button>
  </VeDrawer>
  <VeDrawer @register="noTitleRegister"> No Title Drawer Content </VeDrawer>
  <VeDrawer @register="closeRegister">
    <div class="mb-5">限制点击弹窗外部时无法关闭</div>
    <el-button type="primary" @click="closeAction(false)">
      点击此处关闭弹窗
    </el-button>
  </VeDrawer>
</template>

<style scoped lang="less"></style>
