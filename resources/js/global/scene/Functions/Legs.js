import coords from '../../LegsCoordinates'

export default class Legs {
	setDeskMaterial(textureName) {
		let materialNames = ['oneTable', 'twoTable', 'threeTable', 'fourTable', 'fiveTable', 'fiveShkaf']
		materialNames.forEach(element => {
			let material = scene.getMaterialByName(element)
			material.albedoTexture = scene.getTextureByName(textureName)
		});

		store.state.params.deskimage = textureName

		const { images } = Engine.textures.folders
		for (const key in images) {
			var elem = images[key].find(element => {
				if (element === store.state.params.deskimage) {
					return store.state.params.activeFolder = key
				}
			});
			if (elem) {
				break
			}
		}
	}

	setLegType(legIndex) {
		if (store.state.params.legType == legIndex) return;

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

		this.setLeg(legIndex)
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
		let LegsArr = ['oneLeg', 'twoLeg', 'fourLeg', 'fiveLeg', 'threeLegLeft', 'threeLegRight', 'tumb1']

		LegsArr.forEach(legName => {
			const mesh = scene.getNodeByName(legName) // materialni topamiz
			let albedoColor = BABYLON.Color3.FromHexString(colorArr[colorIndex - 1]).toLinearSpace() // rangni aniqlaymiz
			Animate(mesh, 'material.albedoColor', COLOR3, [{ frame: 0, value: mesh.material.albedoColor }, { frame: 15, value: albedoColor }]) // aniqlangan ranga
		})

		store.state.params.legColor = colorIndex
	}
}