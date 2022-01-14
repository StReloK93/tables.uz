<template>
   <!-- Left part -->
   <section :class="{'w-full': leftBar}" class="w-1/2 relative" ref="room">
      <transition name="fade" mode="out-in">
         <main v-if="$store.state.onLoaded.toFixed() != 100" class="absolute h-full w-full flex items-center justify-center top-0 left-0 z-50 bg-indigo-900 text-white text-2xl font-bold">
            {{$store.state.onLoaded.toFixed()}} %
         </main>
      </transition>
      <main class="h-full">
         <Decorations v-if="$store.state.onLoaded.toFixed() == 100" class="absolute top-0 left-0"/>
         <!-- canvas -->
         <canvas class="w-full h-full outline-none" ref="canvas"></canvas>

         <button v-if="!$store.state.fullscreen" @click="requestFullScreen($refs.room)" class="zoom-button block  p-3 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20  hover:bg-opacity-100">
            <Icons icon="zoom"/>
         </button>
         <button v-if="$store.state.fullscreen"  @click="closeFullscreen()" class="zoom-button block p-3 bg-white rounded-lg bg-opacity-50 mb-3 xl:w-24 md:w-20 xl:h-24 md:h-20  hover:bg-opacity-100">
            Exit
         </button>
         <button v-if="leftBar" @click="setLeftBar(false)" class="absolute bg-gray-100 my-3 mx-5 px-3 py-2 inline-block rounded-full top-0 right-0 shadow">
            <img src="/images/left.png" class="relative" style="left: -1px">
         </button>
      </main>
   </section>
   <!-- Left part -->

   <!-- Configurator -->
   <section v-if="!leftBar" class="w-1/2 bg-white relative flex flex-col justify-between overflow-hidden">
      <!-- Header -->
      <main class="xl:px-10 md:px-5 pt-3 xl:pb-5 md:pb-3 shadow-custom bg-gray-50 xl:text-xl md:text-md">
         <aside class="flex justify-between xl:mb-5 md:mb-3">
            <button @click="setLeftBar(true)" class="bg-gray-100 px-3 py-2 inline-block rounded-full">
               <img src="/images/left.png" class="relative transform rotate-180" style="left: 2px">
            </button>
            <div class="uppercase flex items-center font-bold">
               <span @click="setLang('eng')" :class="{'text-blue-900':lang == 'eng'}"  class="text-gray-300 cursor-pointer">eng</span>
               <span class="px-2 relative text-blue-400" style="top: -1px">/</span>
               <span @click="setLang('gk')" :class="{'text-blue-900':lang == 'gk'}" class="text-gray-300 cursor-pointer">繁</span>
            </div>
         </aside>
         <router-link :to="{name: 'legstype'}" 
            :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': isActive }" 
            class="xl:text-2xl md:text-md capitalize text-gray-300 transition-all duration-300 ease-in-out block mb-2">
               {{$store.state.language.createYour}}
         </router-link>
         <router-link :to="{name: 'designs'}" 
            :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': !isActive }" 
            class="xl:text-2xl md:text-md capitalize text-gray-300 transition-all duration-300 ease-in-out block">
            {{$store.state.language.browseOur}}
         </router-link>
         <Configurator v-if="$store.state.configurator"/>
      </main>
      <!-- Header -->


      <!-- Pages  -->
      <router-view class="flex-grow overflow-hidden overflow-y-auto xl:px-10 md:px-5 xl:pt-8 md:pt-4" v-slot="{ Component }">
         <transition name="fade" mode="out-in">
            <component :is="Component" />
         </transition>
      </router-view>
      <!-- Pages -->


      <!-- Footer -->
      <main class="text-right xl:px-10 md:px-5 xl:py-7 md:py-4 bg-white shadow-custom">
         <button @click="$store.state.finished = true" class="xl:h-16 md:h-14 xl:w-52 md:w-40 bg-gray-400 hover:bg-green-700  xl:text-xl md:text-md text-center text-white rounded-xl">
            {{$store.state.language.getQuote}}
         </button>
      </main>
      <!-- Footer -->
   </section>

   <transition name="fade">
      <Finished v-if="$store.state.finished"/>
   </transition>
   

</template>
<script>
import Hotkeys from '../../global/hotkeys.js'
import initScene from '../../global/scene/initScene'
import Decorations from './Decorations.vue'
import Configurator from './Configurator.vue'
import Finished from './Finished.vue'
import Icons from './Icons.vue'
export default {
   data() {
      return {
         isActive: null,
         lang: 'eng',
         leftBar: false
      }
   },
   mounted(){
      window.Engine = initScene(this.$refs.canvas) 
      Hotkeys.loaderFile(this.$refs.room)
      if(localStorage.getItem('lang')){
         this.setLang(localStorage.getItem('lang'))
      }
   },
   computed:{
      requestFullScreen(){
         return Hotkeys.requestFullScreen
      },
      closeFullscreen(){
         return Hotkeys.closeFullscreen
      }
   },
   methods: {
      setLang(lang){
         this.lang = lang
         store.commit('setLang', lang)
      },
      setLeftBar(boolean){
         this.leftBar = boolean
         setTimeout(()=>{
            window.dispatchEvent(new Event('resize'))
         },10)
      }
   },
   watch:{
      $route (to){
         if(to.name == 'designs'){
            this.isActive = false
            store.commit('setConfigurator', false)
         }
         else{
            this.isActive = true
            store.commit('setConfigurator', true)
         }
      }
   },
   components:{
      Decorations,
      Configurator,
      Icons,
      Finished
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
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
.easy-transition{
   transition: .4s;
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