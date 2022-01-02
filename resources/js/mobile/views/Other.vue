<template>
   <section>
      <main class="xl:pb-8 md:pb-4">
         <h3 class="font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600">
            Table’s quantity
         </h3>
         <div class="border border-gray-200 inline-flex items-center xl:h-12 md:h-10 xl:rounded-lg md:rounded-md">
            <button class="px-5 border-r h-full" @click="$store.commit('setTablesCount', -1)">
               <Icons icon="minus"/>
            </button>
            <span class="px-10 xl:text-xl md:text-md font-bold text-indigo-900">
               {{$store.state.params.tablesCount}}
            </span>
            <button class="px-5 border-l h-full" @click="$store.commit('setTablesCount', 1)">
               <Icons icon="plus"/>
            </button>
         </div>
      </main>

      <main class="xl:pb-8 md:pb-4">
         <h3 class="font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600">
            Other Requests
         </h3>
         <div class="flex items-center mb-4 xl:text-xl md:text-md">
            <input type="checkbox" class="transform scale-150 ml-1 xl:mr-6 md:mr-3"> We are a corporation that needs space planning service as well.
         </div>
         <div class="flex items-center mb-4 xl:text-xl md:text-md">
            <input type="checkbox" class="transform scale-150 ml-1 xl:mr-6 md:mr-3">  I also need a chair, if you can tell us your height and physiqe we can recommend.
         </div>
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
      <main class="xl:pb-8 md:pb-4">
         <h3 class="font-bold xl:mb-6 md:mb-4  xl:text-xl md:text-md text-gray-600">
            Leave a message
         </h3>
         <div>
            <textarea class="w-full border border-gray-400 rounded-lg xl:h-40 md:h-32 p-3 outline-none focus:border-blue-600"></textarea>
         </div>
      </main>
   </section>
</template>
<script>
import Icons from '../components/Icons.vue'
export default {
   components:{
      Icons
   }
}
</script>
<style>
textarea {
  resize: none;
}
</style>