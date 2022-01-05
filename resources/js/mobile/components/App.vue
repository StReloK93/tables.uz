<template>
   <!-- Left part -->
   <section class="h-3/5 relative" ref="room">
      <transition name="fade" mode="out-in">
         <main v-if="$store.state.onLoaded.toFixed() != 100" class="absolute h-full w-full flex items-center justify-center top-0 left-0 z-30 bg-indigo-900 text-white text-2xl font-bold">
            {{$store.state.onLoaded.toFixed()}} %
         </main>
      </transition>
      <main class="h-full">
         <Decorations v-if="$store.state.onLoaded.toFixed() == 100" class="absolute top-0 left-0"/>
         <canvas class="w-full h-full outline-none" ref="canvas"></canvas>
      </main>
   </section>


   <section class="h-2/5 bg-white relative flex flex-col justify-between">
      <aside class="counter px-6 rounded py-1 shadow-xl z-40">
         1 <span class="relative text-sm px-1" style="top: -1px">/</span> 3
      </aside>
      <main class="overflow-hidden flex-grow flex items-center">
         <router-view class="w-full"></router-view>
      </main>
      <main class="flex text-center text-white">
         <div class="w-1/4 bg-my py-3 hover:bg-green-700 border-r border-white flex justify-center items-center">
            <img src="/images/leftmob.png" style="filter: brightness(0) invert(1)" class="w-1/4">
         </div>
         <div @click="toggleMenu(true)" class="w-2/4 bg-my flex hover:bg-green-700 justify-center items-center">
            <img src="/images/menu.png" style="filter: brightness(0) invert(1)" class="w-1/6">
         </div>
         <div class="w-1/4 bg-my py-3 hover:bg-green-700 border-l border-white flex justify-center items-center">
            <img src="/images/rightmob.png" style="filter: brightness(0) invert(1)" class="w-1/4">
         </div>
      </main>
   </section>



   <transition @after-enter="enter" name="fade">
      <section v-if="menu" class="menu flex items-end fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 z-50" @click="toggleMenu(false)">
         <main :class="{'translate-y-0': podmenu}" class="p-5 relative rounded-t-2xl w-full bg-white transform translate-y-full easy-transition" @click.stop="">

            <button @click="toggleMenu(false)" class="absolute top-0 right-0 p-4">
               <img src="/images/cancel.png" class="w-4">
            </button>

            <router-link :to="{name: 'legstype'}" :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': isActive }" class="leading-3 text-md md:text-md capitalize text-gray-300 easy-transition block mb-3">
                  {{$store.state.language.createYour}}
            </router-link>
            <router-link :to="{name: 'designs'}" :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': !isActive }" class="leading-3 text-md md:text-md capitalize text-gray-300 easy-transition block">
               {{$store.state.language.browseOur}}
            </router-link>

            <hr class="my-5">
            <transition name="higth">
               <Configurator v-if="$store.state.configurator"/>
            </transition>

            <button class="bg-green-800 font-bold w-full p-3 text-center text-white rounded-md">
               {{$store.state.language.getQuote}}
            </button>
         </main>
      </section>
   </transition>



</template>
<script>
import initScene from '../../global/scene/initScene'
import Decorations from './Decorations.vue'
import Configurator from './Configurator.vue'
import Icons from './Icons.vue'
export default {
   data() {
      return {
         isActive: null,
         lang: 'eng',
         menu: false,
         podmenu: false
      }
   },
   mounted(){
      window.Engine = initScene(this.$refs.canvas) 
      // if(localStorage.getItem('lang')){
      //    this.setLang(localStorage.getItem('lang'))
      // }
   },
   methods: {
      // setLang(lang){
      //    this.lang = lang
      //    store.commit('setLang', lang)
      // },
      toggleMenu(bool){
         if(bool){
            this.menu = bool
         }
         else{
            this.podmenu = false
            setTimeout(()=>{
               this.menu = bool
            },300)
         }
      },

      enter() {
         this.podmenu = true
      },
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
   },
   components:{
      Decorations,
      Configurator,
      Icons,
   }
}
</script>
<style>
.color-title{
   color: #3F4D74;
}
.translate-y-0{
   --tw-translate-y: 0px!important;
}
.counter{
   position: absolute;
   left: 50%;
   transform: translate(-50%,-50%);
   background: white;
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

.higth-enter-active,
.higth-leave-active {
  transition: 0.6s ease;
  max-height: 400px;
  overflow: hidden;
}

.higth-enter-from,
.higth-leave-to {
  opacity: 0;
  max-height: 0;
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

.noscroll::-webkit-scrollbar{
  height: 0px;
  width: 0px;
}
.noscroll::-webkit-scrollbar-track{
  background: white;
}
.noscroll::-webkit-scrollbar-thumb{
  background-color: white;
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
   transition: .5s;
}
</style>