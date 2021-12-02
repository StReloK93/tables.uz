<template>
   <!-- Left part -->
   <section class="w-1/2 relative fullScreen">
      <!-- <Decorations class="absolute top-0 left-0"/> -->
      <canvas class="w-full h-full outline-none" ref="canvas"></canvas>
   </section>
   <!-- Left part -->


   <!-- Configurator -->
   <section class="w-1/2 bg-white relative flex flex-col justify-between">

      <!-- Header -->
      <main class="px-10 pt-3 pb-5 shadow-md bg-gray-50 text-xl">
         <aside class="flex justify-between mb-5">
            <button class="bg-gray-100 px-3 py-2 inline-block rounded-full">
               <img src="/images/left.png" class="relative" style="left: -1px">
            </button>
            <div class="uppercase flex items-center font-bold">
                  <span class="text-blue-900">eng</span>
                  <span class="px-2 relative text-blue-400" style="top: -1px">/</span>
                  <span class="text-gray-300">繁</span>
            </div>
         </aside>
         <router-link to="/" 
            :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': isActive }" 
            class="text-2xl capitalize text-gray-300 transition-all duration-300 ease-in-out block mb-2">
               create your own interior
         </router-link>
         <router-link to="/designs" 
            :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': !isActive }" 
            class="text-2xl capitalize text-gray-300 transition-all duration-300 ease-in-out block">
            Browse Our Suggested Design
         </router-link>
         <Configurator v-if="$store.state.configurator"/>
      </main>
      <!-- Header -->



      <!-- Pages  -->
      <router-view class="flex-grow overflow-hidden overflow-y-auto px-10 pt-8" v-slot="{ Component }">
         <transition name="fade" mode="out-in">
            <component :is="Component" />
         </transition>
      </router-view>
      <!-- Pages -->




      <!-- Footer -->
      <main class="text-right p-10 border-t border-gray-200 bg-white shadow-custom hidden">
         <button class="h-16 w-52 bg-gray-400 hover:bg-red-500  text-xl text-center text-white rounded-xl">
            Get a Quote
         </button>
      </main>
      <!-- Footer -->
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
      window.Engine = initScene(this.$refs.canvas)
      window.onkeyup = (event)=>{
         if(event.keyCode == 107){
            const scene = Engine.scene.get()
            if(this.$store.state.inspector){
                scene.debugLayer.show({
                    embedMode: true,
                });
            }
            else{
                scene.debugLayer.hide()
            }
            this.$store.state.inspector = !this.$store.state.inspector
         }
      }
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
.fullScreen{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 10;
}
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


.heigth-anim-enter-active,
.heigth-anim-leave-active {
  transition: opacity 0.5s ease, height 0.5s ease;
  max-height: 0px;
}


.heigth-anim-enter-from,
.heigth-anim-leave-to {
  opacity: 0;
  max-height: 300px;
}

*::-webkit-scrollbar,
html *::-webkit-scrollbar {
  height: 3px;
  width: 3px;
}
*::-webkit-scrollbar-track,
html *::-webkit-scrollbar-track {
  background: #ccc;
}
*::-webkit-scrollbar-thumb,
html *::-webkit-scrollbar-thumb {
  background-color: #3DB7F6;
}

.shadow-custom{
   box-shadow: 0 0 7px 0 #d4d4d4;
}
</style>