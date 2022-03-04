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
                <aside v-for="img in $store.state.chairs[0]" :key="img" class="px-1 w-32 inline-block">
                    <div @click="events.setter(img.name, 'chair')" :class="{'border-myblue': $store.state.custom.chair == img.name}" class="cursor-pointer shadow p-1 pt-2 text-center rounded relative border border-transparent">
                        <img v-if="$store.state.custom.chair == img.name" src="/images/true.jpg" class="w-6 -m-2 absolute top-0 right-0 z-20">
                        <span class="font-medium px-1 text-custom absolute top-0 left-0">{{img.price}}</span>
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
                <aside v-for="img in $store.state.chairs[1]" :key="img" class="px-1 w-32 inline-block">
                    <div @click="events.setter(img.name, 'chair')" :class="{'border-myblue': $store.state.custom.chair == img.name}" class="cursor-pointer p-1 pt-4 text-center rounded relative border border-transparent">
                        <img v-if="$store.state.custom.chair == img.name" src="/images/true.jpg" class="w-6 -m-2 absolute top-0 right-0 z-20">
                        <span class="absolute top-0 left-0 bg-blue-500 text-white rounded-tl px-2 text-xs py-1 leading-none">
                            {{img.price}}
                        </span>
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
                <aside v-for="img in $store.state.chairs[2]" :key="img" class="px-1 w-32 inline-block">
                    <div @click="events.setter(img.name, 'chair')" :class="{'border-myblue': $store.state.custom.chair == img.name}" class="cursor-pointer p-1 pt-4 text-center rounded relative border border-transparent">
                        <img v-if="$store.state.custom.chair == img.name" src="/images/true.jpg" class="w-6 -m-2 absolute top-0 right-0 z-20">
                        <span class="absolute top-0 left-0 bg-blue-500 text-white rounded-tl px-2 text-xs py-1 leading-none">
                            {{img.price}}
                        </span>
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
                <aside v-for="img in $store.state.chairs[3]" :key="img" class="px-1 w-32 inline-block">
                    <div @click="events.setter(img.name, 'chair')" :class="{'border-myblue': $store.state.custom.chair == img.name}" class="cursor-pointer p-1 pt-4 text-center rounded relative border border-transparent">
                        <img v-if="$store.state.custom.chair == img.name" src="/images/true.jpg" class="w-6 -m-2 absolute top-0 right-0 z-20">
                        <span class="absolute top-0 left-0 bg-blue-500 text-white rounded-tl px-2 text-xs py-1 leading-none">
                            {{img.price}}
                        </span>
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
            buttons: [
                'Below $3000',
                '$3500-$5500',
                '$5501-$9500',
                '$9500+',
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