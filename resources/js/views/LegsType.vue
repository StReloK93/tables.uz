<template>
    <section>
        <main class="pb-8">
            <h3 class="font-bold mb-4 text-xl text-gray-600">
                Available legs
            </h3>
            <div class="flex text-center justify-between">
                <aside v-for="(legs , index) in $store.state.legTypes" :key="index" @click="setLegType(index + 1)" :class="{'border-myblue': $store.state.params.legType == index + 1}" class="px-3 py-2 rounded-xl border bg-white">
                    <main class="w-24 h-28 flex items-center">
                        <img :src="legs.img" alt="">
                    </main>
                    <div class="mt-2">
                        {{legs.name}}
                    </div>
                </aside>
            </div>
            <!-- new -->
            <h3 class="font-bold mb-4 text-xl mt-6 text-gray-600">
                Standing desk material
            </h3>
            <Caruosel :itemCount="4" class="text-md text-center text-gray-600">
                <main v-for="materials in deskMaterials" :key="materials" class="w-1/4 inline-block align-middle px-2">
                    <button @click="deskFolder(materials.path)" :class="{'bg-my text-white': $store.state.params.deskMaterial == materials.path}" v-html="materials.text" class="h-20 w-full rounded-xl border"></button>
                </main>
            </Caruosel>
            <transition name="fade" mode="in-out">
                <div v-if="imagearr" class="flex flex-wrap -mx-3 mt-6">
                    <aside class="w-1/5 px-3" v-for="img in imagearr" :key="img">
                    <!-- :class="{'shadow-blue': $store.state.params.floor == img.name}" -->
                        <main @click="setDeskMaterial(img)" class="mb-6 p-1 h-32 rounded-xl cursor-pointer shadow-md">
                            <img :src="`/floors/${img}`" class="rounded-md object-cover w-full h-full">
                        </main>
                    </aside>
                </div>
            </transition>
        </main>
        <main class="pb-8">
            <h3 class="font-bold mb-6 text-xl text-gray-600">
                Choose the leg color
            </h3>
            <div class="flex flex-wrap -mx-3">
                <aside v-for="n in 3" :key="n" class="w-1/5 px-3">
                    <main  @click="setLegColor(n)" :class="{'shadow-blue': $store.state.params.legColor == n}" class="p-1 rounded-md h-36">
                        <div v-if="n == 1" class="w-full h-full bg-white border border-gray-300 rounded-md"></div>
                        <div v-if="n == 2" class="w-full h-full bg-gray-400 border border-gray-300 rounded-md"></div>
                        <div v-if="n == 3" class="w-full h-full bg-black border border-gray-300 rounded-md"></div>
                    </main>
                </aside>
            </div>
        </main>
    </section>
</template>
<script>
import Caruosel from '../components/Carusel.vue'
import coords from '../LegsCoordinates'
export default {
    data() {
        return {
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
    // async mounted() {
    //     this.folderImages = Engine.textures.desks.images
    //     this.imagearr = this.folderImages[store.state.params.deskMaterial]
    // },
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
        }
    },
    components:{
        Caruosel
    }
}
</script>