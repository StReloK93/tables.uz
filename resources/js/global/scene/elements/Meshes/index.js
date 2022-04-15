
export default class Meshes {
    constructor() {
        this.hl = new BABYLON.HighlightLayer("hl1", scene , {blurTextureSizeRatio: 1.5});
        this.Import()
        this.camera = scene.activeCamera


        scene.onReadyObservable.add(()=>{
            this.clickedPoints()
        })

        scene.onPointerPick = (event,target)=>{

            if(target.pickedMesh.actionManager){
                this.camera.oldTarget = this.camera.target
                this.camera.oldRadius = this.camera.radius
                store.state.activeMesh = true
                this.focus({element: target.pickedMesh , callback: ()=>{
                    // this.camera.upperRadiusLimit = this.camera.radius
                    // this.camera.lowerRadiusLimit = this.camera.radius
                    // this.camera.lowerAlphaLimit = null
                    // this.camera.upperAlphaLimit = null
                }})
            }
            else if(store.state.activeMesh){
                store.state.activeMesh = false

                this.focus({oldTarget: this.camera.oldTarget , oldRadius : this.camera.oldRadius , callback: ()=>{
                    console.log('ss');
                    // this.camera.lowerRadiusLimit = 5
                    // this.camera.upperRadiusLimit = 50
                    // this.camera.lowerAlphaLimit = 0.9;
                    // this.camera.upperAlphaLimit = 2;
                }})
            }
        }
    }

    async Import() {
        BABYLON.SceneLoader.ShowLoadingScreen = false;
        const sceneappend = await BABYLON.SceneLoader.AppendAsync('/models/models.glb', undefined, scene, function (event) {
            
            const percentage = event.lengthComputable ? (event.loaded / event.total * 100) : 0;

            store.state.onLoaded = percentage/2
        }, ".glb")
        sceneappend.stopAllAnimations()
    }

    clickedPoints(){
        const chair = scene.getNodeByName('Layer:3D.001')
        this.hover(chair)
    }

    hover(mesh) {
        if(mesh.actionManager == null) mesh.actionManager = new BABYLON.ActionManager(scene);
		mesh.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				{trigger: BABYLON.ActionManager.OnPointerOverTrigger},
				() => this.hl.addMesh(mesh, BABYLON.Color3.FromHexString('#3DB7F6'))
			)
		);
		mesh.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				{trigger: BABYLON.ActionManager.OnPointerOutTrigger},
				() => this.hl.removeMesh(mesh)
			)
		);
	}





    focus({element = null, oldRadius = null, oldTarget = null, callback = ()=>{}}){
        const FPS = 30
        if (element) {
            var newTarget = element.absolutePosition.clone()

            var targetFocus = new BABYLON.Animation("targetFocus", "target", FPS, VECTOR3, CONSTANT);
            targetFocus.setKeys([{ frame: 0, value: this.camera.target }, { frame: 8, value: newTarget }]);

            var radiusFocus = new BABYLON.Animation("radiusFocus", "radius", FPS, FLOAT, CONSTANT);

            var nerRadius = this.sizeObject(element);
            radiusFocus.setKeys([{ frame: 0, value: this.camera.radius }, { frame: 8, value: nerRadius }]);

            scene.beginDirectAnimation(this.camera, [targetFocus, radiusFocus], 0, FPS, false, 1.0, () => {
                callback()
            });
        }
        else{
            var targetFocus = new BABYLON.Animation("targetFocus", "target", FPS, VECTOR3, CONSTANT);
            targetFocus.setKeys([{ frame: 0, value: this.camera.target }, { frame: 8, value: oldTarget }]);
            var radiusFocus = new BABYLON.Animation("radiusFocus", "radius", FPS, FLOAT, CONSTANT);
            radiusFocus.setKeys([{ frame: 0, value: this.camera.radius }, { frame: 8, value: oldRadius }]);

            scene.beginDirectAnimation(this.camera, [targetFocus, radiusFocus], 0, FPS, false, 1.0, () => {
                callback()
            });
        }
    }

    sizeObject(object) {
        var minCoords = object.getBoundingInfo().boundingBox.minimumWorld
        var maxCoords = object.getBoundingInfo().boundingBox.maximumWorld
        var coorLength = [Math.abs(minCoords.x - maxCoords.x), Math.abs(minCoords.y - maxCoords.y), Math.abs(minCoords.z - maxCoords.z)]
        return Math.max(...coorLength) + 3
    }
}