import { createApp } from 'vue'
import { setRouter } from './router'
import { setupStore } from './store'
import App from './App.vue'
import setup from './setup'
import 'element-plus/lib/theme-chalk/index.css';
import './style/index.less'
import './mock'

const app = createApp(App)

app.config.globalProperties.foo = 'bar'

setRouter(app)
setupStore(app)

// all
setup(app)


app.mount('#app')