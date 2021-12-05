class Light{
   constructor() {
      this.creataLight()
      this.shadowGenerator(this.light)
      this.sceneOnload()
   }
   //called in constructor
   creataLight() {
      var light = this.light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0))
      light.position = new BABYLON.Vector3(1,64,1)
      light.direction = new BABYLON.Vector3(-0.14,-0.73,0.67)
      light.intensity = 2
      this.scene = this.light._scene
   }

   shadowGenerator(light){
      this.shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
   }

   UseShadow(shadowGenerator,array){
      shadowGenerator.useContactHardeningShadow = true
      shadowGenerator.contactHardeningLightSizeUVRatio = 0.25
      for (let i = 0; i < array.length; i++) {
         var node = this.scene.getNodeByName(array[i])
         if(!node) continue
         if(node._isMesh){
            shadowGenerator.getShadowMap().renderList.push(node);
         }
         else{
            if(Array.isArray(node._children)){
               node._children.forEach(element => {
                  shadowGenerator.getShadowMap().renderList.push(element);
               });
            }
         }
         
      }
   }

   AcceptShadows(meshes){
      for (let i = 0; i < meshes.length; i++) {
         var node = this.scene.getNodeByName(meshes[i])
         if(!node) continue
         if(node._isMesh){
            node.receiveShadows = true;
         }
         else{
            if(Array.isArray(node._children)){
               node._children.forEach(element => {
                  element.receiveShadows = true;
               });
            }
         }
      }
   }

   sceneOnload(){this.scene.onReadyObservable.add(()=>{
      // this.UseShadow(this.shadowGenerator, ['legMetal','legMetalBottom','tableMain', 'image','lamp','monitor'])
      // this.AcceptShadows(['legMetal', 'legMetalBottom','wall', 'floor','lenolium','tableMain']) // shu spiskadagi mesh yoki nodelar soya qabul qiladi
   })}
}
export default Light;