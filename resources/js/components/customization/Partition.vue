<template>
    <section>
        <h3 class="font-bold mb-4 text-xl text-gray-600">Partitiob or Modesty Panel</h3>
        <main class="flex -mx-2 text-center pb-10">
            <aside class="px-2 w-1/3">
                <div @click="setPart(1)" :class="{'border-myblue': $store.state.custom.partition == 1}" class="cursor-pointer py-4 border border-transparent rounded-md">
                    <img src="/images/rect/part1.png" alt="">
                    <p class="text-sm">
                        Sharp corners
                    </p>
                </div>
            </aside>
            <aside class="px-2 w-1/3">
                <div @click="setPart(2)" :class="{'border-myblue': $store.state.custom.partition == 2}" class="cursor-pointer py-4 border border-transparent rounded-md">
                    <img src="/images/rect/part2.png" alt="">
                    <p class="text-sm">
                        Combined corners
                    </p>
                </div>
            </aside>
        </main>
    </section>
</template>
<script>
export default {
    methods:{
        setPart(index){
            store.state.custom.partition = index
        }
    }
}
</script>
<style>
    
</style>