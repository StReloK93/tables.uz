<template>
    <section>
        <h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">Partition or Modesty Panel</h3>
        <main class="flex -mr-2 text-center justify-center">
            <aside class="mr-2 w-1/3">
                <div @click="setPart(1)" :class="{'border-myblue': $store.state.custom.partition == 1}" class="h-full py-2 border border-transparent rounded-md">
                    <img src="/images/rect/part1.png" class="w-10/12 inline">
                    <p class="leading-none">
                        Sharp <br> corners
                    </p>
                </div>
            </aside>
            <aside class="mr-2 w-1/3">
                <div @click="setPart(2)" :class="{'border-myblue': $store.state.custom.partition == 2}" class="h-full py-2 border border-transparent rounded-md">
                    <img src="/images/rect/part2.png" class="w-10/12 inline">
                    <p class="leading-none">
                        Combined <br> corners
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