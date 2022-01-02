import '../global/babylonset.js'

import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './store'
window.store = store

if (window.innerWidth < 992) {
    window.location.replace("http://127.0.0.1:8000/mobile")
}
else {
    createApp(App)
        .use(router)
        .use(store)
        .mount("#app")
}
