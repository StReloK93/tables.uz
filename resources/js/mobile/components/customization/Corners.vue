<template>
    <section class="px-2">
        <h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">{{$store.state.language.corners}}</h3>
        <main class="flex -mr-2 text-center">
            <aside class="mr-2 w-1/3">
                <div @click="events.setCorner(1)" :class="{'border-myblue': $store.state.custom.corners == 1}" class="cursor-pointer h-full rounded-md p-2 border border-transparent">
                    <img src="/images/rect/1.png" alt="">
                    <p class="text-sm mt-2 leading-none">
                        {{$store.state.language.sharp}}
                    </p>
                </div>
            </aside>
            <aside class="mr-2 w-1/3">
                <div @click="events.setCorner(2)" :class="{'border-myblue': $store.state.custom.corners == 2}" class="cursor-pointer h-full rounded-md p-2 border border-transparent">
                    <img src="/images/rect/2.png" alt="">
                    <p class="text-sm mt-2 leading-none">
                        {{$store.state.language.combined}}
                    </p>
                </div>
            </aside>
            <aside class="mr-2 w-1/3">
                <div @click="events.setCorner(3)" :class="{'border-myblue': $store.state.custom.corners == 3}" class="cursor-pointer h-full rounded-md p-2 border border-transparent">
                    <img src="/images/rect/3.png" alt="">
                    <p class="text-sm mt-2 leading-none">
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
        return{
            events: Engine.Legs
        }
    }
}
</script>