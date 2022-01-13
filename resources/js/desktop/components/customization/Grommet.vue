<template>
    <section>
        <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">Grommet Holes</h3>
        <main class="flex -mr-2 text-center pb-10">
            <aside class="pr-2 w-1/3">
                <div @click="setGrommet(1)" :class="{'border-myblue': $store.state.custom.grommet == 1}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 text-center relative border border-transparent">
                    <img v-if="$store.state.custom.grommet == 1" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <main class="mb-8">
                        <svg class="inline scaling" width="111" height="76" viewBox="0 0 111 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="109" height="74" rx="15" stroke="#494949" stroke-width="2"/>
                        <rect x="39.5" y="13.5" width="32" height="10" stroke="#494949"/>
                        </svg>
                    </main>
                    <main  class="mb-8">
                        <svg class="inline scaling" width="111" height="75" viewBox="0 0 111 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M110 59C110 67.2843 103.284 74 95 74L16 74C7.71573 74 1.00001 67.2843 1.00001 59L1 1L110 0.999992L110 59Z" stroke="#494949" stroke-width="2"/>
                        <rect x="39.5" y="12.5" width="32" height="11" stroke="#494949"/>
                        </svg>
                    </main>
                    <main  class="mb-8">
                        <svg class="inline scaling" width="111" height="77" viewBox="0 0 111 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="109" height="75" stroke="#494949" stroke-width="2"/>
                        <rect x="39.5" y="14.5" width="32" height="10" stroke="#494949"/>
                        </svg>
                    </main>
                    <p class="text-sm mt-5">
                        Wooden Flippers
                    </p>
                </div>
            </aside>
            <aside class="pr-2 w-1/3">
                <div @click="setGrommet(2)" :class="{'border-myblue': $store.state.custom.grommet == 2}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 border border-transparent relative">
                    <img v-if="$store.state.custom.grommet == 2" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <main class="mb-8">
                        <svg class="inline scaling" width="111" height="76" viewBox="0 0 111 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="109" height="74" rx="15" stroke="#494949" stroke-width="2"/>
                        <rect x="45.5" y="13.5" width="20" height="10" stroke="#494949"/>
                        </svg>
                    </main>
                    <main  class="mb-8">
                        <svg class="inline scaling" width="111" height="75" viewBox="0 0 111 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M110 59C110 67.2843 103.284 74 95 74L16 74C7.71573 74 1.00001 67.2843 1.00001 59L1 1L110 0.999992L110 59Z" stroke="#494949" stroke-width="2"/>
                        <rect x="45.5" y="13.5" width="20" height="10" stroke="#494949"/>
                        </svg>
                    </main>
                    <main  class="mb-8">
                        <svg class="inline scaling" width="111" height="77" viewBox="0 0 111 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="109" height="75" stroke="#494949" stroke-width="2"/>
                        <rect x="45.5" y="13.5" width="20" height="10" stroke="#494949"/>
                        </svg>
                    </main>
                    <p class="text-sm mt-5">
                        Plastic Flippers
                    </p>
                </div>
            </aside>
            <aside class="pr-2 w-1/3">
                <div @click="setGrommet(3)" :class="{'border-myblue': $store.state.custom.grommet == 3}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 border border-transparent relative">
                    <img v-if="$store.state.custom.grommet == 3" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20">
                    <main class="mb-8">
                        <svg class="inline scaling" width="111" height="76" viewBox="0 0 111 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="109" height="74" rx="15" stroke="#494949" stroke-width="2"/>
                        <rect x="38.5" y="1.5" width="34" height="12" stroke="#494949"/>
                        </svg>
                    </main>
                    <main  class="mb-8">
                        <svg class="inline scaling" width="111" height="75" viewBox="0 0 111 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M110 59C110 67.2843 103.284 74 95 74L16 74C7.71573 74 1.00001 67.2843 1.00001 59L1 1L110 0.999992L110 59Z" stroke="#494949" stroke-width="2"/>
                        <rect x="38.5" y="1.5" width="34" height="12" stroke="#494949"/>
                        </svg>
                    </main>
                    <main  class="mb-8">
                        <svg class="inline scaling" width="111" height="77" viewBox="0 0 111 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="109" height="75" stroke="#494949" stroke-width="2"/>
                        <rect x="38.5" y="1.5" width="34" height="12" stroke="#494949"/>
                        </svg>
                    </main>
                    <p class="text-sm mt-5">
                        Melamine Flippers
                    </p>
                </div>
            </aside>
        </main>
    </section>
</template>
<script>
export default {
    methods:{
        setGrommet(index){
            if(index == store.state.custom.grommet){
                return store.state.custom.grommet = 0
            }
            store.state.custom.grommet = index
        }
    }
}
</script>
<style scoped>
    .scaling{
        transform: scale(1.2);
    }
</style>
