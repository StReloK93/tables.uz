<template>
    <section>
        <transition name="fade" mode="out-in">
            <main class="miniRoutes" v-show="$store.state.currentPage == 1">
                <Corners/>
            </main>
        </transition>
        <transition name="fade" mode="out-in">
            <main class="miniRoutes" v-show="$store.state.currentPage == 2">
                <Grommet/>
            </main>
        </transition>
        <transition name="fade" mode="out-in">
            <main class="miniRoutes" v-show="$store.state.currentPage == 3">
                <Partition/>
            </main>
        </transition>
        <transition name="fade" mode="out-in">
            <main class="miniRoutes" v-show="$store.state.currentPage == 4">
                <Accessories/>
            </main>
        </transition>
        <transition name="fade" mode="out-in">
            <main class="miniRoutes" v-show="$store.state.currentPage == 5">
                <Chair/>
            </main>
        </transition>
    </section>
</template>
<script>
import Corners from '../components/customization/Corners.vue'
import Chair from '../components/customization/Chair.vue'
import Grommet from '../components/customization/Grommet.vue'
import Partition from '../components/customization/Partition.vue'
import Accessories from '../components/customization/Accessories.vue'
export default {
    mounted() {
        store.commit('setRoute')
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