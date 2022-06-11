<template>
    <section>
		<main>
			<h3 class="font-bold xl:mb-2 xl:text-xl md:text-md text-gray-600">{{$store.state.language.customization}}</h3>
            <aside class="flex justify-between md:text-xs xl:text-sm">
                <button @click="customPages(1)" :class="{'border-blue-900': $store.state.customActiveLink == 1}" class="border-b-2 border-white px-1 py-4 hover:border-blue-900">
                    {{$store.state.language.corners}}
                </button>
                <button @click="customPages(2)" :class="{'border-blue-900': $store.state.customActiveLink == 2}" class="border-b-2 border-white px-1 py-4 hover:border-blue-900">
                    {{$store.state.language.grommet}}
                </button>
                <button @click="customPages(3)" :class="{'border-blue-900': $store.state.customActiveLink == 3}" class="border-b-2 border-white px-1 py-4 hover:border-blue-900">
                    {{$store.state.language.partition}}
                </button>
                <button @click="customPages(4)" :class="{'border-blue-900': $store.state.customActiveLink == 4}" class="border-b-2 border-white px-1 py-4 hover:border-blue-900">
                    {{$store.state.language.accessories}}
                </button>
                <button @click="customPages(5)" :class="{'border-blue-900': $store.state.customActiveLink == 5}" class="border-b-2 border-white px-1 py-4 hover:border-blue-900">
                    {{$store.state.language.chairs}}
                </button>
            </aside>
		</main>
        <main class="border-t border-gray-300 xl:pt-6 md:pt-4">
            <transition name="fade" mode="out-in">
                <Corners v-if="$store.state.customActiveLink == 1" />
                <Grommet v-else-if="$store.state.customActiveLink == 2" />
                <Partition v-else-if="$store.state.customActiveLink == 3" />
                <Accessories v-else-if="$store.state.customActiveLink == 4" />
                <Chair v-else-if="$store.state.customActiveLink == 5" />
            </transition>
        </main>
    </section>
</template>
<script>
import Corners from '../components/customization/Corners.vue'
import Chair from '../components/customization/Chair.vue'
import Grommet from '../components/customization/Grommet.vue'
import Partition from '../components/customization/Partition.vue'
import Accessories from '../components/customization/Accessories.vue'
export default {
    methods: {
        customPages(page){
            this.$store.state.customActiveLink = page
        }
    },
    components:{
        Corners,
        Chair,
        Grommet,
        Partition,
        Accessories
    }
}
</script>