import '../global/babylonset.js'

import { createApp } from 'vue'
import App from './components/App.vue'
import store from '../global/store'
window.store = store
import router from './router'
//
if (window.innerWidth > 992) {
    window.location.replace("/")
}
else {
createApp(App)
    .use(router)
    .use(store)
    .mount("#app")
}
