<template>
    <section>
        <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">{{$store.state.language.corners}}</h3>
        <main class="flex -mx-3 text-center pb-10">
            <aside class="px-3 w-1/3">
                <div @click="events.setCorner(1)" :class="{'border-myblue': $store.state.custom.corners == 1}" class="cursor-pointer xl:p-4 md:p-2 border border-transparent">
                    <img src="/images/rect/1.png" alt="">
                    <p class="text-sm mt-5">
                        {{$store.state.language.sharp}}
                    </p>
                </div>
            </aside>
            <aside class="px-3 w-1/3">
                <div @click="events.setCorner(2)" :class="{'border-myblue': $store.state.custom.corners == 2}" class="cursor-pointer xl:p-4 md:p-2 border border-transparent">
                    <img src="/images/rect/2.png" alt="">
                    <p class="text-sm mt-5">
                        {{$store.state.language.combined}}
                    </p>
                </div>
            </aside>
            <aside class="px-3 w-1/3">
                <div @click="events.setCorner(3)" :class="{'border-myblue': $store.state.custom.corners == 3}" class="cursor-pointer xl:p-4 md:p-2 border border-transparent">
                    <img src="/images/rect/3.png" alt="">
                    <p class="text-sm mt-5">
                        {{$store.state.language.round}}
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
            events: Engine.Legs,
        }
    }
}
</script>