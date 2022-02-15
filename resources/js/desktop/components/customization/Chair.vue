<template>
<section class="-mx-8 -mt-6">
    <h3 class="mx-8 font-bold my-4 xl:text-xl md:text-md text-gray-600">Chairs</h3>
    <h3 class="mx-8 font-bold my-4 text-md text-blue-900">Below $3000</h3>
    <Carusel  :itemCount="3" class="text-md text-center text-gray-600 mx-8">
        <main v-for="img in easy" :key="img" @click="events.setChair(img.name)"  class="w-1/3 px-1 inline-block">
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
        <main v-for="img in normal" :key="img" @click="events.setChair(img.name)"  class="w-1/3 px-1 inline-block">
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
        <main v-for="img in hard" :key="img" @click="events.setChair(img.name)"  class="w-1/3 px-1 inline-block">
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
        <main v-for="img in hardest" :key="img" @click="events.setChair(img.name)"  class="w-1/3 px-1 inline-block">
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
            easy: [
                {name: 'Emery Chair' , path: '/images/easy/Emery Chair.jpg'},
                {name: 'Ricks Chair' , path: '/images/easy/Ricks Chair.png'},
                {name: 'Vision Chair' , path: '/images/easy/Vision Chair.png'},
            ],
            normal: [
                {name: 'Bestuhl S10' , path: '/images/normal/Bestuhl S10.jpg'},
                {name: 'Bestuhl S15' , path: '/images/normal/Bestuhl S15.jpg'},
                {name: 'Duorest D2' , path: '/images/normal/Duorest D2.jpg'},
                {name: 'MO Chair' , path: '/images/normal/MO Chair.jpg'},
            ],
            hard: [
                {name: 'Allseating You Too' , path: '/images/hard/Allseating You Too.jpg'},
                {name: 'Lives High Back' , path: '/images/hard/Lives High Back.jpg'},
                {name: 'Okamura Slyphy' , path: '/images/hard/Okamura Slyphy.jpg'},
            ],
            hardest: [
                {name: 'Okamura Contessa Foam Seat' , path: '/images/hardest/Okamura Contessa Foam Seat.jpg'},
                {name: 'Okamura Contessa Mesh' , path: '/images/hardest/Okamura Contessa Mesh.jpg'},
                {name: 'Wagner Alumedic' , path: '/images/hardest/Wagner Alumedic.jpg'},
                {name: 'Wagner Titan Ltd S' , path: '/images/hardest/Wagner Titan Ltd S.jpg'},
            ],

            events: Engine.Customization
        }
    },
    components:{
        Carusel
    }
}
</script>