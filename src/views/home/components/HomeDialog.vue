<template>
  <WDialog @register="register" v-bind="$attrs">
    <div>
      <div>HomeForm</div>
      <el-button type="primary" @click="close">close</el-button>
    </div>
  </WDialog>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WDialog from "/@/components/dialog/Dialog.vue";
import { useDialog } from "/@/components/dialog/useDialog";

export default defineComponent({
  name: "HomeDialog",
  components: { WDialog },
  setup() {
    const [register, { actionDialog }] = useDialog();
    function close() {
      alert(1)
      actionDialog(false);
    }
    return {
      register,
      close,
    };
  },
});
</script>
