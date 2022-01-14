<template>
    <section>
        <main>
            <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">
                Available legs
            </h3>
            <div class="flex text-center justify-between -mr-2">
                <aside v-for="(legs , index) in $store.state.legTypes" :key="index" @click="setLegType(index + 1)" class="w-1/5 pr-2 cursor-pointer">
					<section  :class="{'border-myblue': $store.state.params.legType == index + 1}" class="p-2 pt-1 overflow-hidden rounded-xl border bg-white">
						<main class="xl:h-28 md:h-24 flex items-center justify-center">
							<img :src="legs.img" class="w-10/12">
						</main>
						<div class="xl:text-sm md:text-xs">
							{{legs.name}}
						</div>
					</section>
                </aside>
            </div>
            <!-- new -->
            <h3 class="font-bold mb-1 xl:text-xl md:text-md xl:mt-6 md:mt-4 text-gray-600">
                Standing desk material
            </h3>
            <Caruosel v-if="deskMaterials" :itemCount="4" class="text-md text-center text-gray-600">
                <main v-for="materials in deskMaterials" :key="materials" class="w-1/4 inline-block align-middle px-2 relative">
                    <img v-if="$store.state.params.activeFolder == materials.path" src="/images/true.png" class="w-4 -m-1 -mt-2 absolute top-0 right-0 z-20">
                    <button @click="deskFolder(materials.path)" :class="{'bg-my text-white': $store.state.params.deskMaterial == materials.path}" v-html="materials.text" class="xl:h-16 md:h-14 xl:text-sm md:text-xs w-full rounded-xl border"></button>
                </main>
            </Caruosel>
            <transition name="fade" mode="in-out">
                <div v-if="imagearr" class="flex flex-wrap -mr-2 md:mt-2">
                    <aside class="w-1/5 pr-2" v-for="(img,index) in imagearr" :key="index">
                        <main :title="index" @click="setDeskImage(img)" class="mb-6 xl:h-24 md:h-20 cursor-pointer">
                            <img :class="{'shadow-blue': $store.state.params.deskimage == img}" :src="`/floors/${img}`" :title="img" class="border-2 border-white rounded-md object-cover w-full h-full">
                        </main>
                    </aside>
                </div>
            </transition>
        </main>
        <main class="xl:pb-8 md:pb-4">
            <h3 class="font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600">
                Choose the leg color
            </h3>
            <div class="flex flex-wrap -mr-2">
                <aside v-for="n in 3" :key="n" class="w-1/5 pr-2">
                    <main @click="setLegColor(n)" class="xl:h-24 md:h-20">
                        <div v-if="n == 1" :class="{'shadow-blue border-2 border-white': $store.state.params.legColor == n}" class="w-full h-full bg-white border border-gray rounded-md"></div>
                        <div v-if="n == 2" :class="{'shadow-blue': $store.state.params.legColor == n}" class="w-full h-full bg-gray-400 border-2 border-white rounded-md"></div>
                        <div v-if="n == 3" :class="{'shadow-blue': $store.state.params.legColor == n}" class="w-full h-full bg-black border-2 border-white rounded-md"></div>
                    </main>
                </aside>
            </div>
        </main>
    </section>
</template>
<script>
import Caruosel from '../components/Carusel.vue'
import coords from '../../global/LegsCoordinates'
export default {
    data() {
        return {
            imagearr: null,
            folderImages: null,
            deskMaterials: null,
        }
    },
    mounted() {
        scene.onReadyObservable.add(()=>{
            this.setLegColor(1)
            let desks = Engine.textures.folders
            this.deskMaterials = desks.folders
            this.folderImages = desks.images
            this.imagearr = this.folderImages[store.state.params.deskMaterial]
        })
    },
    methods: {
        setDeskImage(img){
            store.commit('setDeskMaterial', img)
            const {images} = Engine.textures.folders
            for (const key in images) {
                var elem = images[key].find(element => {
                    if(element === store.state.params.deskimage){
                        return store.state.params.activeFolder = key
                    }
                });
                if(elem){
                    break
                }
            }
        },
        setLegColor(colorIndex){
            let colorArr = ['#D6D6D6','#8B8B8B','#222222']
            let LegsArr = ['oneLeg', 'twoLeg', 'fourLeg', 'fiveLeg','threeLegLeft', 'threeLegRight', 'tumbochka'] 

            LegsArr.forEach(legName => {
                const leg = scene.getMaterialByName(legName)
                let albedoColor = BABYLON.Color3.FromHexString(colorArr[colorIndex - 1]).toLinearSpace()
                //Animate(target,ParamterToEdit,Property, Keyframes, CallbackEndAnimation no required)
                Animate(leg, 'albedoColor',COLOR3, [{frame: 0,value: leg.albedoColor},{frame: 15,value: albedoColor}])
            });
            store.state.params.legColor = colorIndex
        },
        //< ------------ main -- //

        setLegType(legIndex){
            if(store.state.params.legType == legIndex) return
            
            let activeDecors = this.getDecors()
            activeDecors.forEach(Decors => {
                if(store.state.decor[Decors]){
                    this.DecorsPosition(Decors, coords[legIndex-1][Decors])
                }
                else{
                    this.DecorsHide(Decors, coords[legIndex-1][Decors])
                }
            });
            store.commit('setLegType', legIndex)
        },

        deskFolder(deskIndex){
            this.imagearr = null
            setTimeout(()=>{
                this.imagearr = this.folderImages[deskIndex]
                store.state.params.deskMaterial = deskIndex
            },100)
        },

        //poisk active decors
        getDecors(){
            var decors = store.state.decor
            let arrayWithActiveDecors = []
            for (const key in decors) {
                arrayWithActiveDecors.push(key)
            }
            return arrayWithActiveDecors
        },
        //hide to active decors
        DecorsHide(node,coords){
            var hide = new BABYLON.Vector3(0,0,0)
            //soralgan meshni topamiz
            const mesh = scene.getNodeByName(node)
            //Agar bu mesh bor bolsa agar bo'lmasa uni iconcasi ciqmaydi yani this['node'] = true ishlamaydi
            Animate(mesh,'scaling', VECTOR3, [{frame: 0,value: mesh.scaling},{frame: 10,value: hide}],()=>{
                this.DecorsPosition(node, coords,()=>{
                    this.DecorsShow(mesh)
                })
            })
        },
        DecorsPosition(node, position, callback = ()=>{}){
            const mesh = scene.getNodeByName(node)
            Animate(mesh,'position', VECTOR3, [{frame: 0,value: mesh.position},{frame: 1,value: position}],callback())
        },
        DecorsShow(mesh){
            var show = new BABYLON.Vector3(1,1,1)
            Animate(mesh,'scaling', VECTOR3, [{frame: 0,value: mesh.scaling},{frame: 10,value: show}])
        },
    },
    components:{
        Caruosel
    }
}
</script>