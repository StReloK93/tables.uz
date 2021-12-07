//FOR BABYLON.js
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders/glTF";
window.BABYLON = BABYLON;
 
//FOR VUE 3
import mainApp from './components/App.vue'
import { createApp } from 'vue';
import router from './router';
import store from './store';
window.store = store

createApp(mainApp)
    .use(router)
    .use(store)
    .mount("#app");