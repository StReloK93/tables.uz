import axios from 'axios';
import { createStore } from 'vuex'


export default createStore({
    state() {
        return {
            fullscreen: false,
            onLoaded: false,
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
        },
        setLegType(state, payload){
            const scene = payload.scene

            let arrayLeg = [
                scene.getNodeByName('oneleg'),
                scene.getNodeByName('twoleg'),
                scene.getNodeByName('threeleg'),
                scene.getNodeByName('fourleg'),
                scene.getNodeByName('fiveleg'),
            ]

            for (let i = 0; i < arrayLeg.length; i++) {
                if(payload.legType == i+1) arrayLeg[i].scaling = new BABYLON.Vector3(1,1,1)
                else arrayLeg[i].scaling = new BABYLON.Vector3(0,0,0)
            }

            state.params.legType = payload.legType

        },
    },
    actions: {
        async textures(){
            var {data} = await axios.get('api/textures')
            return data
        },

        floorImage({commit}, req){
            commit('setFloor', req.textureName)
            scene.getMaterialByName('floor').albedoTexture = scene.getTextureByName(req.textureName)
        }
        
    },
})
