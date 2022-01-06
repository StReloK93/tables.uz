<template>
   <section class="fixed flex flex-col justify-between top-0 left-0 w-full h-full bg-white z-50 p-5">
      <button  @click="$store.state.other = false" class="absolute top-0 right-0 p-3">
         <img src="/images/cancel.png" class="w-3">
      </button>
      <aside>
         <main>
            <h3 class="font-bold text-xl mb-4 text-gray-600">
               Table’s quantity
            </h3>
            <div class="border border-gray-300 inline-flex items-center h-9 rounded-md mb-5">
               <button class="px-3 border-r border-gray-300 h-full" @click="$store.commit('setTablesCount', -1)">
                  <Icons icon="minus"/>
               </button>
               <span class="px-7 font-bold text-indigo-900">
                  {{$store.state.params.tablesCount}}
               </span>
               <button class="px-3 border-l border-gray-300 h-full" @click="$store.commit('setTablesCount', 1)">
                  <Icons icon="plus"/>
               </button>
            </div>
         </main>

         <main>
            <h3 class="font-bold text-xl mb-3 text-gray-600">
               Other Requests
            </h3>
            <div class="flex items-center mb-3 text-sm text-gray-500">
               <input type="checkbox" class="transform scale-150 ml-1 mr-3"> We are a corporation that needs space planning service as well.
            </div>
            <div class="flex items-center mb-3 text-sm text-gray-500">
               <input type="checkbox" v-model="forChair" class="transform scale-150 ml-1 mr-3">  I also need a chair, if you can tell us your height and physiqe we can recommend.
            </div>
         <aside class="flex">
            <main class="mr-4 w-1/2">
               <p class="mb-2 text-gray-400 flex items-center">
                  Your total height 
                  <img class="ml-3" src="/images/undo.svg">
               </p>
               <div>
                  <input :disabled="!forChair" :class="{'border-indigo-900': forChair}" type="text" class="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-600">
               </div>
            </main>
            <main class="w-1/2">
               <p class="mb-2 text-gray-400 flex items-center">
                  Your legs lenght
                  <img class="ml-3" src="/images/undo.svg">
               </p>
               <div>
                  <input :disabled="!forChair" :class="{'border-indigo-900': forChair}" type="text" class="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-600">
               </div>
            </main>
         </aside>
         </main>
         <main>
            <h3 class="font-bold text-xl my-3 text-gray-600">
               Leave a message
            </h3>
            <div>
               <textarea class="w-full border border-gray-400 rounded-md h-24 p-2 outline-none focus:border-blue-600"></textarea>
            </div>
         </main>
      </aside>
      <aside>
         <button class="bg-green-800 font-bold w-full p-3 text-center text-white rounded-md">
            Continue
         </button>
      </aside>
   </section>
</template>
<script>
import Icons from './Icons.vue'
export default {
   data() {
      return {
         forChair: false,
      }
   },
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