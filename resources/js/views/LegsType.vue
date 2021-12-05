<template>
    <section>
        <main class="pb-8">
            <h3 class="font-bold mb-4 text-xl text-gray-600">
                Available legs
            </h3>
            <div class="flex text-center justify-between">
                <aside @click="setLegType(1)" :class="{'border-myblue': $store.state.params.legType == 1}" class="px-3 py-2 rounded-xl border bg-white">
                    <main class="w-24 h-28 flex items-center">
                        <img src="/images/1leg.png" alt="">
                    </main>
                    <div class="mt-2">
                        1 legs
                    </div>
                </aside>
                <aside @click="setLegType(2)" :class="{'border-myblue': $store.state.params.legType == 2}" class="px-3 py-2 rounded-xl border bg-white">
                    <main class="w-24 h-28 flex items-center">
                        <img src="/images/2leg.png" alt="">
                    </main>
                    <div class="mt-2">
                        2 legs
                    </div>
                </aside>
                <aside @click="setLegType(3)" :class="{'border-myblue': $store.state.params.legType == 3}" class="px-3 py-2 rounded-xl border bg-white">
                    <main class="w-24 h-28 flex items-center">
                        <img src="/images/3leg.png" alt="">
                    </main>
                    <div class="mt-2">
                        3 legs
                    </div>
                </aside>
                <aside @click="setLegType(4)" :class="{'border-myblue': $store.state.params.legType == 4}" class="px-3 py-2 rounded-xl border bg-white">
                    <main class="w-24 h-28 flex items-center">
                        <img src="/images/4leg.png" alt="">
                    </main>
                    <div class="mt-2">
                        4 legs
                    </div>
                </aside>
                <aside @click="setLegType(5)" :class="{'border-myblue': $store.state.params.legType == 5}" class="px-3 py-2 rounded-xl border bg-white">
                    <main class="w-24 h-28 flex items-center">
                        <img src="/images/5leg.png" alt="">
                    </main>
                    <div class="mt-2">
                        Side cabinet
                    </div>
                </aside>
            </div>
            <!-- new -->
            <h3 class="font-bold mb-4 text-xl mt-6 text-gray-600">
                Standing desk material
            </h3>
            <div class="text-md flex flex-wrap text-center text-gray-600">
                <button @click="setDeskMaterial(1)" :class="{'bg-my text-white': $store.state.params.deskMaterial == 1}" class="h-16 w-36 rounded-xl mr-4 mb-4 border">
                    SOHO
                </button>
                <button @click="setDeskMaterial(2)" :class="{'bg-my text-white': $store.state.params.deskMaterial == 2}" class="h-16 w-36 rounded-xl mr-4 mb-4 border">
                    Multi purpose <br> for Home
                </button>
                <button @click="setDeskMaterial(3)" :class="{'bg-my text-white': $store.state.params.deskMaterial == 3}" class="h-16 w-36 rounded-xl mr-4 mb-4 border">
                    Private Office <br> for Corporate
                </button>
                <button @click="setDeskMaterial(4)" :class="{'bg-my text-white': $store.state.params.deskMaterial == 4}" class="h-16 w-36 rounded-xl mr-4 mb-4 border">
                    Open Office <br> for Corporate
                </button>
            </div>
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
export default {
    methods: {
        setLegColor(colorIndex){
            let colorArr = ['#ffffff','#ada7a7','#222222',]
            const scene = Engine.scene.get()
            const metalOne = scene.getMaterialByName('legMetalBottom')
            const metalTwo = scene.getMaterialByName('legMetal')
            metalOne.albedoColor = BABYLON.Color3.FromHexString(colorArr[colorIndex - 1]).toLinearSpace()
            metalTwo.albedoColor = BABYLON.Color3.FromHexString(colorArr[colorIndex - 1]).toLinearSpace()
            this.$store.state.params.legColor = colorIndex
        },
        setLegType(typeIndex){
            const scene = Engine.scene.get()
            store.commit('setLegType', {scene: scene, legType: typeIndex})
        },
        setDeskMaterial(deskIndex){
            this.$store.state.params.deskMaterial = deskIndex
        }
    },
}
</script>