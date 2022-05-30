<template>
    <!-- <hr class="xl:my-6 md:my-3"> -->
    <aside class="flex justify-between text-gray-600 -mr-2">
        <main class="w-1/5 pr-2">
            <router-link  :to="{name: 'legstype'}" class="config text-center xl:py-3 md:py-2 block bg-gray-100 rounded-lg">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Legs"/>
                </div>
                <h3 class="xl:text-sm md:text-xs font-medium">
                    The Desk
                </h3>
            </router-link>
        </main>
        <main class="w-1/5 pr-2">
            <router-link :to="{name: 'customization'}" class="config text-center xl:py-3 md:py-2 block bg-gray-100 rounded-lg">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Customization"/>
                </div>
                <h3 class="xl:text-sm md:text-xs font-medium">
                    Customization
                </h3>
            </router-link>
        </main>
        <main class="w-1/5 pr-2">
            <router-link :to="{name: 'size'}" class="config text-center xl:py-3 md:py-2 block bg-gray-100 rounded-lg">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Size"/>
                </div>
                <h3 class="xl:text-sm md:text-xs font-medium">
                    Size
                </h3>
            </router-link>
        </main>
        <main class="w-1/5 pr-2">
            <router-link :to="{name: 'room'}" class="config text-center xl:py-3 md:py-2 block bg-gray-100 rounded-lg">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Room"/>
                </div>
                <h3 class="xl:text-sm md:text-xs font-medium">
                    Room Color 
                </h3>
            </router-link>
        </main>
        <main class="w-1/5 pr-2">
            <router-link :to="{name: 'other'}" class="config text-center xl:py-3 md:py-2 block bg-gray-100 rounded-lg">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Other"/>
                </div>
                <h3 class="xl:text-sm md:text-xs font-medium">
                    Other requests
                </h3>
            </router-link>
        </main>
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