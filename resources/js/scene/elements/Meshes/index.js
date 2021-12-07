class Meshes {
    constructor() {
        this.Import()
    }
    //called in constructor
    Import() {
        BABYLON.SceneLoader.ImportMesh("", "./models/", "room.glb", scene, function (meshes) {
            meshes[0].scaling = new BABYLON.Vector3(20,20,-20)
        })
    }
}
export default Meshes;