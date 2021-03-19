<template>
  <div class="menu-container">
    <menu-bar />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MenuBar from "./MenuBar.vue";

export default defineComponent({
  name: "Menu",
  components: { MenuBar },
  setup() {
    return {};
  },
});
</script>
