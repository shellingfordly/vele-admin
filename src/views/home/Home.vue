<template>
  <div>
    Home
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "",
  setup() {
    const router = useRouter();
    function onClick() {
      router.push("/about");
    }

    return { onClick };
  },
});
</script>
