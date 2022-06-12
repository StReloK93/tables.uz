<template>
   <section>
      <transition name="fade">
         <main v-if="$store.state.otherinfo" @click="$store.state.otherinfo = false"  class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex-center z-20">
            <ul class="w-96 px-5 py-3 bg-white shadow  text-gray-700 border-t-2 border-blue-400">
               <img src="/images/screen.png">
            </ul>
         </main>
      </transition>
      <main class="xl:pb-8 md:pb-4">
         <h3 class="font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600">
            {{$store.state.language.tablesquantity}}
         </h3>
         <div class="border border-gray-200 inline-flex items-center xl:h-12 md:h-10 xl:rounded-lg md:rounded-md">
            <button class="px-5 border-r h-full" @click="$store.commit('setTablesCount', -1)">
               <Icons icon="minus"/>
            </button>
            <span class="px-10 xl:text-xl md:text-md font-bold text-indigo-900">
               {{$store.state.otherpage.tablesCount}}
            </span>
            <button class="px-5 border-l h-full" @click="$store.commit('setTablesCount', 1)">
               <Icons icon="plus"/>
            </button>
         </div>
      </main>

      <main class="xl:pb-8 md:pb-4">
         <h3 class="font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600">
            {{$store.state.language.other}}
         </h3>
         <div class="flex items-center mb-4 xl:text-xl md:text-md">
            <input type="checkbox" 
            v-model="$store.state.otherpage.service" 
            :disabled="$store.state.otherpage.tablesCount < 10? true : false" 
            class="transform scale-150 ml-1 xl:mr-6 md:mr-3">
            {{$store.state.language.wearecor}}
         </div>
         <div class="flex items-center mb-4 xl:text-xl md:text-md">
            <input type="checkbox" v-model="$store.state.otherpage.needchair" class="transform scale-150 ml-1 xl:mr-6 md:mr-3">
            {{$store.state.language.ialsoneed}}
            <button @click="$store.state.otherinfo = true" class="ml-3">
               <img src="/images/undo.png" class="w-6">
            </button>
         </div>
        <aside class="flex">
           <main class="mr-4">
              <p class="mb-2 text-gray-400 xl:text-md md:text-sm">{{$store.state.language.overallheight}} (STH)</p>
               <div>
                  <input v-model="$store.state.otherpage.height" placeholder="00mm" 
                  :disabled="!$store.state.otherpage.needchair" 
                  :class="{'border-indigo-900': $store.state.otherpage.needchair}"  
                  class="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-600">
               </div>
           </main>
           <main class="mr-4">
              <p class="mb-2 text-gray-400 xl:text-md md:text-sm">{{$store.state.language.upperlength}} (ULL)</p>
               <div>
                  <input v-model="$store.state.otherpage.upperlength" placeholder="00mm" 
                  :disabled="!$store.state.otherpage.needchair" 
                  :class="{'border-indigo-900': $store.state.otherpage.needchair}"  
                  class="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-600">
               </div>
           </main>
           <main>
              <p class="mb-2 text-gray-400 xl:text-md md:text-sm">{{$store.state.language.lowerlength}} (LLL)</p>
               <div>
                  <input v-model="$store.state.otherpage.lowerlength" placeholder="00mm" 
                  :disabled="!$store.state.otherpage.needchair" 
                  :class="{'border-indigo-900': $store.state.otherpage.needchair}"  
                  class="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-600">
               </div>
           </main>
        </aside>
      </main>
      <main class="xl:pb-8 md:pb-4">
         <h3 class="font-bold xl:mb-6 md:mb-4  xl:text-xl md:text-md text-gray-600">
            {{$store.state.language.leaveamess}}
         </h3>
         <div>
            <textarea v-model="$store.state.otherpage.message" class="w-full border border-gray-400 rounded-lg xl:h-40 md:h-32 p-3 outline-none focus:border-blue-600"></textarea>
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