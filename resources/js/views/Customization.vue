<template>
    <section>
		<main>
			<h3 class="font-bold mb-4 text-xl text-gray-600">Customization</h3>
            <aside class="flex justify-between">
                <button @click="customPages(1)" :class="{'border-blue-900': $store.state.customActiveLink == 1}" class="border-b-4 border-white px-1 py-4 hover:border-blue-900">
                    Corners Finish
                </button>
                <button @click="customPages(2)" :class="{'border-blue-900': $store.state.customActiveLink == 2}" class="border-b-4 border-white px-1 py-4 hover:border-blue-900">
                    Grommet Holes
                </button>
                <button @click="customPages(3)" :class="{'border-blue-900': $store.state.customActiveLink == 3}" class="border-b-4 border-white px-1 py-4 hover:border-blue-900">
                    Partition or Modesty Panel
                </button>
                <button @click="customPages(4)" :class="{'border-blue-900': $store.state.customActiveLink == 4}" class="border-b-4 border-white px-1 py-4 hover:border-blue-900">
                    Accessories
                </button>
                <button @click="customPages(5)" :class="{'border-blue-900': $store.state.customActiveLink == 5}" class="border-b-4 border-white px-1 py-4 hover:border-blue-900">
                    Chair
                </button>
            </aside>
		</main>
        <main class="-mx-10 border-t border-gray-300 px-10 pt-10">
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