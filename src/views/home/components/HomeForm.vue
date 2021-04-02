<template>
  <WDialog v-bind="$attrs"> <div>HomeForm</div> </WDialog>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WDialog from "/@/components/dialog/Dialog.vue";

export default defineComponent({
  name: "HomeForm",
  components: { WDialog },
  setup() {
    return {};
  },
});
</script>
