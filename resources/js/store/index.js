import axios from 'axios';
import { createStore } from 'vuex'


export default createStore({
    state() {
        return {
            configurator: true,
            customActiveLink: 1,
            params: {
                tablesCount: 1,
                legColor: 1,
                legType: 1,
                size: 0,
                deskMaterial: 1,
            }
        }
    },
    getters: {

    },
    mutations: {
        setTablesCount(state,pay){
            if(pay < 1 && (state.tablesCount > 1)){
                state.params.tablesCount += pay
            }
            else if(pay > -1){
                state.params.tablesCount += pay
            }
        },
        setConfigurator(state, payload){
            state.configurator = payload
        }
    },

    actions: {

    },
})
