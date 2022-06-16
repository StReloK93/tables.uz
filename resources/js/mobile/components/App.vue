<template>
   <!-- Canvas -->
   <section class="h-3/5 relative" ref="room">
      <Preloader />
      <transition name="fade">
         <main v-if="information" class="fixed text-justify right-0 top-0 p-3 bg-white text-gray-600 w-full h-full z-50">
            <div class="text-right">
               <button @click="information = false">
                  <img src="/images/cancel.png" class="filter grayscale w-4">
               </button>
            </div>
            <h3 class="font-bold text-gray-700 text-xl mb-1.5">
               {{$store.state.language.disclaimer}}
            </h3>
            <p>
               {{$store.state.language.disclaydesc}}
            </p>
            <h3 class="font-bold text-gray-700 text-xl my-1.5">
              {{$store.state.language.terms}}
            </h3>
            <p>
               {{$store.state.language.termsdesc}}
            </p>
         </main>
      </transition>
      <main class="zoom-button pb-4">
         <transition name="elit" mode="out-in">
            <aside v-if="$store.state.activeMesh" class="flex items-center">
               <div @click="engine.setChairColor('#A9926D')" class="w-10 h-10">
                  <img src="/images/1.jpg" class="w-full rounded-full shadow">
               </div>
               <div @click="engine.setChairColor('#868582')" class="ml-2 w-10 h-10">
                  <img src="/images/2.jpg" class="w-full rounded-full shadow">
               </div>
            </aside>
            <aside v-else class="flex items-center">
               <a href="https://www.youtube.com/channel/UCxyMrRPv0213-OEVXzQxvNg" class="mx-2" target="_blank">
                  <img src="/images/youtube.png" class="w-10 filter grayscale">
               </a>
               <div class="text-center relative">
                  <img @click="information = true" src="/images/information.png" class="filter grayscale w-10 inline cursor-pointer">
               </div>
            </aside>
         </transition>
      </main>
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
      <Menu />
      
      <transition name="fade">
         <Other v-if="$store.state.other"/>
      </transition>
      <transition name="fade">
         <Finished v-if="$store.state.finished"/>
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
import Finished from './Finished.vue'
export default {
   data() {
      return {
         information: false,
      }
   },
   components:{Decorations,Preloader,Icons,Menu,Other,Finished},
   mounted(){
      window.Engine = initScene(this.$refs.canvas)
      this.engine = Engine.Meshes
   },

}
</script>
<style src="../mobile.css"></style>