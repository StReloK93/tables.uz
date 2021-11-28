<template>
   <section>
      <main class="pb-8">
         <h3 class="font-bold mb-6 text-xl text-gray-600">
            Table’s quantity
         </h3>
         <div class="border border-gray-200 inline-flex items-center h-12 rounded-lg">
            <button class="px-5 border-r h-full" @click="$store.commit('setTablesCount', -1)">
               <Icons icon="minus"/>
            </button>
            <span class="px-10 text-xl font-bold text-indigo-900">
               {{$store.state.params.tablesCount}}
            </span>
            <button class="px-5 border-l h-full" @click="$store.commit('setTablesCount', 1)">
               <Icons icon="plus"/>
            </button>
         </div>
      </main>

      <main class="pb-8">
         <h3 class="font-bold mb-6 text-xl text-gray-600">
            Other Requests
         </h3>
         <div class="flex items-center mb-4 text-xl">
            <input type="checkbox" class="transform scale-150 ml-1 mr-6"> We are a corporation that needs space planning service as well.
         </div>
         <div class="flex items-center mb-4 text-xl">
            <input type="checkbox" class="transform scale-150 ml-1 mr-6">  I also need a chair, if you can tell us your height and physiqe we can recommend.
         </div>
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
      <main class="pb-8">
         <h3 class="font-bold mb-6 text-xl text-gray-600">
            Leave a message
         </h3>
         <div>
            <textarea class="w-full border border-gray-400 rounded-lg h-40 p-3 outline-none focus:border-blue-600"></textarea>
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