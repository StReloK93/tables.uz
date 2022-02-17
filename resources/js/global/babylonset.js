window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders/glTF";
window.BABYLON = BABYLON;

window.Animate = function (mesh, parametr, property, keysArr, callback = () => { }) {
	const animation = new BABYLON.Animation(mesh.name + parametr, parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
	animation.setKeys(keysArr)

	mesh.animations.push(animation);

	scene.beginAnimation(mesh, 0, 60, false, 1.0, () => {
		callback()
	});
}

window.COLOR3 = BABYLON.Animation.ANIMATIONTYPE_COLOR3
window.FLOAT = BABYLON.Animation.ANIMATIONTYPE_FLOAT
window.VECTOR3 = BABYLON.Animation.ANIMATIONTYPE_VECTOR3


//hide to active decors
window.editPosition = function (params) {
	const mesh = params.node
	const position = params.position
	const hide = new BABYLON.Vector3(0, 0, 0)
	const show = new BABYLON.Vector3(1, 1, 1)

	//Agar bu mesh bor bolsa agar bo'lmasa uni iconcasi ciqmaydi yani this['node'] = true ishlamaydi
	Animate(mesh, 'scaling', VECTOR3, [{ frame: 0, value: mesh.scaling }, { frame: 10, value: hide }], () => {
		mesh.position = position
		Animate(mesh, 'scaling', VECTOR3, [{ frame: 0, value: mesh.scaling }, { frame: 10, value: show }])
	})
}















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