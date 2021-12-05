<template>
    <aside class="p-6 text-gray-500">
        <div v-if="lamp" @click="toggleNode('lamp')" :class="{'bg-opacity-100 border border-myblue': $store.state.decor.lamp}" 
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer hover:bg-opacity-75">
            <Icons icon="lamp" />
        </div>
        <div v-if="monitor"  @click="toggleNode('monitor')" :class="{'bg-opacity-100 border border-myblue': $store.state.decor.monitor}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer hover:bg-opacity-75">
            <Icons icon="monitor" />
        </div>
        <div v-if="image"  @click="toggleNode('image')" :class="{'bg-opacity-100 border border-myblue': $store.state.decor.image}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer hover:bg-opacity-75">
            <Icons icon="image" />
        </div>
        <div v-if="chair"  @click="toggleNode('chair')" :class="{'bg-opacity-100 border border-myblue': $store.state.decor.chair}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer hover:bg-opacity-75">
            <Icons icon="chair" />
        </div>
        <div v-if="plant"  @click="toggleNode('plant')" :class="{'bg-opacity-100 border border-myblue': $store.state.decor.plant}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer hover:bg-opacity-75">
            <Icons icon="plant" />
        </div>
    </aside>
</template>
<script>
import Icons from './Icons.vue'
export default {
    data(){
        return {
            lamp: false,
            monitor: false,
            image: false,
            chair: false,
            plant: false,
        }
    },
    components:{
        Icons
    },
    mounted() {
        this.toggleNode('lamp')
        this.toggleNode('monitor')
        this.toggleNode('image')
        this.toggleNode('chair')
        this.toggleNode('plant')
    },
    methods: {
        toggleNode(node){
            var show = new BABYLON.Vector3(1,1,1)
            var hide = new BABYLON.Vector3(0,0,0)
            var scene = Engine.scene.get()
            const lamp = scene.getNodeByName(node)
            if(lamp){
                this[node] = true
                if(store.state.decor[node]) this.animated('scaling', lamp, [{frame: 0,value: show},{frame: 5,value: hide}])
                else this.animated('scaling', lamp, [{frame: 0,value: hide},{frame: 5,value: show}])
                store.state.decor[node] = !store.state.decor[node]    
            }
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