<template>
<section class="-mx-8 -mt-6">
    <h3 class="mx-8 font-bold mb-4 text-md text-blue-900">Below $3000</h3>
    <Carusel  :itemCount="3" class="text-md text-center text-gray-600 mx-8">
        <main v-for="img in normal" :key="img" @click="events.setChair(img.path)"  class="w-1/3 px-2 inline-block">
            <div :class="{'border-myblue': $store.state.custom.chair == img.path}" class="py-4 relative text-center rounded-md border border-transparent">
                <img v-if="$store.state.custom.chair == img.path" src="/images/true.png" class="w-4 -m-2 -mt-2 absolute top-0 right-0 z-20">
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
                {name: 'Okamura Contessa Foam Seat' , path: '/images/normal/Okamura Contessa Foam Seat.jpg'},
                {name: 'Okamura Contessa Mesh' , path: '/images/normal/Okamura Contessa Mesh.jpg'},
                {name: 'Wagner Alumedic' , path: '/images/normal/Wagner Alumedic.jpg'},
                {name: 'Wagner Titan Ltd S' , path: '/images/normal/Wagner Titan Ltd S.jpg'},
            ],
            hard: [
                {name: 'Allseating You Too' , path: '/images/hard/Allseating You Too.jpg'},
                {name: 'Lives High Back' , path: '/images/hard/Lives High Back.jpg'},
                {name: 'Okamura Slyphy' , path: '/images/hard/Okamura Slyphy.jpg'},
            ],
            hardest: [
                {name: 'Bestuhl S10' , path: '/images/hardest/Bestuhl S10.jpg'},
                {name: 'Bestuhl S15' , path: 'images/hardest/Bestuhl S15.jpg'},
                {name: 'Duorest D2' , path: '/images/hardest/Duorest D2.png'},
                {name: 'MO Chair' , path: '/images/hardest/MO Chair.png'},
            ],
            events: Engine.Customization
        }
    },
    components:{
        Carusel
    }
}
</script>