<template>
  <WDrawer v-bind="$attrs" size="50%"> <div>HomeDrawer</div> </WDrawer>
</template>
<script lang="ts">
import WDrawer from "/@/components/drawer/Drawer.vue";

export default defineComponent({
  name: "HomeForm",
  components: { WDrawer },
  setup() {
    return {};
  },
});
</script>
