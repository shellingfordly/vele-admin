<template>
  <WDialog @register="register" v-bind="$attrs">
    <div>
      <div>HomeForm</div>
      <el-button type="primary" @click="close">close</el-button>
    </div>
  </WDialog>
</template>
<script lang="ts">
import WDialog from "/@/components/dialog/Dialog.vue";
import { useDialog } from "/@/components/VeDialog/useDialog";

export default defineComponent({
  name: "HomeDialog",
  components: { WDialog },
  setup() {
    const [register, { actionDialog }] = useDialog();
    function close() {
      actionDialog(false);
    }

    return {
      register,
      close,
    };
  },
});
</script>
