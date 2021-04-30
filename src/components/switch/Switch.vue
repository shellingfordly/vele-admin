<template>
  <div class="w1-switch">
    <slot :name='case' />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Switch",
  props: {
    case: {
      type: String,
      default: 'default'
    }
  },
  setup() {
    return {};
    
  },
});
</script>
 