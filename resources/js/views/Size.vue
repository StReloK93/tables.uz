<template>
   <section>
      <main class="pb-8">
         <h3 class="font-bold mb-4 text-xl text-gray-600">
            Size
         </h3>
         <div class="text-md flex flex-wrap text-gray-600">
            <button @click="setSize(0)" :class="{'bg-my text-white': $store.state.params.size == 0 }" class="h-16 w-36 text-center rounded-xl mr-4 mb-4 border">
               Small
            </button>
            <button @click="setSize(1)" :class="{'bg-my text-white': $store.state.params.size == 1 }"  class="h-16 w-36 text-center rounded-xl mr-4 mb-4 border">
               Large
            </button>
         </div>
      </main>

      <main class="pb-8">
         <h3 class="font-bold mb-6 text-xl text-gray-600">
            Enter your requested size
         </h3>
        <aside class="flex">
           <main class="mr-4">
              <p class="mb-2 text-gray-400">Your total height </p>
               <div class="">
                  <input type="text" class="rounded-lg border border-indigo-900 p-3 outline-none focus:border-blue-600">
               </div>
           </main>
           <main>
              <p class="mb-2 text-gray-400">Your legs lenght  </p>
               <div class="">
                  <input type="text" class="rounded-lg border border-indigo-900 p-3 outline-none focus:border-blue-600">
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