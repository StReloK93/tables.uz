export default class Meshes {
    constructor() {
        this.Import()
    }

    async Import() {
        BABYLON.SceneLoader.ShowLoadingScreen = false;
        const sceneappend = await BABYLON.SceneLoader.AppendAsync('/models/models.glb', undefined, scene, function (event) {
            
            const percentage = event.lengthComputable ? (event.loaded / event.total * 100) : 0;

            store.state.onLoaded = percentage/2
        }, ".glb")
        sceneappend.stopAllAnimations()
    }
}