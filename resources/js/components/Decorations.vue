<template>
    <aside class="p-6 text-gray-500">
        <div class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24">
            <Icons icon="lamp" />
        </div>
        <div class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24">
            <Icons icon="monitor" />
        </div>
        <div class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24">
            <Icons icon="image" />
        </div>
        <div class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24">
            <Icons icon="chair" />
        </div>
        <div class="flex items-center justify-center py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24">
            <Icons icon="plant" />
        </div>
    </aside>
</template>
<script>
import Icons from './Icons.vue'
export default {
    components:{
        Icons
    }
}
</script>