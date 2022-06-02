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
            <div class="w-full flex justify-center" v-if="type">
               <table class="threetable relative w-full">
                  <tr>
                     <td></td>
                     <td colspan="3" class="text-center">
                        <input v-model="$store.state.sizepage.b" class="sizeInput mb-2"> in mm (B)
                     </td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="w-1/12"><input v-model="$store.state.sizepage.a" class="sizeInput mr-2"> in mm (A)</td>
                     <td class="t-first w-3/12"><div class="pt-full"></div></td>
                     <td class="t-second w-3/12"></td>
                     <td :class="{'border-l border-b border-dashed': $store.state.params.legType == 4}" class="t-three w-3/12"></td>
                     <td rowspan="2" class="w-1/12 text-right"><input v-model="$store.state.sizepage.c" class="sizeInput ml-2"> in mm (C)</td>
                  </tr>
                  <tr>
                     <td class="w-1/12"></td>
                     <td class="w-3/12"></td>
                     <td class="text-right  align-baseline relative w-3/12">
                        <div class="pt-full"></div>
                        <div v-if="$store.state.params.legType == 2" class="h-1/2 w-1/2 bg-white inline-block cubes"></div>
                        <div v-if="$store.state.params.legType == 2" class="h-full w-full bg-white inline-block borders absolute top-0 left-0 rounded-tr-full"></div>
                     </td>
                     <td class="t-four w-3/12"></td>
                  </tr>
                  <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td class="text-center"><input v-model="$store.state.sizepage.d" class="sizeInput mb-2"> in mm (D)</td>
                     <td></td>
                  </tr>
               </table>
            </div>
            <table v-else class="w-full tables">
               <tr>
                  <td></td>
                  <td class="text-center w-4/5">
                     <input v-model="$store.state.sizepage.b" class="sizeInput mb-2"> in mm (B)
                  </td>
               </tr>
               <tr>
                  <td class="text-right">
                     <input v-model="$store.state.sizepage.a" class="sizeInput"> in mm (A)
                  </td>
                  <td>
                     <div class="border border-black adaptive ml-2"></div>
                  </td>
               </tr>
            </table>
         </main>
      </main>
   </section>
</template>
<script setup>
import { computed , ref } from 'vue'
const events = ref(Engine.Size)

const type = computed(() => {
   if(store.state.params.legType == 2 || store.state.params.legType == 4) return true
   else return false
})
</script>
<style>
.width-800{
   width: 800px;
}

.t-first{
   border: 1px solid #333;
   border-right: 0;
}

.t-second{
   border: 1px solid #333;
   border-right: 0;
   border-left: 0;
}

.t-three{
   border-top: 1px solid #333;
   border-right:1px solid #333;
}

.t-four{
   border: 1px solid #333;
   border-top: 0;
}

.cubes{
   position: absolute;
   top: -2px;
   right: -2px;
}

.borders{
   border-top-right-radius: 50%;
   top: -1px;
   left: 1px;
   border-left: 1px solid transparent;
   border-bottom: 1px solid transparent;
   border-top: 1px solid #333;
   border-right: 1px solid #333;
}

.pt-full{
   padding-top: 100%;
}
</style>