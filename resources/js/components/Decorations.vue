<template>
    <aside class="p-6 text-gray-500">
        <div @click="camera" class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="lamp" />
        </div>
        <div class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="monitor" />
        </div>
        <div class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="image" />
        </div>
        <div class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="chair" />
        </div>
        <div class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 cursor-pointer">
            <Icons icon="plant" />
        </div>
    </aside>
</template>
<script>
import Icons from './Icons.vue'
export default {
    components:{
        Icons
    },
    methods: {
        camera(){
            Engine.camera.seTradius(10)
        }
    },
}
</script>