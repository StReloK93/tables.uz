<template>
    <main>
        <h3 class="color-title text-center font-medium text-xl  mb-2 text-gray-600">Chairs</h3>
        <aside class="text-center text-xs whitespace-nowrap pt-1 overflow-hidden overflow-x-scroll noscroll -mr-2">
            <main v-for="(button,index) in buttons" :key="index" class="w-24 inline-block align-middle mr-2">
                <button @click="active = index" :class="{'bg-my text-white': active == index}" class="leading-none h-8 w-full rounded-md shadow-sm border border-gray-50">{{button}}</button>
            </main>
        </aside>
        <transition name="fade" mode="out-in">
            <div v-if="active == 0" class="text-xs whitespace-nowrap pt-2 px-1 overflow-hidden overflow-x-scroll noscroll -mr-1">
                <aside v-for="img in easy" :key="img" class="px-1 w-32 inline-block">
                    <div @click="events.setChair(img.name)" :class="{'border-myblue': $store.state.custom.chair == img.name}" class="cursor-pointer p-1 text-center rounded relative border border-transparent">
                        <img v-if="$store.state.custom.chair == img.name" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                        <main class="mb-2 text-center">
                            <img :src="img.path" class="w-20 h-24 object-cover inline">
                        </main>
                        <p class="text-xs mt-1">
                            {{img.name}}
                        </p>
                    </div>
                </aside>
            </div>
            <div v-else-if="active == 1" class="text-xs whitespace-nowrap pt-2 px-1 overflow-hidden overflow-x-scroll noscroll -mr-1">
                <aside v-for="img in normal" :key="img" class="px-1 w-32 inline-block">
                    <div @click="events.setChair(img.name)" :class="{'border-myblue': $store.state.custom.chair == img.name}" class="cursor-pointer p-1 text-center rounded relative border border-transparent">
                        <img v-if="$store.state.custom.chair == img.name" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                        <main class="mb-2 text-center">
                            <img :src="img.path" class="w-20 h-24 object-cover inline">
                        </main>
                        <p class="text-xs mt-1">
                            {{img.name}}
                        </p>
                    </div>
                </aside>
            </div>
            <div v-else-if="active == 2" class="text-xs whitespace-nowrap pt-2 px-1 overflow-hidden overflow-x-scroll noscroll -mr-1">
                <aside v-for="img in hard" :key="img" class="px-1 w-32 inline-block">
                    <div @click="events.setChair(img.name)" :class="{'border-myblue': $store.state.custom.chair == img.name}" class="cursor-pointer p-1 text-center rounded relative border border-transparent">
                        <img v-if="$store.state.custom.chair == img.name" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                        <main class="mb-2 text-center">
                            <img :src="img.path" class="w-20 h-24 object-cover inline">
                        </main>
                        <p class="text-xs mt-1">
                            {{img.name}}
                        </p>
                    </div>
                </aside>
            </div>
            <div v-else-if="active == 3" class="text-xs whitespace-nowrap pt-2 px-1 overflow-hidden overflow-x-scroll noscroll -mr-1">
                <aside v-for="img in hardest" :key="img" class="px-1 w-32 inline-block">
                    <div @click="events.setChair(img.name)" :class="{'border-myblue': $store.state.custom.chair == img.name}" class="cursor-pointer p-1 text-center rounded relative border border-transparent">
                        <img v-if="$store.state.custom.chair == img.name" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                        <main class="mb-2 text-center">
                            <img :src="img.path" class="w-20 h-24 object-cover inline">
                        </main>
                        <p class="text-xs mt-1">
                            {{img.name}}
                        </p>
                    </div>
                </aside>
            </div>
        </transition>
    </main>
</template>
<script>
import Carusel from '../Carusel.vue'
export default {
    data() {
        return {
            easy: [
                {name: 'Emery Chair' ,  path: '/images/easy/Emery Chair.jpg'},
                {name: 'Ricks Chair' ,  path: '/images/easy/Ricks Chair.png'},
                {name: 'Vision Chair' , path: '/images/easy/Vision Chair.png'},
            ],
            normal: [
                {name: 'Bestuhl S10' ,  path: '/images/normal/Bestuhl S10.jpg'},
                {name: 'Bestuhl S15' ,  path: '/images/normal/Bestuhl S15.jpg'},
                {name: 'Duorest D2' ,   path: '/images/normal/Duorest D2.jpg'},
                {name: 'MO Chair' ,     path: '/images/normal/MO Chair.jpg'},
            ],
            hard: [
                {name: 'Allseating You Too' , path: '/images/hard/Allseating You Too.jpg'},
                {name: 'Lives High Back' ,    path: '/images/hard/Lives High Back.jpg'},
                {name: 'Okamura Slyphy' ,     path: '/images/hard/Okamura Slyphy.jpg'},
            ],
            hardest: [
                {name: 'Okamura.C Foam Seat' , path: '/images/hardest/Okamura Contessa Foam Seat.jpg'},
                {name: 'Okamura.C Mesh' ,      path: '/images/hardest/Okamura Contessa Mesh.jpg'},
                {name: 'Wagner Alumedic' ,     path: '/images/hardest/Wagner Alumedic.jpg'},
                {name: 'Wagner Titan Ltd S' ,  path: '/images/hardest/Wagner Titan Ltd S.jpg'},
            ],
            buttons: [
                'Below $3000',
                '$3500-$5500',
                '$5501-$8500',
                '$8500+',
            ],
            events: Engine.Customization,
            active: 0,
        }
    },
    components:{
        Carusel
    }
}
</script>