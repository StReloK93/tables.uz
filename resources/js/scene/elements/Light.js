class Light{
   constructor() {
      this.creataLight()
      this.shadowGenerator(this.light)
      this.sceneOnload()
   }
   //called in constructor
   creataLight() {
      var light = this.light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0))
      light.position = new BABYLON.Vector3(1,31,1)
      light.intensity = 2.5
      light.direction = new BABYLON.Vector3(-0.180,-0.372,-0.911)
   }

   shadowGenerator(light){
      this.shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
   }

   UseShadow(shadowGenerator,array){
      shadowGenerator.useContactHardeningShadow = true
      shadowGenerator.contactHardeningLightSizeUVRatio = 0.25
      for (let i = 0; i < array.length; i++) {
         var node = scene.getNodeByName(array[i])
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
         var node = scene.getNodeByName(meshes[i])
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

   sceneOnload(){scene.onReadyObservable.add(()=>{
      this.UseShadow(this.shadowGenerator, ['legMetal','legMetalBottom','tableMain', 'image','lamp','monitor','plant'])
      this.AcceptShadows(['legMetal', 'legMetalBottom','wall', 'floor','lenolium','tableMain','plintus']) // shu spiskadagi mesh yoki nodelar soya qabul qiladi
   })}
}
export default Light;