<template>
    <section>
        <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">Accessories</h3>
        <main class="flex -mx-2 text-center pb-10 flex-wrap">
            <aside v-for="(element,index) in $store.state.accessories" :key="index" class="px-2 w-1/3">
                <div @click="events.setter(index + 1, 'accessories')" :class="{'border-myblue': $store.state.custom.accessories == index + 1}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 text-center rounded relative border border-transparent mb-4">
                    <img v-if="$store.state.custom.accessories == index + 1" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <main class="mb-8 text-center">
                        <img :src="element.image" class="w-20 h-20 object-cover inline">
                    </main>
                    <p class="text-sm mt-5">
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