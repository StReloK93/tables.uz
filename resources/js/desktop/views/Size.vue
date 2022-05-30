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
           <table class="w-full tables">
              <tr>
                 <td class="text-center w-4/5 ">
                    <input v-model="$store.state.sizepage.a" class="sizeInput mb-2"> in mm
                 </td>
                 <td></td>
              </tr>
              <tr>
                 <td>
                    <div class="border border-black adaptive mr-2"></div>
                 </td>
                 <td>
                    <input v-model="$store.state.sizepage.b" class="sizeInput"> in mm
                 </td>
              </tr>
           </table>
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