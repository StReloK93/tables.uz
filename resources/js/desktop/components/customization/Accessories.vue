<template>
    <section>
        <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">{{$store.state.language.accessories}}</h3>
        <main class="flex -mx-2 text-center pb-10 flex-wrap">
            <aside v-for="(element,index) in $store.state.accessories" :key="index" class="px-2 w-1/3">
                <div @click="events.accessories(element)" :class="{'border-myblue': element.active == true}" class="cursor-pointer shadow xl:pt-8 md:pt-4 pb-2 text-center rounded relative border border-transparent mb-4">
                    <span class="px-2 text-custom absolute top-0 left-0 font-medium">{{element.price}}</span>
                    <img v-if="element.active == true" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <main class="mb-8 text-center">
                        <img :src="element.image" class="w-20 h-20 object-cover inline">
                    </main>
                    <p class="text-sm mt-5" v-html="$store.state.language[element.name]"></p>
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