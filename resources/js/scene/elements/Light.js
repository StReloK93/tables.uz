class Light{
   constructor() {
      this.creataLight()
      this.creataLighttwo()
      this.sceneOnload()
   }
   //called in constructor
   creataLight() {
      var light = this.light = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(0, -1, 0))
      light.position = new BABYLON.Vector3(1,31,1)
      light.intensity = 2.5
      light.direction = new BABYLON.Vector3(-0.180,-0.372,-0.911)
      light.diffuse = BABYLON.Color3.FromHexString('#C3BFA9')

      this.shadowGeneratorOne = new BABYLON.ShadowGenerator(1024, light);
   }


   creataLighttwo() {
      var light = this.light = new BABYLON.DirectionalLight("light2", new BABYLON.Vector3(0, -1, 0))
      light.position = new BABYLON.Vector3(1,31,1)
      light.intensity = 2.5
      light.direction = new BABYLON.Vector3(-0.180,-0.372,-0.911)
      
      this.shadowGeneratorTwo = new BABYLON.ShadowGenerator(1024, light);
   }

   UseShadow(shadowGenerator,array){
      shadowGenerator.useBlurExponentialShadowMap = true;
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
               })
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
               })
            }
         }
      }
   }

   sceneOnload(){scene.onReadyObservable.add(()=>{
      this.UseShadow(this.shadowGeneratorOne, ['oneleg','twoleg', 'threeleg', 'fourleg', 'fiveleg','tumbochka', 'image','lamp','monitor','plant'])
      this.UseShadow(this.shadowGeneratorTwo, ['oneleg','twoleg', 'threeleg', 'fourleg', 'fiveleg','tumbochka', 'image','lamp','monitor','plant'])
      this.AcceptShadows(['twoleg','wall', 'floor','plintus']) // shu spiskadagi mesh yoki nodelar soya qabul qiladi
   })}
}
export default Light