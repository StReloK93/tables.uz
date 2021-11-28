//FOR BABYLON.js
require('./bootstrap');
import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders";
window.BABYLON = BABYLON;

//FOR VUE 3
import mainApp from './components/App.vue'
import { createApp } from 'vue';
import router from './router';
import store from './store';

createApp(mainApp)
    .use(router)
    .use(store)
    .mount("#app");