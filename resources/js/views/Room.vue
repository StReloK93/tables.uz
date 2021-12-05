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
            <aside class="w-1/5 px-3" v-for="(img , index) in images" :key="img">
               <main :class="{'shadow-blue': $store.state.params.floor == 'floor'+(index+1)}" @click="floorImage(`floor${index+1}`)" class="mb-6 p-1 rounded-xl cursor-pointer">
                  <img :src="`/textures/${img}`" class="rounded-md">
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
         images: null,
         color: store.state.params.wallColor,
      }
   },
   async mounted() {
     this.images = await store.dispatch('textures')
   },
   methods:{
      wallColorChanger(){
         store.state.params.wallColor = this.color
         var material = Engine.scene.get().getMaterialByName('wall')
         material.albedoColor = BABYLON.Color3.FromHexString(this.color).toLinearSpace()
      },
      floorImage(pathImage){
         store.dispatch('floorImage', {scene: Engine.scene.get(),textureName: pathImage})
      },
   },
}
</script>
<style>
   
</style>