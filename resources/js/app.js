require('./bootstrap');
import mainApp from './components/App.vue'
import { createApp } from 'vue';
import router from './router';
import store from './store';
import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders";
window.BABYLON = BABYLON;

createApp(mainApp)
    .use(router)
    .use(store)
    .mount("#app");