export default class Size {
	setSize(sizeIndex) {
		const from = 0
		const to = 1
		if (store.state.sizepage.size == sizeIndex) return
		
		if (sizeIndex) {
			scene.animationGroups.forEach(element => {
				element.stop()
				element.start(false, 1.0, from, to, true)
			});
		}
		else {
			scene.animationGroups.forEach(element => {
				element.stop()
				element.start(false, 1.0, to, from, true)
			});
		}

		store.state.sizepage.size = sizeIndex
	}
}