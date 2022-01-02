import '../global/babylonset.js'

import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './store'
window.store = store

if (window.innerWidth > 992) {
    window.location.replace("/")
}
else {
    createApp(App)
        .use(router)
        .use(store)
        .mount("#app")
}
