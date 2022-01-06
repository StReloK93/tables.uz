<template>
   <!-- Canvas -->
   <section class="h-3/5 relative" ref="room">
      <Preloader />
      <main class="h-full">
         <Decorations v-if="$store.state.onLoaded.toFixed() == 100"/>
         <canvas class="w-full h-full outline-none" ref="canvas"></canvas>
      </main>
   </section>

    <!-- Configurator -->
   <section class="h-2/5 bg-white relative flex flex-col justify-between">

      <aside class="counter text-xs px-6 py-1 color-title font-medium rounded-md  shadow-xl z-40">
         {{$store.state.currentPage}}
         <img src="/images/slash.png" class="w-3 inline-block mx-1 relative" style="top:1px">
         {{$store.state.maxPage}}
      </aside>

      <main class="overflow-hidden flex-grow px-1 flex items-center">
         <!-- router -->
         <router-view class="w-full h-full relative"></router-view>
      </main>
      <Menu/>
      
      <transition name="fade">
         <Other v-if="$store.state.other"/>
      </transition>
   </section>
</template>

<script>
import Preloader from './Preload.vue'
import initScene from '../../global/scene/initScene'
import Decorations from './Decorations.vue'
import Menu from './Menu.vue'
import Icons from './Icons.vue'
import Other from './Other.vue'
export default {
   components:{Decorations,Preloader,Icons,Menu,Other},
   mounted(){
      window.Engine = initScene(this.$refs.canvas)
   }
}
</script>
<style src="../mobile.css"></style>