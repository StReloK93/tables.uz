<template>
    <aside class="p-6 text-gray-500">
        <div v-if="lamp" @click="toggleNode('lamp')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.lamp}" 
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="lamp" />
        </div>
        <div v-if="monitor" @click="toggleNode('monitor')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.monitor}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="monitor" />
        </div>
        <div v-if="image" @click="toggleNode('image')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.image}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="image" />
        </div>
        <div v-if="chair" @click="toggleNode('chair')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.chair}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="chair" />
        </div>
        <div v-if="plant" @click="toggleNode('plant')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.plant}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="plant" />
        </div>
        <div @click="information = !information" class="text-center pt-2 px-1 xl:w-24 md:w-20 relative">
            <img src="/images/information.png" class="gray w-14 inline cursor-pointer">
            <transition name="fade">
            <main v-if="information" class="after absolute bottom-0 left-full p-4 mx-4 bg-white text-gray-600 w-96 border-l-2 border-blue-500">
                <span class="font-bold text-gray-700">Disclaimer:</span> The colors and graphics used in the Customizer are computer 
                generated and hence we hold no responsibility of the accuracy of the color 
                and material difference that may occur when compared to the real items.
                If you have any concerns regarding the accuracy of colors or materials
                used here please feel free to contact us directly for more details.
                Terms and conditions: All content shown is a digital property of 
                Blueocean International (HK) Ltd., any unauthorized use or copy of our 
                content will be considered infringement of our intellectual property.
            </main>
            </transition>
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
            information: false
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
<style>
.gray:hover{
    filter: grayscale(0.8);
}
.after:after{
    content: "";
    position: absolute;
    bottom: 10px;
    right: 100%;
    border: 20px solid transparent; border-right: 20px solid #3b82f6;
}
</style>