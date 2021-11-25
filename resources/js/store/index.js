import axios from 'axios';
import { createStore } from 'vuex'


export default createStore({
    state() {
        return {
            configurator: true
        }
    },
    getters: {

    },
    mutations: {
        setConfigurator(state, payload){
            state.configurator = payload
        }
    },

    actions: {

    },
})
