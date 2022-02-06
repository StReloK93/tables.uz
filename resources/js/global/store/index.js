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
				//legs
				legColor: 1,
				legType: 0,
				deskimage: 'desks/laminate/cw115.jpg',
				//room
				wallColor: '#CFCFCF',
				floor: null,

				deskMaterial: 'desks/laminate',
				activeFolder: 'desks/laminate'
			},
			sizepage: {
				size: 0,
				length: null,
				width: null,
				thickness: null,
			},
			otherpage: {
				service: false,
				needchair: false,
				height: null,
				length: null,
				message: null
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
			console.log(state.params.activeFolder);
			state.custom.corners = indexCorners

			if (state.params.activeFolder == 'desks/bamboo') {
				var ArraySharpes = [
					//sharp
					['oneTable', 'twoTableBambuk', 'threeTableRight', 'threeTableLeft', 'fourTable', 'fiveTable'],
					//circle
					['oneTableCircle', 'twoTableBambukCircle', 'threeTableCircleRight', 'threeTableCirlceLeft', 'fourTableCircle', 'fiveTableCircle'],
					//rounded
					['oneTableRounded', 'twoTableBambukRounded', 'threeTableRoundedRight', 'threeTableRoundedLeft', 'fourTableRounded', 'fiveTableRounded'],
					['twoTable', 'twoTableCircle', 'twoTableRounded']
				]
			}
			else if (state.params.activeFolder == 'desks/solidedge') {
				var ArraySharpes = [
					//sharp
					['oneTable', 'twoLiveEdge', 'threeTableRight', 'threeTableLeft', 'fourLiveEdge', 'fiveTable'],
					//circle
					['oneTableCircle', 'twoLiveEdgeCircle', 'threeTableCircleRight', 'threeTableCirlceLeft', 'fourLiveEdgeCircle', 'fiveTableCircle'],
					//rounded
					['oneTableRounded', 'twoLiveEdgeRounded', 'threeTableRoundedRight', 'threeTableRoundedLeft', 'fourLiveEdgeRounded', 'fiveTableRounded'],
					['twoTableBambuk', 'twoTableBambukCircle', 'twoTableBambukRounded', 'twoTable' , 'fourTable']
				]
			}
			else {
				var ArraySharpes = [
					//sharp
					['oneTable', 'twoTable', 'threeTableRight', 'threeTableLeft', 'fourTable', 'fiveTable'],
					//circle
					['oneTableCircle', 'twoTableCircle', 'threeTableCircleRight', 'threeTableCirlceLeft', 'fourTableCircle', 'fiveTableCircle'],
					//rounded
					['oneTableRounded', 'twoTableRounded', 'threeTableRoundedRight', 'threeTableRoundedLeft', 'fourTableRounded', 'fiveTableRounded'],
					['twoTableBambuk', 'twoTableBambukCircle', 'twoTableBambukRounded', 'twoLiveEdge', 'twoLiveEdgeCircle', 'twoLiveEdgeRounded', 'fourLiveEdge','fourLiveEdgeCircle','fourLiveEdgeRounded']
				]
			}

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
