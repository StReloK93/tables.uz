<template>
    <aside class="absolute top-0 left-0 p-4 text-center text-gray-500">
        <button  class="bg-gray-100 mb-3 px-3 py-2 inline-block rounded-full shadow">
            <img src="/images/left.png" class="relative" style="left: -1px">
        </button>
        <div v-if="lamp" @click="toggleNode('lamp')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.lamp}" 
            class="flex items-center justify-center py-3 px-2 bg-white rounded-lg bg-opacity-50 mb-2 w-12 h-12 sm:w-16 sm:h-16 cursor-pointer hover:bg-opacity-75">
            <Icons icon="lamp" />
        </div>
        <div v-if="monitor" @click="toggleNode('monitor')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.monitor}"  
            class="flex items-center justify-center py-3 px-3 bg-white rounded-lg bg-opacity-50 mb-2 w-12 h-12 sm:w-16 sm:h-16 cursor-pointer hover:bg-opacity-75">
            <Icons icon="monitor" />
        </div>
        <div v-if="image" @click="toggleNode('image')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.image}"  
            class="flex items-center justify-center py-3 px-3 bg-white rounded-lg bg-opacity-50 mb-2 w-12 h-12 sm:w-16 sm:h-16 cursor-pointer hover:bg-opacity-75">
            <Icons icon="image" />
        </div>
        <div v-if="chair" @click="toggleNode('chair')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.chair}"  
            class="flex items-center justify-center py-3 px-2 bg-white rounded-lg bg-opacity-50 mb-2 w-12 h-12 sm:w-16 sm:h-16 cursor-pointer hover:bg-opacity-75">
            <Icons icon="chair" />
        </div>
        <div v-if="plant" @click="toggleNode('plant')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.plant}"  
            class="flex items-center justify-center py-3 px-2 bg-white rounded-lg bg-opacity-50 mb-2 w-12 h-12 sm:w-16 sm:h-16 cursor-pointer hover:bg-opacity-75">
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
            //soralgan meshni topamiz
            const mesh = scene.getNodeByName(node)

            //Agar bu mesh bor bolsa agar bo'lmasa uni iconcasi ciqmaydi yani this['node'] = true ishlamaydi
            if(mesh){
                //this[node] Agar mesh mavjud bo'lmasa iconkasi ciqmasligi ucun :: bu yerda true berganimizda uni iconcasi chiqadi ekranga
                this[node] = true

                //storedan tekshiradi
                if(store.state.decor[node]) 
                    //Store da true bo'lsa ko'rinadi                
                    Animate(mesh,'scaling', VECTOR3, [{frame: 0,value: hide},{frame: 5,value: show}])
                else
                    //Store da false bo'lsa yawiradi
                    Animate(mesh,'scaling', VECTOR3, [{frame: 0,value: show},{frame: 5,value: hide}])
                //Style ni uzgartiramiz Bor :: Yoq
                store.state.decor[node] = !store.state.decor[node]
            }
        },
    },
}
</script>