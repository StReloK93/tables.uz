<template>
    <section class="text-center">
        <h3 class="color-title font-medium text-xl  mb-2 text-gray-600">{{$store.state.language.accessories}}</h3>
        <main class="whitespace-nowrap px-1 py-3 overflow-hidden overflow-x-scroll noscroll">
            <aside v-for="(element,index) in $store.state.accessories" :key="index" class="pr-2 w-36 inline-block">
                <div @click="events.accessories(element)" :class="{'border-myblue': element.active == true}" class="flex shadow flex-col px-2 py-4 pt-8 rounded-md border border-transparent relative">
                    <img v-if="element.active == true" src="/images/true.jpg" class="w-6 -m-2 absolute top-0 right-0 z-20">
                    <span class="absolute top-0 left-0 bg-blue-500 text-white rounded-tl px-2 text-xs py-1 leading-none">
                        {{element.price}}
                    </span>
                    <aside class="w-full text-center">
                        <img :src="element.image" class="w-16 h-16 object-cover inline">
                    </aside>
                    <p class="text-xs" v-html="$store.state.language[element.name]"></p>
                </div>
            </aside>
        </main>
    </section>
</template>
<script>
export default {
    data() {
        return {
            events: Engine.Customization
        }
    }
}
</script>
