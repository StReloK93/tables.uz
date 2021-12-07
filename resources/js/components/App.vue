<template>
   <!-- Left part -->
   <section class="w-1/2 relative" ref="room">
      <Decorations v-if="$store.state.onLoaded" class="absolute top-0 left-0"/>
      <canvas class="w-full h-full outline-none" ref="canvas"></canvas>
      <button v-if="!$store.state.fullscreen" @click="requestFullScreen($refs.room)" class="zoom-button  py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 hover:bg-opacity-100">
         <Icons icon="zoom"/>
      </button>
      <button v-if="$store.state.fullscreen" @click="closeFullscreen()" class="zoom-button py-3 px-1 bg-white rounded-lg bg-opacity-50 mb-3 w-24 h-24 hover:bg-opacity-100">
         Exit
      </button>
   </section>
   <!-- Left part -->


   <!-- Configurator -->
   <section class="w-1/2 bg-white relative flex flex-col justify-between overflow-hidden">

      <!-- Header -->
      <main class="px-10 pt-3 pb-5 shadow-custom bg-gray-50 text-xl">
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
      <!-- <main class="text-right p-10 bg-white shadow-custom">
         <button class="h-16 w-52 bg-gray-400 hover:bg-red-500  text-xl text-center text-white rounded-xl">
            Get a Quote
         </button>
      </main> -->
      <!-- Footer -->
   </section>
</template>
<script>
import Hotkeys from '../hotkeys'
import initScene from '../scene/initScene'
import Decorations from './Decorations.vue'
import Configurator from './Configurator.vue'
import Icons from './Icons.vue'
export default {
   components:{
      Decorations,
      Configurator,
      Icons
   },
   data() {
      return {
         isActive: null,
      }
   },
   mounted(){
      window.Engine = initScene(this.$refs.canvas) 
      Hotkeys.loaderFile(this.$refs.room)
      
   },
   computed:{
      requestFullScreen(){
         return Hotkeys.requestFullScreen
      },
      closeFullscreen(){
         return Hotkeys.closeFullscreen
      }
   },
   watch:{
      $route (to, from){
         if(to.name == 'designs'){
            this.isActive = false
            store.commit('setConfigurator', false)
         }
         else{
            this.isActive = true
            store.commit('setConfigurator', true)
         }
      }
   } 
}
</script>
<style>
.zoom-button{
   position: absolute;
   left: 50%;
   bottom: 0;
   transform: translateX(-50%);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}
#embed-host input,#embed-host select{
   color: #333;
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
   box-shadow: 0 0 15px 0 #dcdcdc;
}

.border-myblue{
   border-color: #3DB7F6;
}

.shadow-blue{
   box-shadow: 0 0 0px 2px #3db7f6;
}
*[unselectable=on] {
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
     user-select: none;
}
</style>