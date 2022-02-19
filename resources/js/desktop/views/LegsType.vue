<template>
    <section>
        <main>
            <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">
                Available legs
            </h3>
            <div class="flex text-center justify-between -mr-2">
                <aside v-for="(legs , index) in $store.state.legTypes" :key="index" @click="events.setLegType(index)" class="w-1/5 pr-2 cursor-pointer">
					<section  :class="{'border-myblue': $store.state.params.legType == index}" class="p-2 pt-1 overflow-hidden rounded-xl border bg-white">
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
            <transition name="fade" mode="in-out">
                <Caruosel v-if="deskMaterials.length > 0" :itemCount="4" class="text-md text-center text-gray-600">
                    <main v-for="materials in deskMaterials" :key="materials"  class="w-1/4 inline-block align-middle px-2 relative">
                        <img v-if="$store.state.params.activeFolder == materials.path" src="/images/true.png" class="w-4 -m-1 -mt-2 absolute top-0 right-0 z-20">
                        <button  @click="events.deskFolder(materials.path)" :class="{'bg-my text-white': $store.state.params.deskMaterial == materials.path}" v-html="materials.text" class="xl:h-16 md:h-14 xl:text-sm md:text-xs w-full rounded-xl border"></button>
                    </main>
                </Caruosel>
            </transition>
            <transition name="fade" mode="in-out">
                <div v-if="imagearr" class="flex flex-wrap -mr-2 md:mt-2">
                    <aside class="w-1/5 pr-2" v-for="(img,index) in imagearr" :key="index">
                        <main :title="index" @click="events.setDeskMaterial(img.path)" class="xl:h-32 md:h-20 cursor-pointer">
                            <img :class="{'shadow-blue': $store.state.params.deskimage == img.path}" :src="`/floors/${img.path}`" :title="img.path" class="border-2 border-white rounded-md object-cover w-full h-full">
                        </main>
                        <p class="text-center mb-1 uppercase">{{img.file}}</p>
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
                    <main @click="events.setLegColor(n)" class="xl:h-32 md:h-20">
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
export default {
    data() {
        return {
            imagearr: null,
            folderImages: null,
            deskMaterials: [],
            events: Engine.Legs,
        }
    },
    mounted() {
        Engine.Legs.data = this
        scene.onReadyObservable.add(()=>{
            let desks = Engine.textures.folders
            this.folderImages = desks.images
            this.imagearr = this.folderImages[store.state.params.deskMaterial]
        })
    },
    components:{
        Caruosel
    }
}
</script>