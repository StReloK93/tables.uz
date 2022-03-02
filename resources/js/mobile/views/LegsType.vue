<template>
    <section>
        <transition name="fade" mode="out-in">
            <main v-show="$store.state.currentPage == 1" class="miniRoutes">
                <h3 class="color-title text-center font-medium mb-1 text-gray-600">
                    Available legs
                </h3>
                <div class="text-center whitespace-nowrap py-1 overflow-hidden overflow-x-scroll noscroll -mr-2">
                    <aside v-for="(legs , index) in $store.state.legTypes" :key="index" @click="events.setLegType(index)" class="w-custom inline-block mr-2">
                        <section  :class="{'border-myblue': $store.state.params.legType == index}" class="py-2 overflow-hidden rounded-md border border-transparent">
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

        <!-- job time -->
        <transition name="fade" mode="out-in">
            <main v-show="$store.state.currentPage == 2" class="miniRoutes">
                <h3 class="color-title text-center font-medium mb-2 text-gray-600">
                    Table Top Materials
                </h3>
                <aside v-if="deskMaterials.length > 0" class="text-center text-xs whitespace-nowrap py-1 overflow-hidden overflow-x-scroll noscroll -mr-2">
                    <main v-for="materials in deskMaterials" :key="materials" class="w-28 inline-block align-middle mr-2">
                        <button @click="events.deskFolder(materials.path)" :class="{'bg-my text-white': $store.state.params.deskMaterial == materials.path}" v-html="materials.text" class="leading-none h-8 w-full rounded-md shadow-sm border border-gray-50"></button>
                    </main>
                </aside>
                <transition name="fade" mode="in-out">
                    <div v-if="imagearr" class="text-xs whitespace-nowrap py-1 px-1  overflow-hidden overflow-x-scroll noscroll -mr-1">
                        <aside class="w-20 mr-1 inline-block" v-for="img in imagearr" :key="img">
                            <main @click="events.setDeskMaterial(img.path)" class="w-full h-20">
                                <img :class="{'shadow-blue': $store.state.params.deskimage == img.path}" :src="`/floors/${img.path}`" :title="img.path" class="border-2 border-white rounded-md object-cover w-full h-full">
                            </main>
                        </aside>
                    </div>
                </transition>
            </main>
        </transition>


        <transition name="fade" mode="out-in">
            <main v-show="$store.state.currentPage == 3" class="miniRoutes">
                <h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">
                    Legs Colors
                </h3>
                <div class="flex flex-wrap w-full justify-center -mr-2">
                    <aside v-for="n in 3" :key="n" class="w-1/4 mr-2">
                        <main @click="events.setLegColor(n)" class="h-20">
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
export default {
    props: ['old'],
    data() {
        return {
            imagearr: null,
            folderImages: null,
            deskMaterials: [],
            events: Engine.Legs
        }
    },
    mounted() {
        Engine.Legs.data = this
        store.commit('setRoute', this.old)
        scene.onReadyObservable.add(()=>{
            let desks = Engine.textures.folders
            this.folderImages = desks.images
            this.imagearr = this.folderImages[store.state.params.deskMaterial]
            Engine.Legs.FilterFolders(store.state.params.legType)
        })
    }
}
</script>
<style scoped>
.w-custom{
    width: 27%;
}
</style>