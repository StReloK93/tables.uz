<template>
    <aside class="p-6 text-gray-500">
        <div @click="events.toggleNode('lamp')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.lamp}" 
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="lamp" />
        </div>
        <div @click="events.toggleNode('monitor')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.monitor}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="monitor" />
        </div>
        <!-- <div v-if="image" @click="events.toggleNode('image')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.image}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="image" />
        </div> -->
        <div @click="events.toggleNode('chair')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.chair}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="chair" />
        </div>
        <div @click="events.toggleNode('plant')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.plant}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <Icons icon="plant" />
        </div>
        <div @click="events.toggleNode('tumbochka')" :class="{'bg-opacity-100 border border-myblue': !$store.state.decor.tumbochka}"  
            class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20 cursor-pointer hover:bg-opacity-75">
            <img src="/images/tumb.png" class="w-10">
        </div>
    </aside>
</template>
<script setup>
import Icons from './Icons.vue'
const events = Engine.scene
</script>
<style>
.gray:hover{
    filter: grayscale(0.8);
}
</style>