<template>
  <div>
    <Son1 />
    <Son2 />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";

export const parentData = ref("parentData");

export default defineComponent({
  components: { Son1, Son2 },

  setup() {
    return {};
  },
});
</script>
