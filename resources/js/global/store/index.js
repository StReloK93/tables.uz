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
		//for Mobile
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


		setCorner(state, indexCorners) {
			state.custom.corners = indexCorners

			let ArraySharpes = [
				//sharp
				['oneTable', 'twoTable', 'threeTableRight', 'threeTableLeft', 'fourTable', 'fiveTable'],
				//circle
				['oneTableCircle', 'twoTableCircle', 'threeTableCircleRight', 'threeTableCirlceLeft', 'fourTableCircle', 'fiveTableCircle'],
				//rounded
				['oneTableRounded', 'twoTableRounded', 'threeTableRoundedRight', 'threeTableRoundedLeft', 'fourTableRounded', 'fiveTableRounded']
			]

			ArraySharpes.forEach((element, index) => {
				element.forEach(tables => {
					if (index == indexCorners - 1) {
						const mesh = scene.getNodeByName(tables)
						mesh.setEnabled(true)
					}
					else {
						const mesh = scene.getNodeByName(tables)
						mesh.setEnabled(false)
					}
				});
			})
		},
	},


	actions: {
		async textures() {
			let { data } = await axios.get('/api/textures')
			return data
		},

		async deskTextures() {
			let { data } = await axios.get('/api/desks')
			return data
		},
	},
})
