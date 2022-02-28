<template>
    <section>
        <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">Partition or Modesty Panel</h3>
        <main class="flex -mx-2 text-center pb-10">
            <aside class="px-2 w-1/3">
                <div @click="events.setter(1 , 'partition')" :class="{'border-myblue': $store.state.custom.partition == 1}" class="cursor-pointer py-4 border border-transparent rounded-md relative">
                    <img v-if="$store.state.custom.partition == 1" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <img src="/images/rect/part1.png" alt="">
                    <p class="text-sm">
                        Partition
                    </p>
                </div>
            </aside>
            <aside class="px-2 w-1/3">
                <div @click="events.setter(2 , 'partition')" :class="{'border-myblue': $store.state.custom.partition == 2}" class="cursor-pointer py-4 border border-transparent rounded-md relative">
                    <img v-if="$store.state.custom.partition == 2" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <img src="/images/rect/part2.png" alt="">
                    <p class="text-sm">
                        Modesty Panel
                    </p>
                </div>
            </aside>
        </main>
    </section>
</template>
<script>
export default {
    data(){
        return {
            events: Engine.Customization,
        }
    }
}
</script>