<template>
   <!-- Canvas -->
   <section class="h-3/5 relative" ref="room">
      <Preloader />
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
               <button>
                  <img src="/images/dif.png" class="w-10">
               </button>
               <a href="https://www.youtube.com/channel/UCxyMrRPv0213-OEVXzQxvNg" class="mx-2" target="_blank">
                  <img src="/images/youtube.png" class="w-10">
               </a>
               <!-- <div @click="information = !information" class="text-center relative">
                     <img src="/images/information.png" class="gray w-10 inline cursor-pointer">
                     <transition name="fade">
                     <main v-if="information" class="text-left after absolute bottom-cus right-0 p-3 bg-white text-gray-600 w-96 border-b-2 border-blue-500">
                        <span class="font-bold text-gray-700">Disclaimer:</span> The colors and graphics used in the Customizer are computer 
                        generated and hence we hold no responsibility of the accuracy of the color 
                        and material difference that may occur when compared to the real items.
                        If you have any concerns regarding the accuracy of colors or materials
                        used here please feel free to contact us directly for more details.
                        <br>
                        <span class="font-bold text-gray-700">Terms and conditions:</span>
                        All content shown is a digital property of 
                        Blueocean International (HK) Ltd., any unauthorized use or copy of our 
                        content will be considered infringement of our intellectual property.
                     </main>
                     </transition>
               </div> -->
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
      <Menu/>
      
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
   }
}
</script>
<style src="../mobile.css"></style>