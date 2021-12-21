<template>
    <section>
        <h3 class="font-bold mb-4 text-xl text-gray-600">Corners Finish</h3>
        <main class="flex -mx-3 text-center pb-10">
            <aside class="px-3 w-1/3">
                <div @click="$store.commit('setCorner', 1)" :class="{'border-myblue': $store.state.custom.corners == 1}" class="cursor-pointer p-4 border border-transparent rounded-md">
                    <img src="/images/rect/1.png" alt="">
                    <p class="text-sm mt-5">
                        Sharp corners
                    </p>
                </div>
            </aside>
            <aside class="px-3 w-1/3">
                <div @click="$store.commit('setCorner', 2)" :class="{'border-myblue': $store.state.custom.corners == 2}" class="cursor-pointer p-4 border border-transparent rounded-md">
                    <img src="/images/rect/2.png" alt="">
                    <p class="text-sm mt-5">
                        Combined corners
                    </p>
                </div>
            </aside>
            <aside class="px-3 w-1/3">
                <div @click="$store.commit('setCorner', 3)" :class="{'border-myblue': $store.state.custom.corners == 3}" class="cursor-pointer p-4 border border-transparent rounded-md">
                    <img src="/images/rect/3.png" alt="">
                    <p class="text-sm mt-5">
                        Round corners
                    </p>
                </div>
            </aside>
        </main>
    </section>
</template>
<script>
export default {
    methods:{

    }
}
</script>
<style>
    
</style>