window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders/glTF";
window.BABYLON = BABYLON;

window.Animate = function (mesh,parametr,property,keysArr,callback = ()=>{}){
    const anim = new BABYLON.Animation(`${mesh.name + parametr}`, parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
    anim.setKeys(keysArr)
    const animationGroup = new BABYLON.AnimationGroup(`${mesh.name + parametr}`);
    animationGroup.addTargetedAnimation(anim, mesh);
    animationGroup.play()
    animationGroup.onAnimationEndObservable.add(function(){
        callback()
    })
}

window.COLOR3 = BABYLON.Animation.ANIMATIONTYPE_COLOR3
window.FLOAT = BABYLON.Animation.ANIMATIONTYPE_FLOAT
window.VECTOR3 = BABYLON.Animation.ANIMATIONTYPE_VECTOR3
