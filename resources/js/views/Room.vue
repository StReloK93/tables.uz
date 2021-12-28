<template>
   <section>
      <main class="pb-8">
         <h3 class="font-bold mb-6 text-xl text-gray-600">
            Choose the wall color
         </h3>
         <div class=" text-gray-500">
            <transition name="fade" mode="out-in">
               <div v-if="!join" class="flex items-center mr-5">
                  Wall One <input class="mx-5 inputColor w-20" type="color" @input="wallColorChanger('wall')" v-model="colorOne">
                  Wall Two <input class="ml-5 inputColor w-20" type="color" @input="wallColorChanger('mainWall')" v-model="colorTwo">
               </div>
               <div v-else class="flex items-center  mr-5">
                  All Wall<input class="ml-5 inputColor w-20" type="color" @input="JoinColorChanger()" v-model="colorOne">
               </div>
            </transition>
            <main class="mt-4">
               Join <input  type="checkbox" class="ml-2 joinCheck" v-model="join">
            </main>
         </div>
      </main>
      <main class="pb-8">
         <h3 class="font-bold mb-6 text-xl text-gray-600">
            Choose the flooring color
         </h3>
         <div class="flex flex-wrap -mx-3">
            <aside class="w-1/5 px-3" v-for="img in images" :key="img">
               <main :class="{'shadow-blue': $store.state.params.floor == img.name}" @click="$store.commit('floorImage', {textureName: img.name})" class="mb-6 p-1 rounded-xl cursor-pointer">
                  <img :src="img.path" class="rounded-md">
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