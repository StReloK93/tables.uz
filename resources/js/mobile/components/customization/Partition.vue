<template>
    <section>
        <h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">Partition or Modesty Panel</h3>
        <main class="flex -mr-2 text-center justify-center">
            <aside class="mr-2 w-1/3">
                <div @click="events.setter(1 , 'partition')" :class="{'border-myblue': $store.state.custom.partition == 1}" class="h-full py-2 border border-transparent rounded-md relative">
                    <img v-if="$store.state.custom.partition == 1" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <img src="/images/rect/part1.png" class="w-10/12 inline">
                    <p class="leading-none">
                        Partition
                    </p>
                </div>
            </aside>
            <aside class="mr-2 w-1/3">
                <div @click="events.setter(2 , 'partition')" :class="{'border-myblue': $store.state.custom.partition == 2}" class="h-full py-2 border border-transparent rounded-md relative">
                    <img v-if="$store.state.custom.partition == 2" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <img src="/images/rect/part2.png" class="w-10/12 inline">
                    <p class="leading-none">
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
        return{
            events: Engine.Customization
        }
    }
}
</script>