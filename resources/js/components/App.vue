<template>
   <section class="w-1/2 relative">
      <Decorations class="absolute top-0 left-0"/>
      <!-- <canvas class="w-full h-full outline-none" ref="canvas"></canvas> -->
      <img src="/fon.png" class="h-full w-full object-cover">
   </section>
   <section class="w-1/2 p-10 pt-0 bg-white relative">
      <main class="-mx-10 px-10 py-6 shadow-xl bg-gray-50 text-xl">
         <aside class="flex justify-between mb-2">
            <router-link to="/" 
            :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': isActive }" 
            class="text-2xl capitalize text-gray-300 transition-all duration-300 ease-in-out">
                  create your own interior
            </router-link>
            <div class="uppercase flex items-center font-bold">
                  <span class="text-blue-900">eng</span>
                  <span class="px-2 relative text-blue-400" style="top: -1px">/</span>
                  <span class="text-gray-300">繁</span>
            </div>
         </aside>
         <router-link to="/designs" 
            :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': !isActive }" 
            class="text-2xl capitalize text-gray-300 transition-all duration-300 ease-in-out">
            Browse Our Suggested Design
         </router-link>
         <Configurator v-if="$store.state.configurator"/>
      </main>
      <router-view v-slot="{ Component }">
         <transition name="fade" mode="out-in">
            <component :is="Component" />
         </transition>
      </router-view>

      <main class="text-right absolute bottom-0 left-0 p-10 w-full border-t border-gray-200">
         <button class="h-16 w-52 bg-gray-400 hover:bg-red-500  text-xl text-center text-white rounded-xl">
            Get a Quote
         </button>
      </main>
   </section>
</template>
<script>
import initScene from '../scene/initScene'
import Decorations from './Decorations.vue'
import Configurator from './Configurator.vue'
export default {
   components:{
      Decorations,
      Configurator
   },
   data() {
      return {
         isActive: null
      }
   },
   mounted(){
      // initScene(this.$refs.canvas)
   },
   watch:{
      $route (to, from){
         if(to.name == 'designs'){
            this.isActive = false
            this.$store.commit('setConfigurator', false)
         }
         else{
            this.isActive = true
            this.$store.commit('setConfigurator', true)
         }
      }
   } 
}
</script>
<style>
   .bg-my{
      background-color: #3F4D74;
   }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>