<template>
    <aside class="word-wrap flex flex-wrap text-gray-600 -mr-3 text-xs font-bold">
        <main class="w-1/3 sm:w-1/5 pr-3 mb-3">
            <router-link  :to="{name: 'legstype',params:{ closed: true}}" :class="{'router-link-active': $route.name == 'legstype'}" class="config text-center py-2 px-1 block bg-gray-100 rounded-lg">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Legs"/>
                </div>
                <h3>
                    {{$store.state.language.thedesk}}
                </h3>
            </router-link>
        </main>
        <main class="w-1/3 sm:w-1/5 pr-3 mb-3">
            <router-link :to="{name: 'customization',params:{ closed: true}}" :class="{'router-link-active': $route.name == 'customization'}" class="config text-center py-2 px-1 block bg-gray-100 rounded-lg">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Customization"/>
                </div>
                <h3>
                    {{$store.state.language.customization}}
                </h3>
            </router-link>
        </main>
        <main class="w-1/3 sm:w-1/5 pr-3 mb-3">
            <router-link :to="{name: 'size',params:{ closed: true}}" :class="{'router-link-active': $route.name == 'size'}" class="config text-center py-2 px-1 block bg-gray-100 rounded-lg">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Size"/>
                </div>
                <h3>
                    {{$store.state.language.size}}
                </h3>
            </router-link>
        </main>
        <main class="w-1/3 sm:w-1/5 pr-3 mb-3">
            <router-link :to="{name: 'room',params:{ closed: true}}" :class="{'router-link-active': $route.name == 'room'}" class="config text-center py-2 px-1 block bg-gray-100 rounded-md">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Room"/>
                </div>
                <h3>
                    {{$store.state.language.roomColor}}
                </h3>
            </router-link>
        </main>
        <main class="w-1/3 sm:w-1/5 pr-3 mb-3">
            <aside @click="closed" class="config text-center py-2 px-1 block bg-gray-100 rounded-md">
                <div class="h-16 w-full flex items-center justify-center">
                    <Icons icon="Other"/>
                </div>
                <h3>
                    {{$store.state.language.other}}
                </h3>
            </aside>
        </main>
    </aside>
</template>
<script>
import Icons from './Icons.vue'
export default {
    components:{
        Icons
    },
    methods: {
        closed(){
            store.state.other = true
            this.$emit('closed')
        }
    },
}
</script>
<style>
.word-wrap{
    word-wrap: break-word;
}
.config.router-link-active{
    background-color: #3DB7F6;
    color: white;
    transition: 0.3s;
}
</style>