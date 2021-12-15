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
                legType: 0,
                size: 0,
                deskMaterial: 1,
                wallColor: '#ffffff',
                floor: null
            },
            decor:{
                lamp: false,
                monitor: false,
                image: false,
                chair: false,
                plant: false,
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
        floorImage(state, req){
            state.params.floor = req.textureName
            scene.getMaterialByName('floor').albedoTexture = scene.getTextureByName(req.textureName)
        },
        setLegType(state, defaultLeg){
            //Qayta Chaqirilmaslik uchun
            if(state.params.legType == defaultLeg) return

            let show = new BABYLON.Vector3(1,1,1),hide = new BABYLON.Vector3(0,0,0)
            //Stol turlari
            let Legs = ['oneleg','twoleg','threeleg','fourleg','fiveleg']

            //Tanlangan meshni paydo qiladi qolganlarini yashiradi
            for (let i = 0; i < Legs.length; i++) {
                const MeshParent = scene.getNodeByName(Legs[i])
                if(defaultLeg == i+1) 
                    Animate(MeshParent,'scaling', VECTOR3, [{frame: 0,value: hide},{frame: 15,value: show}])
                else 
                    Animate(MeshParent,'scaling', VECTOR3, [{frame: 0,value: MeshParent.scaling},{frame: 15,value: hide}])
            }

            //Style qo'shish uchun activeligini bildiradi
            state.params.legType = defaultLeg
        },
    },
    actions: {
        async textures(){
            var {data} = await axios.get('api/textures')
            return data
        },
    },
})
