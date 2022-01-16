<template>
<section>
   <transition name="fade">
      <main v-show="$store.state.currentPage == 1" class="miniRoutes">
         <h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">
            Choose the wall color
         </h3>
         <div class="text-gray-400 w-full px-2">
            <transition name="fade" mode="out-in">
               <div v-if="!join" class="flex items-center">
                  <main class="relative pt-1 mr-3 w-1/2">
                     <label class="absolute mix-blend-difference uppercase text-xs w-full h-full top-0 left-0 flex items-center justify-center" for="colorOne"> <span> First Wall</span></label>
                     <input id="colorOne" class="inputColor w-full h-12" type="color"  @input="events.wallColorChanger('wall')" v-model="$store.state.params.wallColor">
                  </main>
                  <main class="relative pt-1 w-1/2">
                     <label class="absolute mix-blend-difference uppercase text-xs w-full h-full top-0 left-0 flex items-center justify-center" for="colorTwo"> <span> Second Wall</span></label>
                     <input id="colorTwo" class="inputColor w-full h-12" type="color" @input="events.wallColorChanger('mainWall')" v-model="$store.state.params.mainWallColor">
                  </main>
               </div>
               <div v-else class="flex items-center">
                  <main class="relative pt-1 w-1/2">
                     <label class="absolute mix-blend-difference uppercase text-xs w-full h-full top-0 left-0 flex items-center justify-center" for="colorThree"> <span> All Walls</span></label>
                     <input id="colorThree" class="inputColor w-full h-12" type="color" @input="events.JoinColorChanger()" v-model="$store.state.params.wallColor">
                  </main>
               </div>
            </transition>
            <main class="text-gray-600 mt-4 flex items-center">
               <label for="join" class="join inline-block rounded-full w-8 border border-gray-500 mr-2">
                  <main :class="{'joincheck': join}" class="w-3 easy-transition h-3 rounded-full bg-my"></main>
               </label>
               <input hidden id="join" type="checkbox" v-model="join"> Join
            </main>
         </div>
      </main>
   </transition>

   <transition name="fade">
      <main v-show="$store.state.currentPage == 2" class="miniRoutes">
         <h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">
            Choose the flooring color
         </h3>
         <div class="whitespace-nowrap px-1 py-1 overflow-hidden overflow-x-scroll noscroll -mr-2">
            <aside class="w-custom mr-2 inline-block" v-for="img in images" :key="img">
               <main @click="events.floorImage(img.name)">
                  <img :class="{'shadow-blue': $store.state.params.floor == img.name}" :src="img.path" class="border-2 border-white rounded-md">
               </main>
            </aside>
         </div>
      </main>
   </transition>
</section>
</template>
<script>
export default {
   props: ['old'],
   data() {
      return {
         images: null,
         join: false,
         events: Engine.Room
      }
   },
   async mounted() {
      store.commit('setRoute', this.old)
      this.images = Engine.textures.floors
   },
}
</script>
<style scope>
.inputColor{
   background: none;
}
.join{
   padding: 2px;
}
.joincheck{
   margin-left: 14px;
}
.w-custom{
    width: 27%;
}
</style>