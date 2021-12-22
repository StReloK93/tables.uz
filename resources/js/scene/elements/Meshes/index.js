class Meshes {
    constructor() {
        this.Import()
    }
    //called in constructor
    Import() {
        // BABYLON.SceneLoader.ImportMesh("", "./models/", "room.glb", scene, function (meshes) {
        // })
        BABYLON.SceneLoader.ShowLoadingScreen = false;
        BABYLON.SceneLoader.AppendAsync('/models/room.glb', undefined, scene, function (event) {
            const percentage = event.lengthComputable ? " " + Math.floor(event.loaded / event.total * 100) + "%" : "";
      
            console.log(percentage);
         }, ".glb")
    }
}
export default Meshes