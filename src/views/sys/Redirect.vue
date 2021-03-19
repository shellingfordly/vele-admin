<script lang="ts">
  import { defineComponent, unref } from 'vue';

  import { useRouter } from 'vue-router';
  export default defineComponent({
    name: 'Redirect',
    setup() {
      const { currentRoute, replace } = useRouter();

      const { params, query } = unref(currentRoute);
      const { path } = params;

      console.log('Redirect.vue===',currentRoute)

      const _path = Array.isArray(path) ? path.join('/') : path;

      replace({
        path: '/' + _path,
        query,
      });

      return {};
    },
  });
</script>
