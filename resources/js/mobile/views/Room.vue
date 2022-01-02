<template>
   <section>
      <main class="xl:pb-8 md:pb-4">
         <h3 class="font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600">
            Choose the wall color
         </h3>
         <div class="xl:text-md md:text-sm text-gray-500">
            <transition name="fade" mode="out-in">
               <div v-if="!join" class="flex items-center">
                  Wall One <input class="xl:mx-5 md:mx-3 inputColor w-20" type="color" @input="wallColorChanger('wall')" v-model="colorOne">
                  Wall Two <input class="xl:ml-5 md:ml-3 inputColor w-20" type="color" @input="wallColorChanger('mainWall')" v-model="colorTwo">
               </div>
               <div v-else class="flex items-center">
                  All Wall<input class="xl:ml-5 md:ml-3 inputColor w-20" type="color" @input="JoinColorChanger()" v-model="colorOne">
               </div>
            </transition>
            <main class="mt-4">
               Join <input  type="checkbox" class="ml-2 joinCheck" v-model="join">
            </main>
         </div>
      </main>
      <main class="pb-8">
         <h3 class="font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600">
            Choose the flooring color
         </h3>
         <div class="flex flex-wrap -mr-3">
            <aside class="w-1/5 pr-2" v-for="img in images" :key="img">
               <main @click="$store.commit('floorImage', {textureName: img.name})" class="mb-6 cursor-pointer">
                  <img :class="{'shadow-blue': $store.state.params.floor == img.name}" :src="img.path" class="border-2 border-white rounded-md">
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
         colorOne: store.state.params.wallColor,
         colorTwo: store.state.params.mainWallColor,
         join: false
      }
   },
   async mounted() {
     this.images = Engine.textures.floors
   },
   methods:{
      wallColorChanger(wallName){
         store.state.params.wallColor = this.colorOne
         store.state.params.mainWallColor = this.colorTwo
         var material = scene.getMaterialByName(wallName)
         if(wallName == 'wall'){
            material.albedoColor = BABYLON.Color3.FromHexString(this.colorOne).toLinearSpace()
         }
         else{
            material.albedoColor = BABYLON.Color3.FromHexString(this.colorTwo).toLinearSpace()
         }
      },
      JoinColorChanger(){
         this.colorTwo = this.colorOne
         store.state.params.wallColor = this.colorOne
         store.state.params.mainWallColor = this.colorOne
         let wall = scene.getMaterialByName('wall')
         let mainWall = scene.getMaterialByName('mainWall')
         wall.albedoColor = BABYLON.Color3.FromHexString(this.colorOne).toLinearSpace()
         mainWall.albedoColor = BABYLON.Color3.FromHexString(this.colorOne).toLinearSpace()
      },
   },
}
</script>
<style>
.inputColor{
   background: none;
}
.joinCheck{
   position: relative;
   top: 1px;
   transform: scale(1.3);
}
</style>