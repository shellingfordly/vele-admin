import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
import { createApp } from "vue";
import { setRouter } from "./router";
import { setupStore } from "./store";
import App from "./App.vue";
import "./style/index.less";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import setup from "./setup";

const app = createApp(App);

setup(app);

setRouter(app);
setupStore(app);
app.use(ElementPlus);

app.mount("#app");
