<template>
  <div :class="[getClass]">
    <div :class="[`${getClass}-content`]"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const getClass = "scroll-container";

    return {
      getClass,
    };
  },
});
</script>
