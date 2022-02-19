import coords from '../../LegsCoordinates'
import LegSet from '../../LegsSettings'

export default class Legs {
	data = null;
	textures = store.dispatch('deskTextures')

	setDeskMaterial(texture) {
		store.state.params.deskimage = texture
		this.setActiveFolder() // Galochka qoyadi active papka storega yozadi
		this.setCorner(store.state.custom.corners) //Materialga mos table


		//import qilamiz
		LegSet.materials.forEach(element => {
			let material = scene.getMaterialByName(element)

			if (element == 'tablesBevel' && store.state.params.activeFolder == 'desks/pyledge') {
				return material.albedoTexture = scene.getTextureByName('/textures/tores.jpg')
			}

			material.albedoTexture = scene.getTextureByName(texture)
		});

	}

	setCorner(cornerIndex) {
		store.state.custom.corners = cornerIndex
		const legType = store.state.params.legType

		const textureType = this.setTextureType() // textura qaysi tipligini belgilayte storega yozadi

		const tablesList = LegSet.corners[legType] // Shu legga tegishli tablitsalar

		tablesList.forEach(table => {
			var activeTable = null
			const mesh = scene.getNodeByName(table.name)
			if (table.textureType == textureType && (table.corner == cornerIndex || table.corner == 'all')) {
				mesh.setEnabled(true)
			}
			else {
				if (activeTable != table.name) mesh.setEnabled(false)
			}
		});
	}

	setActiveFolder() {
		const { images } = Engine.textures.folders

		//galochka uchun
		for (const key in images) {
			var elem = images[key].find(element => {
				if (element.path === store.state.params.deskimage) {
					return store.state.params.activeFolder = key
				}
			});
			if (elem) break
		}
		return store.state.params.activeFolder
	}

	setLegType(legIndex) {
		if (store.state.params.legType == legIndex) return
		store.state.params.legType = legIndex

		const conFolder = LegSet.filter[legIndex].includes(store.state.params.activeFolder)
		const conMaterial = LegSet.filter[legIndex].includes(store.state.params.deskMaterial)
		if (conMaterial) this.deskFolder('desks/laminate')

		if (conFolder) this.setDeskMaterial('desks/laminate/cw115.jpg')
		else this.setDeskMaterial(store.state.params.deskimage)


		this.hideOrShowDecors(legIndex)

		//Tanlangan Stolni paydo qiladi qolganlarini yashiradi
		LegSet.parents.forEach((leg, index) => {
			const parent = scene.getNodeByName(leg)

			if (legIndex == index) Animate(parent, 'scaling', VECTOR3, [{ frame: 0, value: new BABYLON.Vector3(0, 0, 0) }, { frame: 15, value: new BABYLON.Vector3(1, 1, 1) }])
			else Animate(parent, 'scaling', VECTOR3, [{ frame: 0, value: parent.scaling }, { frame: 15, value: new BABYLON.Vector3(0, 0, 0) }])
		});

		if (this.data) {
			this.FilterFolders(legIndex) //papkalar korinadi
		}
	}

	deskFolder(deskIndex) {
		this.data.imagearr = null
		setTimeout(() => {
			this.data.imagearr = this.data.folderImages[deskIndex]
			store.state.params.deskMaterial = deskIndex
		}, 100)
	}

	//Tugri ishlayabdi
	FilterFolders(legtype) {
		this.data.deskMaterials = []
		const { folders } = Engine.textures.folders

		setTimeout(() => {
			this.data.deskMaterials = [...folders]

			LegSet.filter[legtype].forEach(folder => {
				var conut = null
				this.data.deskMaterials.find((texture, index) => {
					if (texture.path == folder) conut = index
				})

				this.data.deskMaterials.splice(conut, 1);
			});
		}, 50);
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

	hideOrShowDecors(legIndex) {
		let decornames = []
		for (const key in store.state.decor) {
			decornames.push(key)
		}

		decornames.forEach(Decors => {
			const mesh = scene.getNodeByName(Decors)
			const coordinate = coords[legIndex][Decors]
			if (store.state.decor[Decors]) {
				mesh.position = coordinate
			}
			else {
				editPosition({ node: mesh, position: coordinate })
			}
		});
	}

	setTextureType() {
		switch (store.state.params.activeFolder) {
			case 'desks/laminate':
			case 'desks/melamine':
			case 'desks/pyledge':
			case 'desks/veneer':
				store.state.textureType = 1
				break
			case 'desks/solidtraditional':
				store.state.textureType = 2
				break
			case 'desks/bamboo':
				store.state.textureType = 3
				break
			case 'desks/melamineglass':
				store.state.textureType = 4
				break
			case 'desks/solidedge':
				store.state.textureType = 5
				break
			default: console.log('xatolik')
		}

		return store.state.textureType
	}
}