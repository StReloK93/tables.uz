<template>
<section class="-mx-8 -mt-6">
    <h3 class="mx-8 font-bold my-4 xl:text-xl md:text-md text-gray-600">Chairs</h3>
    <h3 class="mx-8 font-bold my-4 text-md text-blue-900">Below $3000</h3>
    <Carusel  :itemCount="3" class="text-md text-center text-gray-600 mx-8">
        <main v-for="img in $store.state.chairs[0]" :key="img" @click="events.setter(img.name, 'chair')"  class="w-1/3 px-1 inline-block">
            <div :class="{'border-myblue': $store.state.custom.chair == img.name}" class="py-4 relative text-center rounded-md border border-transparent">
                <img v-if="$store.state.custom.chair == img.name" src="/images/true.png" class="w-6 bg-white -m-2 -mt-3 absolute top-0 right-0 z-20">
                <img :src="img.path" class="w-28 h-28 object-cover inline-block">
                <p class="text-xs mt-5">
                    {{img.name}}
                </p>
            </div>
        </main>
    </Carusel>
    <h3 class="mx-8 font-bold my-4 text-md text-blue-900">$3500-$5500</h3>
    <Carusel  :itemCount="3" class="text-md text-center text-gray-600 mx-8">
        <main v-for="img in $store.state.chairs[1]" :key="img" @click="events.setter(img.name, 'chair')"  class="w-1/3 px-1 inline-block">
            <div :class="{'border-myblue': $store.state.custom.chair == img.name}" class="py-4 relative text-center rounded-md border border-transparent">
                <img v-if="$store.state.custom.chair == img.name" src="/images/true.png" class="w-6 bg-white -m-2 -mt-3 absolute top-0 right-0 z-20">
                <img :src="img.path" class="w-28 h-28 object-cover inline-block">
                <p class="text-xs mt-5">
                    {{img.name}}
                </p>
            </div>
        </main>
    </Carusel>
    <h3 class="mx-8 font-bold my-4 text-md text-blue-900">$5501-$8500</h3>
    <Carusel  :itemCount="3" class="text-md text-center text-gray-600 mx-8">
        <main v-for="img in $store.state.chairs[2]" :key="img" @click="events.setter(img.name, 'chair')"  class="w-1/3 px-1 inline-block">
            <div :class="{'border-myblue': $store.state.custom.chair == img.name}" class="py-4 relative text-center rounded-md border border-transparent">
                <img v-if="$store.state.custom.chair == img.name" src="/images/true.png" class="w-6 bg-white -m-2 -mt-3 absolute top-0 right-0 z-20">
                <img :src="img.path" class="w-28 h-28 object-cover inline-block">
                <p class="text-xs mt-5">
                    {{img.name}}
                </p>
            </div>
        </main>
    </Carusel>
    <h3 class="mx-8 font-bold my-4 text-md text-blue-900">$8500+</h3>
    <Carusel  :itemCount="3" class="text-md text-center text-gray-600 mx-8">
        <main v-for="img in $store.state.chairs[3]" :key="img" @click="events.setter(img.name, 'chair')"  class="w-1/3 px-1 inline-block">
            <div :class="{'border-myblue': $store.state.custom.chair == img.name}" class="py-4 relative text-center rounded-md border border-transparent">
                <img v-if="$store.state.custom.chair == img.name" src="/images/true.png" class="w-6 bg-white -m-2 -mt-3 absolute top-0 right-0 z-20">
                <img :src="img.path" class="w-28 h-28 object-cover inline-block">
                <p class="text-xs mt-5">
                    {{img.name}}
                </p>
            </div>
        </main>
    </Carusel>
</section>
</template>
<script>
import Carusel from '../Carusel.vue'
export default {
    data() {
        return {
            events: Engine.Customization
        }
    },
    components:{
        Carusel
    }
}
</script>