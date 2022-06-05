<template>
   <section>
      <main v-if="$store.state.params.legType == 1 || $store.state.params.legType == 2 || $store.state.params.legType == 3" class="xl:pb-2">
         <h3 class="font-bold mb-3 xl:text-xl md:text-md text-gray-600">
            Size
         </h3>
         <div class="text-md flex flex-wrap text-gray-600">
            <button @click="events.setSize(0)" :class="{'bg-my text-white': $store.state.sizepage.size == 0 }" class="xl:h-16 md:h-14 xl:text-md font-bold md:text-xs w-1/5 text-center rounded-xl mr-3 mb-2 border">
               Small
            </button>
            <button @click="events.setSize(1)" :class="{'bg-my text-white': $store.state.sizepage.size == 1 }"  class="xl:h-16 md:h-14 xl:text-md font-bold md:text-xs w-1/5 text-center rounded-xl mr-3 mb-2 border">
               Large
            </button>
         </div>
      </main>

      <main class="xl:pb-2">
         <h3 class=" mb-2 flex justify-between items-center">
            <span class="xl:text-xl md:text-md font-bold text-gray-600">
               Enter your requested size
            </span>
            <span v-if="type" class="flex flex-col">
               <div class="text-gray-500 text-right mb-2">
                  Direction
               </div>
               <div class="flex items-center text-center text-gray-600">
                  <label for="truecheck" :class="{'bg-blue-500 text-white': $store.state.sizepage.direction == false}" class="py-1 w-16 bg-gray-100 rounded-sm shadow-sm mr-0.5">Left</label>
                  <label for="falsecheck" :class="{'bg-blue-500 text-white': $store.state.sizepage.direction}" class="py-1 w-16 bg-gray-100 rounded-sm shadow-sm ml-0.5">Right</label>
                  <input id="truecheck" type="radio" name="Direction" v-model="$store.state.sizepage.direction" :value="false" hidden>
                  <input id="falsecheck" type="radio" name="Direction" v-model="$store.state.sizepage.direction" :value="true" hidden>
               </div>
            </span>
         </h3>
         <main>
            <div class="w-full flex justify-center" v-if="type && $store.state.sizepage.direction">
               <table class="threetable relative w-4/6 text-sm">
                  <tr>
                     <td></td>
                     <td colspan="3" class="text-center">
                        <input v-model="$store.state.sizepage.w" class="sizeInput mb-2"> in mm (W)
                     </td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="w-1/12"><input v-model="$store.state.sizepage.l" class="sizeInput mr-2"> in mm (L)</td>
                     <td class="t-first w-3/12"><div class="pt-full"></div></td>
                     <td class="t-second w-3/12"></td>
                     <td :class="{'border-l border-b border-dashed': $store.state.params.legType == 4}" class="t-three w-3/12"></td>
                     <td rowspan="2" class="w-1/12 text-right"><input v-model="$store.state.sizepage.d1" class="sizeInput ml-2"> in mm (D1)</td>
                  </tr>
                  <tr>
                     <td class="w-1/12"></td>
                     <td class="w-3/12"></td>
                     <td class="relative w-3/12">
                        <div class="pt-full"></div>
                        <div v-if="$store.state.params.legType == 2" class="h-1/2 w-1/2 bg-white inline-block cubes"></div>
                        <div v-if="$store.state.params.legType == 2" class="h-full w-full bg-white inline-block borders absolute"></div>
                     </td>
                     <td class="t-four w-3/12"></td>
                  </tr>
                  <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td class="text-center"><input v-model="$store.state.sizepage.d2" class="sizeInput mb-2"> in mm (D2)</td>
                     <td></td>
                  </tr>
               </table>
            </div>

            <!--  -->
            <div class="w-full flex justify-center" v-else-if="type && $store.state.sizepage.direction == false">
               <table class="threetable relative w-4/6 text-sm">

                  <tr>
                     <td></td>
                     <td colspan="3" class="text-center">
                        <input v-model="$store.state.sizepage.w" class="sizeInput mb-2"> in mm (W)
                     </td>
                     <td></td>
                  </tr>


                  <tr>
                     <td class="w-1/12" rowspan="2" ><input v-model="$store.state.sizepage.l" class="sizeInput mr-2"> in mm (L)</td>
                     <td :class="{'border-r border-b border-dashed': $store.state.params.legType == 4}" class="t-first-2 w-3/12"></td>
                     <td class="t-second w-3/12"><div class="pt-full"></div></td>
                     <td class="t-three-2 w-3/12"></td>
                     <td class="w-1/12 text-right"><input v-model="$store.state.sizepage.d1" class="sizeInput ml-2"> in mm (D1)</td>
                  </tr>

                  <tr>
                     <td class="t-four w-3/12"></td>
                     <td class="relative w-3/12">
                        <div class="pt-full"></div>
                        <div v-if="$store.state.params.legType == 2" class="h-1/2 w-1/2 bg-white inline-block cubes-2"></div>
                        <div v-if="$store.state.params.legType == 2" class="h-full w-full bg-white inline-block borders-2 absolute"></div>
                     </td>
                     <td class="w-3/12"></td>
                     <td class="w-1/12"></td>
                  </tr>


                  <tr>
                     <td></td>
                     <td class="text-center"><input v-model="$store.state.sizepage.d2" class="sizeInput mb-2"> in mm (D2)</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
               </table>
            </div>

            <!--  -->
            <table v-else class="w-full tables">
               <tr>
                  <td></td>
                  <td class="text-center w-4/5">
                     <input v-model="$store.state.sizepage.w" class="sizeInput mb-2"> in mm (W)
                  </td>
               </tr>
               <tr>
                  <td class="text-right">
                     <input v-model="$store.state.sizepage.l" class="sizeInput"> in mm (L)
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


.t-first-2{
   border-top: 1px solid #333;
   border-left: 1px solid #333;
}

.cubes-2{
   position: absolute;
   top: -2px;
   left: -2px;
}

.borders-2{
   border-top-left-radius: 50%;
   top: -1px;
   right: 1px;
   border-right: 1px solid transparent;
   border-bottom: 1px solid transparent;
   border-top: 1px solid #333;
   border-left: 1px solid #333;
}

.t-three-2{
   border-top: 1px solid #333;
   border-right: 1px solid #333;
   border-bottom: 1px solid #333;
}

.pt-full{
   padding-top: 100%;
}
</style>