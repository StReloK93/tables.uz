<template>
    <hr class="my-6">
    <aside class="flex justify-between text-gray-600">
        <router-link  to="/legstype" class="config text-center p-3 bg-gray-100 rounded-lg">
            <div class="h-16 w-24 flex items-center justify-center">
                <Icons icon="Legs"/>
            </div>
            <h3 class="text-sm font-medium">
                Legs Type 
            </h3>
        </router-link>
        <router-link to="/customization" class="config text-center p-3 bg-gray-100 rounded-lg">
            <div class="h-16 w-24 flex items-center justify-center">
                <Icons icon="Customization"/>
            </div>
            <h3 class="text-sm font-medium">
                Customization
            </h3>
        </router-link>
        <router-link to="/size" class="config text-center p-3 bg-gray-100 rounded-lg">
            <div class="h-16 w-24 flex items-center justify-center">
                <Icons icon="Size"/>
            </div>
            <h3 class="text-sm font-medium">
                Size
            </h3>
        </router-link>
        <router-link to="/room" class="config text-center p-3 bg-gray-100 rounded-lg">
            <div class="h-16 w-24 flex items-center justify-center">
                <Icons icon="Room"/>
            </div>
            <h3 class="text-sm font-medium">
                Room Color 
            </h3>
        </router-link>
        <router-link to="/other" class="config text-center p-3 bg-gray-100 rounded-lg">
            <div class="h-16 w-24 flex items-center justify-center">
                <Icons icon="Other"/>
            </div>
            <h3 class="text-sm font-medium">
                Other requests
            </h3>
        </router-link>
    </aside>
</template>
<script>
import Icons from './Icons.vue'
export default {
    components:{
        Icons
    },
}
</script>
<style>
.config.router-link-active{
    background-color: #3DB7F6;
    color: white;
    transition: 0.3s;
}
</style>