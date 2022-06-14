<template>
   <section>
      <transition name="fade">
         <main v-show="$store.state.currentPage == 1" class="miniRoutes">
            <h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">
               {{$store.state.language.size}}
            </h3>
            <div  class="text-md flex flex-wrap text-gray-600 w-full justify-center">
               <button @click="events.setSize(0)" :class="{'bg-my text-white': $store.state.sizepage.size == 0 }" class="w-1/3 h-28 text-center rounded-xl mr-3 border">
                  {{$store.state.language.small}}
               </button>
               <button @click="events.setSize(1)" :class="{'bg-my text-white': $store.state.sizepage.size == 1 }"  class="w-1/3 h-28 text-center rounded-xl border">
                  {{$store.state.language.large}}
               </button>
            </div>
         </main>
      </transition>

      <transition name="fade" >
         <main  v-show="$store.state.currentPage == 2" class="miniRoutes">
            <h3 class="color-title text-center font-medium text-xl  mb-4 text-gray-600">
               {{$store.state.language.enteryour}}
            </h3>
            <aside class="flex w-full px-2">
               <main class="mr-2 w-1/3">
                  <p class="mb-2 text-gray-400 xl:text-md md:text-sm">in mm (L) </p>
                     <div>
                        <input v-model="$store.state.sizepage.a" placeholder="00mm" type="text" class="p-2 rounded-lg w-full border border-indigo-900 outline-none focus:border-blue-600">
                     </div>
               </main>
               <main  class="mr-2 w-1/3">
                  <p class="mb-2 text-gray-400 xl:text-md md:text-sm">in mm (W) </p>
                     <div>
                        <input v-model="$store.state.sizepage.b" placeholder="00mm" type="text" class="p-2 rounded-lg w-full border border-indigo-900 outline-none focus:border-blue-600">
                     </div>
               </main>
            </aside>
         </main>
      </transition>
   </section>
</template>
<script>
export default {
   props: ['old'],
   data() {
      return {
         events: Engine.Size
      }
   },
   mounted() {
      store.commit('setRoute', this.old)
   }
}
</script>