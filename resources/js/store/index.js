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
                wallColor: '#ffffff',
                floor: null
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
            console.log(pay);
            if(pay < 1 && (state.params.tablesCount > 1)){
                state.params.tablesCount += pay
            }
            else if(pay > -1){
                state.params.tablesCount += pay
            }
        },
        setConfigurator(state, payload){
            state.configurator = payload
        },
        setFloor(state, payload){
            state.params.floor = payload
        }
    },
    actions: {
        async textures(){
            var {data} = await axios.get('api/textures')
            return data
        },

        floorImage({commit}, req){
            commit('setFloor', req.textureName)
            req.scene.getMaterialByName('floor').albedoTexture = req.scene.getTextureByName(req.textureName)
        }
        
    },
})
