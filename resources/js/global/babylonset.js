window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders/glTF";
window.BABYLON = BABYLON;

window.Animate = function (mesh, parametr, property, keysArr, callback = () => { }) {
	const animation = new BABYLON.Animation(mesh.name + parametr, parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
	animation.setKeys(keysArr)

	mesh.animations.push(animation);

	scene.beginAnimation(mesh, 0, 60, false, 1.0, ()=>{
		callback()
	});
}

window.COLOR3 = BABYLON.Animation.ANIMATIONTYPE_COLOR3
window.FLOAT = BABYLON.Animation.ANIMATIONTYPE_FLOAT
window.VECTOR3 = BABYLON.Animation.ANIMATIONTYPE_VECTOR3


















	// const animis = scene.getAnimationGroupByName(animName)
	// if (animis) {
	// 	animis.play()
	// 	animis.onAnimationEndObservable.add(function () {
	// 		callback()
	// 	})
	// }
	// else {

		// const animationGroup = new BABYLON.AnimationGroup(animName);
		// animationGroup.addTargetedAnimation(anim, mesh);
		// animationGroup.play()
		// animationGroup.onAnimationEndObservable.add(() => {callback()})


	// }