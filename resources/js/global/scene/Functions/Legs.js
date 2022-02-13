import coords from '../../LegsCoordinates'
import store from '../../store';

export default class Legs {
	data = null;
	setDeskMaterial(textureName) {
		store.state.params.deskimage = textureName
		const { images } = Engine.textures.folders

		//galochka uchun
		for (const key in images) {
			var elem = images[key].find(element => {
				if (element.path === store.state.params.deskimage) {
					return store.state.params.activeFolder = key
				}
			});
			if (elem) {
				break
			}
		}

		let materialNames = ['oneTable', 'twoTable', 'threeTable', 'fourTable', 'fiveTable', 'fiveShkaf', 'tablesBevel','solidedge']
		materialNames.forEach(element => {
			let material = scene.getMaterialByName(element)

			if (element == 'tablesBevel' && store.state.params.activeFolder == 'desks/pyledge') {
				return material.albedoTexture = scene.getTextureByName('/textures/tores.jpg')
			}

			material.albedoTexture = scene.getTextureByName(textureName)
		});
		
		store.commit('setCorner', store.state.custom.corners)
	}

	async setLegType(legIndex) {
		
		if (store.state.params.legType == legIndex) return
		

		let legType = store.state.params.legType
		let activeFolder = store.state.params.activeFolder
		let deskMaterial = store.state.params.deskMaterial
		

		if (
				legType ==  2 && (activeFolder == 'desks/bamboo'     ||  deskMaterial == 'desks/bamboo')
			||  legType ==  2 && (activeFolder == 'desks/solidedge'  ||  deskMaterial == 'desks/solidedge')
			||  legType ==  4 && (activeFolder == 'desks/solidedge'  ||  deskMaterial == 'desks/solidedge')
			||  legIndex == 3 && (activeFolder == 'desks/pyledge'    ||  deskMaterial == 'desks/pyledge')
		) 
		{
			this.deskFolder('desks/laminate')
			this.setDeskMaterial('desks/laminate/cw115.jpg')
		}

		this.hideOrShowDecors(legIndex)
		this.setLeg(legIndex)

		if(this.data){
			await this.FilterFolders(legIndex) //papkalar korinadi
		}
	}

	setLeg(defaultLeg) {
		store.state.params.legType = defaultLeg
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
	}







































































	deskFolder(deskIndex){
		this.data.imagearr = null
		setTimeout(()=>{
			this.data.imagearr = this.data.folderImages[deskIndex]
			store.state.params.deskMaterial = deskIndex
		},100)
	}

	//Tugri ishlayabdi
	async FilterFolders(legtype){
		this.data.deskMaterials = []
		const {folders} = await store.dispatch('deskTextures')
		this.data.deskMaterials = folders
		const Arrays = [
			['desks/bamboo','desks/solidedge'],
			[],
			['desks/bamboo','desks/solidedge','desks/pyledge'],
			['desks/bamboo'],
			['desks/bamboo','desks/solidedge'],
		]

		Arrays[legtype - 1].forEach(folder => {
			var conut = null
			this.data.deskMaterials.find((texture,index) => {
				if(texture.path == folder){
					conut = index
				}
			}) 

			this.data.deskMaterials.splice(conut, 1);
		});
	}





	//hide to active decors
	DecorsHide(params) {
		var hide = new BABYLON.Vector3(0, 0, 0)

		//Agar bu mesh bor bolsa agar bo'lmasa uni iconcasi ciqmaydi yani this['node'] = true ishlamaydi
		Animate(params.node, 'scaling', VECTOR3, [{ frame: 0, value: params.node.scaling }, { frame: 10, value: hide }], () => {
			this.DecorsPosition({ node: params.node, position: params.position })
			this.DecorsShow(params.node)
		})

	}

	DecorsPosition(params) {
		params.node.position = params.position
	}

	DecorsShow(mesh) {
		var show = new BABYLON.Vector3(1, 1, 1)
		Animate(mesh, 'scaling', VECTOR3, [{ frame: 0, value: mesh.scaling }, { frame: 10, value: show }])
	}





	setLegColor(colorIndex) {
		if (store.state.params.legColor == colorIndex) return

		let colorArr = ['#D6D6D6', '#8B8B8B', '#222222']
		let LegsArr = ['oneLeg', 'twoLeg', 'fourLeg', 'fiveLeg', 'threeLegHelpLeft', 'threeLegHelpright', 'threeLegMainLeft', 'threeLegMainRight', 'tumb1']



		LegsArr.forEach(legName => {
			const mesh = scene.getNodeByName(legName) // materialni topamiz

			if (mesh._isMesh) {
				let albedoColor = BABYLON.Color3.FromHexString(colorArr[colorIndex - 1]).toLinearSpace() // rangni aniqlaymiz
				Animate(mesh, 'material.albedoColor', COLOR3, [{ frame: 0, value: mesh.material.albedoColor }, { frame: 15, value: albedoColor }]) // aniqlangan ranga
			}
			else {
				if (Array.isArray(mesh._children)) {
					mesh._children.forEach(element => {
						if (element._isMesh) {
							let albedoColor = BABYLON.Color3.FromHexString(colorArr[colorIndex - 1]).toLinearSpace() // rangni aniqlaymiz
							Animate(element, 'material.albedoColor', COLOR3, [{ frame: 0, value: element.material.albedoColor }, { frame: 15, value: albedoColor }]) // aniqlangan ranga
						}
					})
				}
			}

		})

		store.state.params.legColor = colorIndex
	}

	hideOrShowDecors(legIndex){
		let decornames = []
		for (const key in store.state.decor) {
			decornames.push(key)
		}

		decornames.forEach(Decors => {
			const mesh = scene.getNodeByName(Decors)
			const coordinate = coords[legIndex - 1][Decors]
			if (store.state.decor[Decors]) {
				this.DecorsPosition({ node: mesh, position: coordinate })
			}
			else {
				this.DecorsHide({ node: mesh, position: coordinate })
			}
		});
	}
}