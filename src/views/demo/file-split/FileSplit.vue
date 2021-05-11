<template>
  <div :class="[getClass]">
    <div :class="[`${getClass}-top`]">
      <div :class="[`${getClass}-top__title`]">
        layout-container-top__title
      </div>
      <div :class="[`${getClass}-top__content`]">
        layout-container-top__content
      </div>
    </div>
    <div :class="[`${getClass}-bot`]">
      <div :class="[`${getClass}-bot__title`]">
        layout-container-bot__title
      </div>
      <div :class="[`${getClass}-bot__content`]">
        layout-container-bot__content
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const getClass = "layout-container"

    return {getClass};
  },
});
</script>

<style src="./index.less"></style>
