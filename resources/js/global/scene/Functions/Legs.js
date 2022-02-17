import coords from '../../LegsCoordinates'




export default class Legs {
	data = null;
	leg = [
		new LegClass({ filter: ['desks/bamboo', 'desks/solidedge'] }),
		new LegClass({}),
		new LegClass({ filter: ['desks/bamboo', 'desks/solidedge', 'desks/pyledge'] }),
		new LegClass({ filter: ['desks/bamboo'] }),
		new LegClass({ filter: ['desks/bamboo', 'desks/solidedge'] }),
	]
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
			if (elem) break
		}

		this.setTextureType()

		let materialNames = ['oneTable', 'twoTable', 'threeTable', 'fourTable', 'fiveTable', 'fiveShkaf', 'tablesBevel', 'solidedge']


		materialNames.forEach(element => {
			let material = scene.getMaterialByName(element)

			if (element == 'tablesBevel' && store.state.params.activeFolder == 'desks/pyledge') {
				return material.albedoTexture = scene.getTextureByName('/textures/tores.jpg')
			}

			material.albedoTexture = scene.getTextureByName(textureName)
		});

	}

	async setLegType(legIndex) {

		if (store.state.params.legType == legIndex) return


		let legType = store.state.params.legType
		let activeFolder = store.state.params.activeFolder
		let deskMaterial = store.state.params.deskMaterial


		if (
			legType == 2 && (activeFolder == 'desks/bamboo' || deskMaterial == 'desks/bamboo')
			|| legType == 2 && (activeFolder == 'desks/solidedge' || deskMaterial == 'desks/solidedge')
			|| legType == 4 && (activeFolder == 'desks/solidedge' || deskMaterial == 'desks/solidedge')
			|| legIndex == 3 && (activeFolder == 'desks/pyledge' || deskMaterial == 'desks/pyledge')
		) {
			this.deskFolder('desks/laminate')
			this.setDeskMaterial('desks/laminate/cw115.jpg')
		}

		this.hideOrShowDecors(legIndex)
		this.setLeg(legIndex)

		if (this.data) {
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
	}




	deskFolder(deskIndex) {
		this.data.imagearr = null
		setTimeout(() => {
			this.data.imagearr = this.data.folderImages[deskIndex]
			store.state.params.deskMaterial = deskIndex
		}, 100)
	}

	//Tugri ishlayabdi
	async FilterFolders(legtype) {
		this.data.deskMaterials = []
		const { folders } = await store.dispatch('deskTextures')
		this.data.deskMaterials = folders
		const Arrays = [
			['desks/bamboo', 'desks/solidedge'],
			[],
			['desks/bamboo', 'desks/solidedge', 'desks/pyledge'],
			['desks/bamboo'],
			['desks/bamboo', 'desks/solidedge'],
		]

		Arrays[legtype - 1].forEach(folder => {
			var conut = null
			this.data.deskMaterials.find((texture, index) => {
				if (texture.path == folder) {
					conut = index
				}
			})

			this.data.deskMaterials.splice(conut, 1);
		});
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
			const coordinate = coords[legIndex - 1][Decors]
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
	}
}

class LegClass {
	constructor({ filter = [], tables = {} }) {
		this.filter = filter
		this.tables = tables
	}

}

class Table{
	constructor({name = null,textureType = null, corner = null}){
		this.name = name
		this.textureType = textureType
		this.corner = corner
	}
}
const oneTables = [
	new Table({name: 'oneTable', textureType: 1, corner: 1}),
	new Table({name: 'oneTableCircle', textureType: 1, corner: 1}),
	new Table({name: 'oneTableRounded', textureType: 1, corner: 1}),
	new Table({name: 'oneTableTrad', textureType: 2, corner: 1}),
	new Table({name: 'oneTableTrad', textureType: 2, corner: 2}),
	new Table({name: 'oneTableTrad', textureType: 2, corner: 3}),
]

console.log(oneTables);

'one table'
// 'oneTable' 1
// 'oneTableCircle' 1
// 'oneTableRounded' 1
// 'oneTableTrad' 2

'two table'
// 'twoTable' 1
// 'twoTableCircle' 1
// 'twoTableRounded' 1
// 'twoTableTrad' 2

// 'twoTableBambuk' 3
// 'twoTableBambukCircle' 3
// 'twoTableBambukRounded' 3

// 'twoTableGlass' 4
// 'twoTableCircleGlass' 4
// 'twoTableRoundedGlass' 4

// 'twoLiveEdge' 5

'three table'
// 'threeTableLeft' 1
// 'threeTableCircleeLeft' 1
// 'threeTableRoundedLeft' 1

// 'threeTableRight' 1
// 'threeTableCircleRight' 1
// 'threeTableRoundedRight' 1


'Four table'
// 'fourTable' 1
// 'fourTableCircle' 1
// 'fourTableRounded' 1
// 'fourTableTrad' 2
// 'fourLiveEdge' 5



'Five Table'
// 'fiveTable' 1
// 'fiveTableCircle' 1
// 'fiveTableRounded' 1
// 'fiveTableTrad' 2