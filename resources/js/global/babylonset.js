window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


import * as BABYLON from '@babylonjs/core';
import { SkyMaterial } from '@babylonjs/materials/sky';
import "@babylonjs/loaders/glTF";


window.BABYLON = BABYLON;
window.BABYLON.SkyMaterial = SkyMaterial;
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
window.CONSTANT = BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
//hide to active decors
window.editPosition = function (params) {
	const mesh = params.node
	const position = params.position
	const rotation = params.rotation
	const hide = new BABYLON.Vector3(0, 0, 0)
	const show = new BABYLON.Vector3(1, 1, 1)

	Animate(mesh, 'scaling', VECTOR3, [{ frame: 0, value: mesh.scaling }, { frame: 10, value: hide }], () => {
		mesh.position = position
		mesh.rotation = new BABYLON.Vector3(0,rotation,0);
		Animate(mesh, 'scaling', VECTOR3, [{ frame: 0, value: mesh.scaling }, { frame: 10, value: show }])
	})
}