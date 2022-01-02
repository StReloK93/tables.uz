<template>
   <section>
      <main class="xl:pb-4">
         <h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">
            Size
         </h3>
         <div class="text-md flex flex-wrap text-gray-600">
            <button @click="setSize(0)" :class="{'bg-my text-white': $store.state.params.size == 0 }" class="xl:h-16 md:h-14 xl:text-md md:text-xs w-1/5 text-center rounded-xl mr-3 mb-4 border">
               Small
            </button>
            <button @click="setSize(1)" :class="{'bg-my text-white': $store.state.params.size == 1 }"  class="xl:h-16 md:h-14 xl:text-md md:text-xs w-1/5 text-center rounded-xl mr-3 mb-4 border">
               Large
            </button>
         </div>
      </main>

      <main class="xl:pb-8">
         <h3 class="font-bold  xl:mb-6 md:mb-4  xl:text-xl md:text-md text-gray-600">
            Enter your requested size
         </h3>
        <aside class="flex">
           <main class="mr-4">
              <p class="mb-2 text-gray-400 xl:text-md md:text-sm">Your total height </p>
               <div>
                  <input type="text" class="rounded-lg border border-indigo-900 xl:p-3 md:p-2 outline-none focus:border-blue-600">
               </div>
           </main>
           <main>
              <p class="mb-2 text-gray-400 xl:text-md md:text-sm">Your legs lenght  </p>
               <div>
                  <input type="text" class="rounded-lg border border-indigo-900 xl:p-3 md:p-2 outline-none focus:border-blue-600">
               </div>
           </main>
        </aside>
      </main>
   </section>
</template>
<script>
export default {
   methods: {
      setSize(sizeIndex){
         store.state.params.size = sizeIndex
      }
   },
}
</script>