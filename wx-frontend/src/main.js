import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './css/normalize.css'
import './css/base.less'
import './assets/fonts/iconfont.css'

createApp(App).use(store).use(router).mount('#index')
