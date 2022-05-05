<template>
   <section>
      <main v-if="$store.state.params.legType == 1 || $store.state.params.legType == 2 || $store.state.params.legType == 3" class="xl:pb-4">
         <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">
            Size
         </h3>
         <div class="text-md flex flex-wrap text-gray-600">
            <button @click="events.setSize(0)" :class="{'bg-my text-white': $store.state.sizepage.size == 0 }" class="xl:h-16 md:h-14 xl:text-md font-bold md:text-xs w-1/5 text-center rounded-xl mr-3 mb-4 border">
               Small
            </button>
            <button @click="events.setSize(1)" :class="{'bg-my text-white': $store.state.sizepage.size == 1 }"  class="xl:h-16 md:h-14 xl:text-md font-bold md:text-xs w-1/5 text-center rounded-xl mr-3 mb-4 border">
               Large
            </button>
         </div>
      </main>

      <main class="xl:pb-8">
         <h3 class="font-bold  xl:mb-3 md:mb-3  xl:text-xl md:text-md text-gray-600">
            Enter your requested size
         </h3>
        <main>
            <article class="flex items-center">
               <section class="flex-grow mr-3">
                  <aside class="flex items-end justify-center">
                     <input v-model="$store.state.sizepage.lenght" class="w-16 text-center border-b px-1 py-0.5 border-gray-700 outline-none focus:border-blue-600">
                     in mm (length)
                  </aside>
                  <div class="border border-black w-full h-64 mt-3"></div>
               </section>
               <aside class="w-56">
                  <input v-model="$store.state.sizepage.width" class="w-16 text-center border-b px-1 py-0.5 border-gray-700 outline-none focus:border-blue-600">
                  in mm (widht)
               </aside>
            </article>
        </main>
      </main>
   </section>
</template>
<script>
export default {
   data() {
      return {
         events: Engine.Size
      }
   },
}
</script>
<style>
   .width-800{
      width: 800px;
   }
</style>