<template>
    <section>
        <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">Grommet Holes</h3>
        <main class="flex -mr-2 text-center pb-10">
            <aside class="pr-2 w-1/3">
                <div @click="events.setHole(null)" :class="{'border-myblue': $store.state.custom.grommet == null}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 text-center relative border border-transparent">
                    <!-- <main class="mb-8">
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
                    </main> -->
                    <main  class="mb-8">
                        <svg class="inline scaling" width="111" height="77" viewBox="0 0 111 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="109" height="75" stroke="#494949" stroke-width="2"/>
                        </svg>
                    </main>

                    <p class="text-sm mt-5">
                        Without holes
                    </p>
                </div>
            </aside>
            <aside class="pr-2 w-1/3">
                <div @click="events.setHole('circular')" :class="{'border-myblue': $store.state.custom.grommet == 'circular'}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 border border-transparent relative">
                    <!-- <main class="mb-8">
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
                    </main> -->
                    <main  class="mb-8">
                        <svg class="inline scaling" xmlns="http://www.w3.org/2000/svg" width="111" height="77" fill="none" style=""><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
                        <g class="currentLayer" style=""><title>Layer 1</title><rect x="1" y="1" width="109" height="75" stroke="#494949" stroke-width="2" id="svg_1" class="selected"/><path fill="" fill-opacity="1" stroke="#494949" stroke-opacity="1" stroke-width="1" stroke-dasharray="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-dashoffset="" fill-rule="nonzero" opacity="1" marker-start="" marker-mid="" marker-end="" d="M47.71428561210632,18.428571462631226 C47.71428561210632,14.008681959868795 51.29439610934389,10.428571462631226 55.71428561210632,10.428571462631226 C60.134175114868754,10.428571462631226 63.71428561210632,14.008681959868795 63.71428561210632,18.428571462631226 C63.71428561210632,22.848460965393656 60.134175114868754,26.428571462631226 55.71428561210632,26.428571462631226 C51.29439610934389,26.428571462631226 47.71428561210632,22.848460965393656 47.71428561210632,18.428571462631226 z" id="svg_3" class=""/></g></svg>
                    </main>
                    <p class="text-sm mt-5">
                        Circular holes
                    </p>
                </div>
            </aside>
            <aside class="pr-2 w-1/3">
                <div @click="events.setHole('rectangular')" :class="{'border-myblue': $store.state.custom.grommet == 'rectangular'}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 border border-transparent relative">
                    <!-- <img v-if="$store.state.custom.grommet == 'rectangular'" src="/images/true.jpg" class="w-6 -m-3 absolute top-0 right-0 z-20"> -->
                    <!-- <main class="mb-8">
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
                    </main> -->
                    <main  class="mb-8">
                        <svg class="inline scaling" width="111" height="77" viewBox="0 0 111 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="109" height="75" stroke="#494949" stroke-width="2"/>
                        <rect x="39.5" y="14.5" width="32" height="10" stroke="#494949"/>
                        </svg>
                    </main>
                    <p class="text-sm mt-5">
                        Rectangular holes
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
            events: Engine.Legs,
        }
    }
}
</script>
<style scoped>
    .scaling{
        transform: scale(1.2);
    }
</style>
