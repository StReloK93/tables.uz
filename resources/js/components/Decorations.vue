<template>
    <aside class="p-6 text-gray-500">
        <div :class="{'bg-opacity-100': $store.state.decor.lamp}" class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="lamp" />
        </div>
        <div :class="{'bg-opacity-100': $store.state.decor.monitor}"  class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="monitor" />
        </div>
        <div @click="imageActivate" :class="{'bg-opacity-100 border border-blue-500': $store.state.decor.image}"  class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="image" />
        </div>
        <div :class="{'bg-opacity-100': $store.state.decor.chair}"  class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="chair" />
        </div>
        <div :class="{'bg-opacity-100': $store.state.decor.plant}"  class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="plant" />
        </div>
    </aside>
</template>
<script>
import Icons from './Icons.vue'
export default {
    components:{
        Icons
    },
    methods: {
        imageActivate(){
            const scene = Engine.scene.get()
            const image = scene.getNodeByName('image')
            if(this.$store.state.decor.image){
                var keys = {
                    start: new BABYLON.Vector3(1,1,1),
                    end: new BABYLON.Vector3(0,0,0),
                }
            }
            else{
                var keys = {
                    start: new BABYLON.Vector3(0,0,0),
                    end: new BABYLON.Vector3(1,1,1),
                }
            }
            this.animated('scaling', image, [{frame: 0,value: keys.start},{frame: 10,value: keys.end}])
            this.$store.state.decor.image = !this.$store.state.decor.image
        },
        animated(parametr,mesh,keysArr){
            const anim = new BABYLON.Animation(`${mesh.name + parametr}`, parametr, 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            anim.setKeys(keysArr)
            const animationGroup = new BABYLON.AnimationGroup(`${mesh.name + parametr}`);
            animationGroup.addTargetedAnimation(anim, mesh);
            animationGroup.play()
        },
    },
}
</script>