<template>
    <aside class="absolute top-0 left-0 p-4 text-center text-gray-500">
        <div @click="events.toggleNode('lamp')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.lamp}" 
            class="flex items-center justify-center py-3 px-2 bg-white rounded-lg bg-opacity-50 mb-2 w-12 h-12 sm:w-16 sm:h-16 hover:bg-opacity-75">
            <Icons icon="lamp" />
        </div>
        <div @click="events.toggleNode('monitor')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.monitor}"  
            class="flex items-center justify-center py-3 px-3 bg-white rounded-lg bg-opacity-50 mb-2 w-12 h-12 sm:w-16 sm:h-16 hover:bg-opacity-75">
            <Icons icon="monitor" />
        </div>

        <div @click="events.toggleNode('chair')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.chair}"  
            class="flex items-center justify-center py-3 px-2 bg-white rounded-lg bg-opacity-50 mb-2 w-12 h-12 sm:w-16 sm:h-16 hover:bg-opacity-75">
            <Icons icon="chair" />
        </div>
        <div @click="events.toggleNode('plant')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.plant}"  
            class="flex items-center justify-center py-3 px-2 bg-white rounded-lg bg-opacity-50 mb-2 w-12 h-12 sm:w-16 sm:h-16 hover:bg-opacity-75">
            <Icons icon="plant" />
        </div>
        <div @click="events.toggleNode('tumbochka')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.tumbochka}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <img src="/images/tumb.png" class="w-5">
        </div>
    </aside>
</template>
<script setup>
import Icons from './Icons.vue'
const events = Engine.scene
</script>