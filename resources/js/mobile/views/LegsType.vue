<template>
    <section>
        <transition name="fade" mode="out-in">
            <main v-show="$store.state.currentPage == 1" class="miniRoutes">
                <h3 class="color-title text-center font-medium mb-1 text-gray-600">
                    Available legs
                </h3>
                <div class="text-center whitespace-nowrap py-1 overflow-hidden overflow-x-scroll noscroll -mr-2">
                    <aside v-for="(legs , index) in $store.state.legTypes" :key="index" @click="setLegType(index + 1)" class="w-custom inline-block mr-2">
                        <section  :class="{'border-myblue': $store.state.params.legType == index + 1}" class="py-2 rounded-md border border-transparent">
                            <main class="h-20 flex items-center justify-center">
                                <img :src="legs.img" class="w-9/12">
                            </main>
                            <div class="text-sm">
                                {{legs.name}}
                            </div>
                        </section>
                    </aside>
                </div>
            </main>
        </transition>
        <transition name="fade" mode="out-in">
            <main v-show="$store.state.currentPage == 2" class="miniRoutes">
                <h3 class="color-title text-center font-medium mb-2 text-gray-600">
                    Standing desk material
                </h3>
                <Caruosel v-if="deskMaterials" :itemCount="4" class="text-md text-center text-gray-600">
                    <main v-for="materials in deskMaterials" :key="materials" class="w-1/4 inline-block align-middle px-2">
                        <button @click="deskFolder(materials.path)" :class="{'bg-my text-white': $store.state.params.deskMaterial == materials.path}" v-html="materials.text" class="xl:h-16 md:h-14 xl:text-sm md:text-xs w-full rounded-xl border"></button>
                    </main>
                </Caruosel>
                <transition name="fade" mode="in-out">
                    <div v-if="imagearr" class="flex flex-wrap -mr-2 xl:mt-6 md:mt-4">
                        <aside class="w-1/5 pr-2" v-for="img in imagearr" :key="img">
                            <main @click="setDeskMaterial(img)" class="mb-6 xl:h-24 md:h-20 cursor-pointer">
                                <img :class="{'shadow-blue': $store.state.params.deskimage == img}" :src="`/floors/${img}`" :title="img" class="border-2 border-white rounded-md object-cover w-full h-full">
                            </main>
                        </aside>
                    </div>
                </transition>
            </main>
        </transition>

        <transition name="fade" mode="out-in">
            <main v-show="$store.state.currentPage == 3" class="miniRoutes">
                <h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">
                    Choose the leg color
                </h3>
                <div class="flex flex-wrap w-full justify-center -mr-2">
                    <aside v-for="n in 3" :key="n" class="w-1/4 mr-2">
                        <main @click="setLegColor(n)" class="h-20">
                            <div v-if="n == 1" :class="{'shadow-blue border-2 border-white': $store.state.params.legColor == n}" class="w-full h-full bg-white border border-gray rounded-md"></div>
                            <div v-if="n == 2" :class="{'shadow-blue': $store.state.params.legColor == n}" class="w-full h-full bg-gray-400 border-2 border-white rounded-md"></div>
                            <div v-if="n == 3" :class="{'shadow-blue': $store.state.params.legColor == n}" class="w-full h-full bg-black border-2 border-white rounded-md"></div>
                        </main>
                    </aside>
                </div>
            </main>
        </transition>

    </section>
</template>
<script>
import Caruosel from '../components/Carusel.vue'
import coords from '../../global/LegsCoordinates'
export default {
    data() {
        return {
            routeTag: null,
            imagearr: null,
            folderImages: null,
            deskMaterials: null,
        }
    },
    async created(){
        let desks = await Engine.textures.deskTextures()
        this.deskMaterials = desks.folders
        this.folderImages = desks.images
        this.imagearr = this.folderImages[store.state.params.deskMaterial]
    },
    mounted() {
        store.commit('setRoute')
    },
    methods: {
        setLegColor(colorIndex){
            let colorArr = ['#C8C8C8','#6B6B6B','#222222']
            let LegsArr = ['oneLeg', 'twoLeg', 'fourLeg', 'fiveLeg','threeLegLeft', 'threeLegRight'] 

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

        setDeskMaterial(textureName){
            let materialNames = ['oneTable', 'twoTable', 'threeTable', 'fourTable', 'fiveTable']
            materialNames.forEach(element => {
                let material = scene.getMaterialByName(element)
                material.albedoTexture = scene.getTextureByName(textureName)
            });

			store.state.params.deskimage = textureName
        }
    },
    components:{
        Caruosel
    }
}
</script>
<style scoped>
.w-custom{
    width: 27%;
}
</style>