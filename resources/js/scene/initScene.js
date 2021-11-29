import Scene from './elements/Scene'
import Camera from './elements/Camera'
function initScene(canvas){
   const engine = {
      scene: new Scene(canvas),
      camera: new Camera(canvas)
   }
   return engine
}

export default initScene