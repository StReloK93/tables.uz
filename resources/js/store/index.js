import axios from 'axios';
import { createStore } from 'vuex'


export default createStore({
    state() {
        return {
            inspector: false,
            configurator: true,
            customActiveLink: 1,
            params: {
                tablesCount: 1,
                legColor: 1,
                legType: 1,
                size: 0,
                deskMaterial: 1,
                wallColor: '#ffffff'
            },
            decor:{
                lamp: false,
                monitor: false,
                image: true,
                chair: false,
                plant: false,
            }
        }
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
