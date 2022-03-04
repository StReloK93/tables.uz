export default class Light{
   constructor() {
      this.creataLightOne()
      this.creataLighttwo()
      if(window.innerWidth > 767) this.sceneOnload()
   }
   //called in constructor
   creataLightOne() {
      var light = this.light = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(0, -1, 0))
      light.position = new BABYLON.Vector3(1,31,1)
      light.intensity = 2.5
      light.direction = new BABYLON.Vector3(-0.180,-0.372,-0.911)
      
      this.shadowGeneratorOne = new BABYLON.ShadowGenerator(1024, light)
      this.shadowGeneratorOne.usePercentageCloserFiltering = true
   }

   creataLighttwo() {
      var light = this.light = new BABYLON.DirectionalLight("light2", new BABYLON.Vector3(0, -1, 0))
      light.position = new BABYLON.Vector3(1,31,1)
      light.intensity = 1.5
      light.direction = new BABYLON.Vector3(0,-1,0)
   }

   //in onload
   UseShadow(shadowGenerator,array){
      for (let i = 0; i < array.length; i++) {
         var node = scene.getNodeByName(array[i])
         if(!node) continue
         if(node._isMesh){
            shadowGenerator.getShadowMap().renderList.push(node)
         }
         else{
            if(Array.isArray(node._children)){
               node._children.forEach(element => {
                  if(element._isMesh){
                     shadowGenerator.getShadowMap().renderList.push(element);
                  }
                  if(Array.isArray(element._children)){
                     element._children.forEach(elem => {
                        shadowGenerator.getShadowMap().renderList.push(elem);
                     });
                  }
               })
            }
         }
      }
   }

   //in onload
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
                  if(element._isMesh){
                     element.receiveShadows = true;
                  }

                  if(Array.isArray(element._children)){
                     element._children.forEach(elem => {
                        elem.receiveShadows = true;
                     });
                  }
               })
            }
         }
      }
   }

   sceneOnload(){scene.onReadyObservable.add(()=>{
      this.UseShadow(this.shadowGeneratorOne, this._arrayShadowedMeshes)
      this.AcceptShadows(this._arrayAcceptShadows) // shu spiskadagi mesh yoki nodelar soya qabul qiladi
   })}

   _arrayAcceptShadows = ['onelegParent','twolegParent','threelegParent','fourlegParent','fivelegParent','wall', 'floor','plintus']
   _arrayShadowedMeshes = ['onelegParent','twolegParent','threelegParent','fourlegParent','fivelegParent','tumbochka', 'image','lamp','monitor','plant','chair']
}