import axios from 'axios';
import { createStore } from 'vuex'
import languages from '../../global/locale/languages'

export default createStore({
    state() {
        return {
            other: false,
            maxPage: null,
            currentPage: null,
            language: languages['eng'],
            fullscreen: false,
            onLoaded: 0,
            inspector: true,
            configurator: true,
            customActiveLink: 1,
            finished: false,
            phoneOrEmail: false,
            params: {
                tablesCount: 1,
                legColor: 1,
                legType: 0,
                size: 0,
                wallColor: '#ffffff',
                mainWallColor: '#182249',
                floor: null,
                deskMaterial: 'desks/bamboo',
                deskimage: 'desks/laminate/acw115.jpg',
                activeFolder: 'desks/laminate'
            },
            decor: {
                lamp: false,
                monitor: false,
                image: true,
                chair: false,
                plant: true,
                tumbochka: false,
            },
            custom: {
                corners: 1,
                grommet: 0,
                partition: 0,
                accessories: null,
                chair: null,
            },
            legTypes: [
                { img: '/images/1leg.png', name: '1 legs' },
                { img: '/images/2leg.png', name: '2 legs' },
                { img: '/images/3leg.png', name: '3 legs' },
                { img: '/images/4leg.png', name: '4 legs' },
                { img: '/images/5leg.png', name: 'Side cabinet' },
            ]
        }
    },
    mutations: {
        setLang(state, pay) {
            localStorage.setItem('lang', pay)
            state.language = languages[pay]
        },
        //otherdagi counter
        setTablesCount(state, pay) {
            if (pay < 1 && (state.params.tablesCount > 1)) {
                state.params.tablesCount += pay
            }
            else if (pay > -1) {
                state.params.tablesCount += pay
            }
        },
        setRoute(state, payload) {
            const tags = document.querySelectorAll('.miniRoutes')
            state.maxPage = tags.length
            if (payload) {
                var page = tags.length
            }
            else {
                var page = 1
            }
            state.currentPage = page
        },
        //Create Your own intererdagi menularni yashiradi
        setConfigurator(state, payload) {
            state.configurator = payload
        },
        //Buni js/elements/scene.js da chaqiramiz va default textura beramiz polga
        //shu funksiya roomda ham polni uzgartirish uchun chaqiriladi
        floorImage(state, req) {
            state.params.floor = req.textureName
            scene.getMaterialByName('floor').albedoTexture = scene.getTextureByName(req.textureName)
        },


        setLegType(state, defaultLeg) {
            state.params.legType = defaultLeg
            let show = new BABYLON.Vector3(1, 1, 1), hide = new BABYLON.Vector3(0, 0, 0)
            //Stol turlari
            let Legs = ['onelegParent', 'twolegParent', 'threelegParent', 'fourlegParent', 'fivelegParent']

            //Tanlangan meshni paydo qiladi qolganlarini yashiradi
            for (let i = 0; i < Legs.length; i++) {
                const MeshParent = scene.getNodeByName(Legs[i])
                if (defaultLeg == i + 1)
                    Animate(MeshParent, 'scaling', VECTOR3, [{ frame: 0, value: hide }, { frame: 15, value: show }])
                else
                    Animate(MeshParent, 'scaling', VECTOR3, [{ frame: 0, value: MeshParent.scaling }, { frame: 15, value: hide }])
            }
            //Style qo'shish uchun activeligini bildiradi

            store.commit('setCorner', store.state.custom.corners)
        },

        setDeskMaterial(state, textureName) {
            let materialNames = ['oneTable', 'twoTable', 'threeTable', 'fourTable', 'fiveTable', 'fiveShkaf']
            materialNames.forEach(element => {
                let material = scene.getMaterialByName(element)
                material.albedoTexture = scene.getTextureByName(textureName)
            });

            state.params.deskimage = textureName
        },

        setCorner(state, indexCorners) {
            state.custom.corners = indexCorners

            let sharp = ['oneTable', 'twoTable', 'threeTable', 'fourTable', 'fiveTable']
            let circle = ['oneTableCircle', 'twoTableCircle', 'threeTableCircle', 'fourTableCircle', 'fiveTableCircle']
            let rounded = ['oneTableRounded', 'twoTableRounded', 'threeTableRounded', 'fourTableRounded', 'fiveTableRounded']

            let ArraySharpes = [sharp[state.params.legType - 1], circle[state.params.legType - 1], rounded[state.params.legType - 1]];
            ArraySharpes.forEach((element, index) => {
                if (index == indexCorners - 1) {
                    const mesh = scene.getNodeByName(element)
                    mesh.scaling = new BABYLON.Vector3(1, 1, 1)
                }
                else {
                    const mesh = scene.getNodeByName(element)
                    mesh.scaling = new BABYLON.Vector3(0, 0, 0)
                }
            });
        }
    },


    actions: {
        async textures() {
            let { data } = await axios.get('/api/textures')
            return data
        },

        async deskTextures() {
            let { data } = await axios.get('/api/desks')
            return data
        }
    },
})
