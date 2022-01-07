<template>
   <section>
      <transition name="fade">
         <main v-show="$store.state.currentPage == 1" class="miniRoutes">
            <h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">
               Size
            </h3>
            <div class="text-md flex flex-wrap text-gray-600 w-full justify-center">
               <button @click="setSize(0)" :class="{'bg-my text-white': $store.state.params.size == 0 }" class="w-1/3 h-28 text-center rounded-xl mr-3 border">
                  Small
               </button>
               <button @click="setSize(1)" :class="{'bg-my text-white': $store.state.params.size == 1 }"  class="w-1/3 h-28 text-center rounded-xl border">
                  Large
               </button>
            </div>
         </main>
      </transition>

      <transition name="fade">
         <main v-show="$store.state.currentPage == 2" class="miniRoutes">
            <h3 class="color-title text-center font-medium text-xl  mb-4 text-gray-600">
               Enter your requested size
            </h3>
         <aside class="flex w-full px-2">
            <main class="mr-2 w-1/3">
               <p class="mb-2 text-gray-400 xl:text-md md:text-sm">Length </p>
                  <div>
                     <input placeholder="00mm" type="text" class="p-2 rounded-lg w-full border border-indigo-900 outline-none focus:border-blue-600">
                  </div>
            </main>
            <main  class="mr-2 w-1/3">
               <p class="mb-2 text-gray-400 xl:text-md md:text-sm">Width </p>
                  <div>
                     <input placeholder="00mm" type="text" class="p-2 rounded-lg w-full border border-indigo-900 outline-none focus:border-blue-600">
                  </div>
            </main>
            <main  class="w-1/3">
               <p class="mb-2 text-gray-400 xl:text-md md:text-sm">Thickness </p>
                  <div>
                     <input placeholder="00mm" type="text" class="p-2 rounded-lg w-full border border-indigo-900 outline-none focus:border-blue-600">
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
   mounted() {
      store.commit('setRoute', this.old)
   },
   methods: {
      setSize(sizeIndex){
         store.state.params.size = sizeIndex
      }
   },
}
</script>