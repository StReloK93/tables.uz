import store from "../../../store";

class Meshes {
    constructor() {
        this.Import()
    }

    Import() {

        BABYLON.SceneLoader.ShowLoadingScreen = false;
        BABYLON.SceneLoader.AppendAsync('/models/room.glb', undefined, scene, function (event) {

            const percentage = event.lengthComputable ? (event.loaded / event.total * 100) : 0;

            store.state.onLoaded = percentage/5
        }, ".glb")

    }
}
export default Meshes