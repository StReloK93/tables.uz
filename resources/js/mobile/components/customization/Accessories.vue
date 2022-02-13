<template>
    <section class="text-center">
        <h3 class="color-title font-medium text-xl  mb-2 text-gray-600">Accessories</h3>
        <main class="whitespace-nowrap px-1 py-3 overflow-hidden overflow-x-scroll noscroll">
            <aside v-for="(element,index) in $store.state.accessories" :key="index" class="pr-2 w-40 inline-block">
                <div @click="events.setAccessories(index + 1)" :class="{'border-myblue': $store.state.custom.accessories == index + 1}" class="flex flex-col px-2 py-4 rounded-md border border-transparent relative">
                    <img v-if="$store.state.custom.accessories == index + 1" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <aside class="w-full text-center">
                        <img :src="element.image" class="w-16 h-16 object-cover inline">
                    </aside>
                    <p class="text-xs">
                        {{element.name}}
                    </p>
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
<style scoped>
    .scaling{
        transform: scale(1.2);
    }
</style>
