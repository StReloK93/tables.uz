export default class Size {
	setSize(sizeIndex) {
		const from = 0
		const to = 1
		if (store.state.params.size == sizeIndex) return
		let animNames = [
			//two Table
			'controllerTwoAction', 'twoLegLeftAction', 'twoLegRightAction', 'twoTableAction', 'twoTableCircleAction', 'twoTableRoundedAction',
			//Four Table Actions
			'controllerFourAction', 'fourLegLeftAction', 'fourLegRightAction', 'fourTableAction', 'fourTableCircleAction', 'fourTableRoundedAction',

			//threeTable Actions
			'controllerThreeAction', 'threeLegHelpAction' , 'threeLegHelprightAction' , 'threeLegMainAction', 'threeLegMainLeftAction',
			'threeTableCircleRightAction', 'threeTableCirlceLeftAction', 'threeTableLeftAction',
			'threeTableRightAction', 'threeTableRoundedLeftAction', 'threeTableRoundedRightAction'

		]


		if (sizeIndex) {
			animNames.forEach(element => {
				let animation = scene.getAnimationGroupByName(element)
				animation.stop()
				animation.start(false, 1.0, from, to, true)
			});
		}
		else {
			animNames.forEach(element => {
				let animation = scene.getAnimationGroupByName(element)
				animation.stop()
				animation.start(false, 1.0, to, from, true)
			});
		}

		store.state.params.size = sizeIndex
	}
}