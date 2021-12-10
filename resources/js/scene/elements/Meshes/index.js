class Meshes {
    constructor() {
        this.Import()
    }
    //called in constructor
    Import() {
        BABYLON.SceneLoader.ImportMesh("", "./models/", "room.glb", scene, function (meshes) {
            console.log(meshes[0]);
        })
    }
}
export default Meshes