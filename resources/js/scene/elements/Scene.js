class Scene {

   constructor(canvas) {
      this.createScene(canvas)
   }

   createScene(canvas) {
      var engine = new BABYLON.Engine(canvas)
      var scene = new BABYLON.Scene(engine)
      // scene.clearColor = new BABYLON.Color4(0,0,0,0);
      // scene.debugLayer.show()
      BABYLON.SceneLoader.ImportMesh("", "./models/", "room.glb", scene, function (meshes, particleSystems, skeletons) {

      });


      var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(Math.PI/3, Math.PI, Math.PI/2));
      light.intensity = 1;
      this.AdaptiveWindow(engine,scene)
   }

   AdaptiveWindow(engine,scene) {
      engine.runRenderLoop(() => { scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }
}

export default Scene