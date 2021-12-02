import axios from 'axios';
import { createStore } from 'vuex'


export default createStore({
    state() {
        return {
            inspector: true,
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
                lamp: true,
                monitor: true,
                image: true,
                chair: true,
                plant: true,
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
