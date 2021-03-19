declare module '*.vue' {
  import { FunctionalComponent, defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> | FunctionalComponent;
  export default component;
}
