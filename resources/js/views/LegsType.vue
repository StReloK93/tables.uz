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
                <main v-for="(materials , num) in $store.state.deskMaterials" :key="num" class="w-1/4 inline-block align-middle px-2">
                    <button @click="setDeskMaterial(num+1)" :class="{'bg-my text-white': $store.state.params.deskMaterial == num+1}" v-html="materials" class="h-20 w-full rounded-xl border"></button>
                </main>
            </Caruosel>
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

export default {
    data() {
        return {
            Coordinates: [
                {
                    image:     new BABYLON.Vector3(10,19.117,-34.423),
                    plant:     new BABYLON.Vector3(0,1,-31),
                    monitor:   new BABYLON.Vector3(10.368,8.01698,-21.8846),
                    chair:     new BABYLON.Vector3(15.5757,1.38094,-11.7009),
                    lamp:      new BABYLON.Vector3(22.511,6.92616,-31.4137),
                    tumbochka: new BABYLON.Vector3(22.503,1.178,-29.831),
                },
                {
                    image:     new BABYLON.Vector3(1.215,19.117,-34.423),
                    plant:     new BABYLON.Vector3(3.080,1,-31.333),
                    monitor:   new BABYLON.Vector3(14.214,7.689,-31.565),
                    chair:     new BABYLON.Vector3(15.661,1.381,-17.889),
                    lamp:      new BABYLON.Vector3(19.627,7.668,-31.414),
                    tumbochka: new BABYLON.Vector3(22.503,1.178,-29.831),
                },
                {
                    image:     new BABYLON.Vector3(1.215,19.117,-34.423),
                    plant:     new BABYLON.Vector3(-3.09833,1,-31.333),
                    monitor:   new BABYLON.Vector3(15.1378,7.5,-30.3906),
                    chair:     new BABYLON.Vector3(17.7362,1.38094,-18.8789),
                    lamp:      new BABYLON.Vector3(20.8322,7.5,-31.414),
                    tumbochka: new BABYLON.Vector3(1,1.178,-29.831),
                },
                {
                    image:     new BABYLON.Vector3(9.82315,19.117,-34.423),
                    plant:     new BABYLON.Vector3(-1.77979,1,-31.333), 
                    monitor:   new BABYLON.Vector3(1.45031,7.51,-7.10365),
                    chair:     new BABYLON.Vector3(9.11413,1.38094,-2.60271) ,
                    lamp:      new BABYLON.Vector3(22.5794,6.95014,-31.4137),
                    tumbochka: new BABYLON.Vector3(22.503,1.178,-29.831),
                },
                {
                    image:     new BABYLON.Vector3(2.96359,19.117,-34.423),
                    plant:     new BABYLON.Vector3(-1.35887,1,-31.333), 
                    monitor:   new BABYLON.Vector3(13.7972,8.32,-31.3336),
                    chair:     new BABYLON.Vector3(13.1428,1.38094,-21.123),
                    lamp:      new BABYLON.Vector3(21.2717,8.3,-31.4137),
                    tumbochka: new BABYLON.Vector3(3,1.178,-29.831),
                }
            ]
        }
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
            
            let coords = this.Coordinates
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

        setDeskMaterial(deskIndex){
            store.state.params.deskMaterial = deskIndex
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