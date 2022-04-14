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
			textureType: 1,
			decor: {
				lamp: false,
				monitor: false,
				image: true,
				chair: false,
				plant: true,
				tumbochka: true,
			},
			params: {
				//legs
				legColor: null,
				legType: null,
				deskimage: 'desks/laminate/cw115.jpg',

				deskMaterial: 'desks/laminate',
				activeFolder: 'desks/laminate'
			},
			room: {
				//room
				wallColor: '#CFCFCF',
				floor: null,
			},
			sizepage: {
				size: 0,
				lenght: null,
				width: null,
			},
			otherpage: {
				tablesCount: 1,
				service: false,
				needchair: false,
				height: null,
				upperlength: null,
				lowerlength: null,
				message: null
			},
			custom: {
				corners: 1,
				grommet: null,
				partition: null,
				chair: null,
			},
			legTypes: [
				{ img: '/images/1leg.png', name: '1 leg' },
				{ img: '/images/2leg.png', name: '2 legs' },
				{ img: '/images/3leg.png', name: '3 legs' },
				{ img: '/images/4leg.png', name: '4 legs' },
				{ img: '/images/5leg.png', name: 'Side cabinet' },
			],
			accessories: [
			{ image: '/images/access/Keyboard Tray 1.jpg',        	price : '$850',  name: 'Keyboard tray',     	    active: false },
			{ image: '/images/access/magnetic tubes.jpg',         	price : '$150',  name: 'Magnetic tubes',      	active: false },
			{ image: '/images/access/Dual Monitor Arm.jpg',       	price : '$2650',  name: 'Dual Monitor Arm',        active: false },
			{ image: '/images/access/Single Monitor Arm.jpg',     	price : '$1500',  name: 'Single Monitor Arm',      active: false },
			{ image: '/images/access/Mobile Caddy.jpg',           	price : '$3200',  name: 'Mobile Caddy',            active: false },
			{ image: '/images/access/Regular Mobile Pedestal.jpg',	price : '$1600',  name: 'Regular Mobile Pedestal', active: false },
			{ image: '/images/access/Add-on drawers.jpg',         	price : '$850',  name: 'Add-on drawers', 			active: false },
			{ image: '/images/access/Anti Fatigue Mat.jpg',       	price : '$499',  name: 'Anti Fatigue Mat', 		active: false },
			{ image: '/images/access/Balance Board.jpg', 		   	price : '$650',  name: 'Balance Board', 			active: false },
			{ image: '/images/access/Casters.jpg', 				   	price : '$300',  name: 'Casters', 				active: false },
			{ image: '/images/access/Clamp on socket.jpg', 		   	price : '$550',  name: 'Clamp on socket', 		active: false },
			{ image: '/images/access/CPU Holder.jpg', 			   	price : '$390',  name: 'CPU Holder', 				active: false },
			{ image: '/images/access/Dual Level.jpg', 			   	price : '$1400',  name: 'Dual Level', 				active: false },
			{ image: '/images/access/Mini Mobile Pedestal.jpg',		price : '$1300',  name: 'Mini Mobile Pedestal', 	active: false },
			{ image: '/images/access/Premium Cable Tray.jpg', 	   	price : '$650',  name: 'Premium Cable Tray', 		active: false },
			{ image: '/images/access/Regular cable tray.jpg', 	   	price : '$330',  name: 'Regular cable tray', 		active: false },
			],
			chairs: [
				[
					{name: 'Emery Chair' , 		price: '$3100',   path: '/images/easy/Emery Chair.jpg' , link: "https://ergoseatings.com.hk/product/emery-ergonomic-chair/"},
					{name: 'Ricks Chair' , 		price: '$2450',	path: '/images/easy/Ricks Chair.png', link: "https://ergoseatings.com.hk/product/ricks-office-chair/"},
					{name: 'Vision Chair' , 	price: '$3249',	path: '/images/easy/Vision Chair.png', link: "https://ergoseatings.com.hk/product/vision-full-mesh-chair/"},
			  	],
			  	[
					{name: 'Bestuhl S10' , 		price: '$3750',	path: '/images/normal/Bestuhl S10.jpg', link: "https://ergoseatings.com.hk/product/bestuhl-s10-ergo-chair/"},
					{name: 'Bestuhl S15' , 		price: '$3900',	path: '/images/normal/Bestuhl S15.jpg', link: "https://ergoseatings.com.hk/product/bestuhl-s15-full-mesh-chair/"},
					{name: 'Duorest D2' , 		price: '$4900',	path: '/images/normal/Duorest D2.jpg', link: "https://ergoseatings.com.hk/product/duorest-2-0-ergonomic-chair/"},
					{name: 'MO Chair' , 			price: '$4250',	path: '/images/normal/MO Chair.jpg', link: "https://ergoseatings.com.hk/product/mo-high-back-full-mesh-chair/"},
			  	],
				[
					{name: 'Allseating You Too' , price: '$6199', path: '/images/hard/Allseating You Too.jpg', link: "https://ergoseatings.com.hk/product/allseating-you-too-ergonomic-chair/"},
					{name: 'Lives High Back' , 	price: '$7400', path: '/images/hard/Lives High Back.jpg', link: "https://ergoseatings.com.hk/product/okamura-lives-work-chair-high-back/"},
					{name: 'Okamura Slyphy' , 		price: '$9050', path: '/images/hard/Okamura Slyphy.jpg', link: "https://ergoseatings.com.hk/product/okamura-sylphy-ergonomic-chair/"},
				],
				[
					{name: 'Contessa Foam Seat' , price: '$12650', path: '/images/hardest/Okamura Contessa Foam Seat.jpg', link: "https://ergoseatings.com.hk/product/okamura-contessa-ii-mesh-back-with-foam-seat/"},
					{name: 'Contessa Mesh' , 		 price: '$12650',	path: '/images/hardest/Okamura Contessa Mesh.jpg', link: "https://ergoseatings.com.hk/product/okamura-contessa-ii-ergonomic-chair-full-mesh-version/"},
					{name: 'Wagner Alumedic' , 	 price: '$10700',	path: '/images/hardest/Wagner Alumedic.jpg', link: "https://ergoseatings.com.hk/product/wagner-alumedic-10/"},
				],
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
			if(state.otherpage.tablesCount < 10){
				state.otherpage.service = false
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
		async sendEmail({ state }, payload) {
			const actives = state.accessories.filter(item => item.active == true)

			const formData = {
				params: {
					legColor: state.params.legColor,
					legType: state.params.legType,
					deskimage: state.params.deskimage,
				},
				sizepage: {
					lenght: state.sizepage.lenght,
					width: state.sizepage.width,
				},
				room: state.room,
				otherpage: state.otherpage,
				custom: state.custom,
				accessories: actives,
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
