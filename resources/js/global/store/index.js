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
			decor: {
				lamp: false,
				monitor: false,
				image: true,
				chair: false,
				plant: true,
				tumbochka: false,
			},
			params: {
				//legs
				legColor: 1,
				legType: 0,
				deskimage: 'desks/laminate/cw115.jpg',


				deskMaterial: 'desks/laminate',
				activeFolder: 'desks/laminate'
			},
			room:{
				//room
				wallColor: '#CFCFCF',
				floor: null,
			},
			sizepage: {
				size: 0,
				lenght: null,
				width: null,
				thickness: null,
			},
			otherpage: {
				tablesCount: 1,
				service: false,
				needchair: false,
				height: null,
				length: null,
				message: null
			},
			custom: {
				corners: 1,
				grommet: null,
				partition: null,
				accessories: null,
				chair: null,
			},
			legTypes: [
				{ img: '/images/1leg.png', name: '1 legs' },
				{ img: '/images/2leg.png', name: '2 legs' },
				{ img: '/images/3leg.png', name: '3 legs' },
				{ img: '/images/4leg.png', name: '4 legs' },
				{ img: '/images/5leg.png', name: 'Side cabinet' },
			],
			accessories: [
				{image: '/images/access/Keyboard Tray 1.jpg' , name:'Keyboard tray'},
				{image: '/images/access/magnetic tubes.jpg' , name:'Magnetic tubes'},
				{image: '/images/access/Dual Monitor Arm.jpg' , name:'Dual Monitor Arm'},
				{image: '/images/access/Single Monitor Arm.jpg' , name:'Single Monitor Arm'},
				{image: '/images/access/Mobile Caddy.jpg' , name:'Mobile Caddy'},
				{image: '/images/access/Regular Mobile Pedestal.jpg' , name:'Regular Mobile Pedestal'},
				{image: '/images/access/Add-on drawers.jpg' , name:'Add-on drawers'},
				{image: '/images/access/Anti Fatigue Mat.jpg' , name:'Anti Fatigue Mat'},
				{image: '/images/access/Balance Board.jpg' , name:'Balance Board'},
				{image: '/images/access/Casters.jpg' , name:'Casters'},
				{image: '/images/access/Clamp on socket.jpg' , name:'Clamp on socket'},
				{image: '/images/access/CPU Holder.jpg' , name:'CPU Holder'},
				{image: '/images/access/Dual Level.jpg' , name:'Dual Level'},
				{image: '/images/access/Mini Mobile Pedestal.jpg' , name:'Mini Mobile Pedestal'},
				{image: '/images/access/Premium Cable Tray.jpg' , name:'Premium Cable Tray'},
				{image: '/images/access/Regular cable tray.jpg' , name:'Regular cable tray'},
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
			if (pay < 1 && (state.otherpage.tablesCount > 1)) {
				state.otherpage.tablesCount += pay
			}
			else if (pay > -1) {
				state.otherpage.tablesCount += pay
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
	},
	actions: {
		async sendEmail({state},payload){
			const formData = {
				params: state.params,
				sizepage: state.sizepage,
				room: state.room,
				otherpage: state.otherpage,
				custom: state.custom,
				params: state.params,
				finished: payload
			}
			let { data } = await axios.post('/api/send-email', formData)
			return data
		},

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
