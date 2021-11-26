import axios from 'axios';
import { createStore } from 'vuex'


export default createStore({
    state() {
        return {
            configurator: true,
            tablesCount: 1,
        }
    },
    getters: {

    },
    mutations: {
        setTablesCount(state,pay){
            if(pay < 1 && (state.tablesCount > 1)){
                console.log();
                state.tablesCount += pay
            }
            else if(pay > -1){
                state.tablesCount += pay
            }
        },
        setConfigurator(state, payload){
            state.configurator = payload
        }
    },

    actions: {

    },
})
