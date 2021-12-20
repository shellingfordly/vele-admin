import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
import { createApp } from "vue";
import { setRouter } from "./router";
import { setupStore } from "./store";
import App from "./App.vue";
import setup from "./setup";
import "element-plus/dist/index.css";
import "./style/index.less";

const app = createApp(App);

app.config.globalProperties.foo = "bar";

setRouter(app);
setupStore(app);

// all
setup(app);

app.mount("#app");
