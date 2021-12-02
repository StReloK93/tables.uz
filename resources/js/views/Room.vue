<template>
   <section>
      <main class="pb-8">
         <h3 class="font-bold mb-6 text-xl text-gray-600">
            Choose the wall color
         </h3>
         <div>
            <input type="color" @input="wallColorChanger" v-model="color">
         </div>
      </main>
      <main class="pb-8">
         <h3 class="font-bold mb-6 text-xl text-gray-600">
            Choose the flooring color
         </h3>
         <div class="flex flex-wrap -mx-3">
            <aside class="w-1/5 px-3">
               <main class="mb-6 p-1 shadow rounded-md">
                  <img src="/images/floors/1.jpg" class="rounded-md">
               </main>
            </aside>
            <aside class="w-1/5 px-3">
               <main class="mb-6">
                  <img src="/images/floors/2.jpg" class="rounded-md">
               </main>
            </aside>
            <aside class="w-1/5 px-3">
               <main class="mb-6">
                  <img src="/images/floors/3.jpg" class="rounded-md">
               </main>
            </aside>
            <aside class="w-1/5 px-3">
               <main class="mb-6">
                  <img src="/images/floors/4.jpg" class="rounded-md">
               </main>
            </aside>
            <aside class="w-1/5 px-3">
               <main class="mb-6">
                  <img src="/images/floors/5.jpg" class="rounded-md">
               </main>
            </aside>
            <aside class="w-1/5 px-3">
               <main class="mb-6">
                  <img src="/images/floors/6.jpg" class="rounded-md">
               </main>
            </aside>
            <aside class="w-1/5 px-3">
               <main class="mb-6">
                  <img src="/images/floors/7.jpg" class="rounded-md">
               </main>
            </aside>
            <aside class="w-1/5 px-3">
               <main class="mb-6">
                  <img src="/images/floors/8.jpg" class="rounded-md">
               </main>
            </aside>
         </div>
      </main>

         
   </section>
</template>
<script>
export default {
   data() {
      return {
         color: this.$store.state.params.wallColor,
      }
   },
   methods:{
      wallColorChanger(){
         this.$store.state.params.wallColor = this.color
         var material = Engine.scene.get().getMaterialByName('wall')
         material.albedoColor = BABYLON.Color3.FromHexString(this.color).toLinearSpace()
      }
   }
}
</script>
<style>
   
</style>