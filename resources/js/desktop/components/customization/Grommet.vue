<template>
    <section>
        <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">Grommet Holes</h3>
        <main class="flex -mr-2 text-center pb-10">
            <aside class="pr-2 w-1/3">
                <div @click="events.setHole(null)" :class="{'border-myblue': $store.state.custom.grommet == null}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 text-center relative border border-transparent">
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
                    <main  class="mb-8">
                        <svg class="inline scaling" xmlns="http://www.w3.org/2000/svg" width="111" height="77" fill="none" style=""><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
                        <g class="currentLayer" style=""><title>Layer 1</title><rect x="1" y="1" width="109" height="75" stroke="#494949" stroke-width="2" id="svg_1" class="selected"/><path fill="" fill-opacity="1" stroke="#494949" stroke-dasharray="none" stroke-linejoin="miter" stroke-linecap="butt" fill-rule="nonzero" d="M47.71428561210632,18.428571462631226 C47.71428561210632,14.008681959868795 51.29439610934389,10.428571462631226 55.71428561210632,10.428571462631226 C60.134175114868754,10.428571462631226 63.71428561210632,14.008681959868795 63.71428561210632,18.428571462631226 C63.71428561210632,22.848460965393656 60.134175114868754,26.428571462631226 55.71428561210632,26.428571462631226 C51.29439610934389,26.428571462631226 47.71428561210632,22.848460965393656 47.71428561210632,18.428571462631226 z"/></g>
                        </svg>
                    </main>
                    <p class="text-sm mt-5">
                        Circular holes
                    </p>
                </div>
            </aside>
            <aside class="pr-2 w-1/3">
                <div @click="events.setHole('circularedges')" :class="{'border-myblue': $store.state.custom.grommet == 'circularedges'}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 border border-transparent relative">
                    <main  class="mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="111" height="77" fill="none" class="inline scaling">
                        <rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
                            <g class="currentLayer" style="">
                            <rect x="1" y="1.1036269441246986" width="109" height="75" stroke="#494949" stroke-width="2" id="svg_1" class="selected"/>
                            <path stroke="#494949" d="M11.75573543459177,17.18504812568426 C11.75573543459177,12.765158622921831 15.33584593182934,9.185048125684261 19.75573543459177,9.185048125684261 C24.1756249373542,9.185048125684261 27.75573543459177,12.765158622921831 27.75573543459177,17.18504812568426 C27.75573543459177,21.60493762844669 24.1756249373542,25.18504812568426 19.75573543459177,25.18504812568426 C15.33584593182934,25.18504812568426 11.75573543459177,21.60493762844669 11.75573543459177,17.18504812568426 z"/>
                            <path stroke="#494949" d="M82.94744718074799,17.08142013847828 C82.94744718074799,12.661530635715849 86.52755767798556,9.081420138478281 90.94744718074799,9.081420138478281 C95.36733668351042,9.081420138478281 98.94744718074799,12.661530635715849 98.94744718074799,17.08142013847828 C98.94744718074799,21.50130964124071 95.36733668351042,25.08142013847828 90.94744718074799,25.08142013847828 C86.52755767798556,25.08142013847828 82.94744718074799,21.50130964124071 82.94744718074799,17.08142013847828 z"/>
                            </g>
                        </svg>
                    </main>
                    <p class="text-sm mt-5">
                        Two Circular holes
                    </p>
                </div>
            </aside>
            <aside class="pr-2 w-1/3">
                <div @click="events.setHole('rectangular')" :class="{'border-myblue': $store.state.custom.grommet == 'rectangular'}" class="cursor-pointer xl:pt-8 md:pt-4 pb-2 border border-transparent relative">
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
