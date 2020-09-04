import Planet from "./Planet";
import * as BABYLON from "babylonjs";
import * as Materials from "babylonjs-materials";
import Target from "./Target";

interface target {
    x: number,
    y: number,
    z: number
}

interface cameraPlacement {
    x: number,
    y: number,
    z: number
}

export default class Sun extends Planet {
    secondLayerMesh: any;
    thirdLayerMesh: any;

    constructor(
            key: string, 
            diameter: number, 
            x: number, 
            y: number, 
            z: number, 
            texture: string, 
            rotation: any, 
            layer: Array<any>, 
            effects: any, 
            target: target, 
            cameraPlacement: cameraPlacement,
            debug: any, 
            scene: BABYLON.Scene) {
        super(key, diameter, x, y, z, texture, rotation, layer, effects, target, cameraPlacement, debug, scene);
        this.mesh.material.emissiveTexture = new BABYLON.Texture("/assets/textures/sun.jpg", this.scene);
        this.secondLayerMesh = BABYLON.MeshBuilder.CreateSphere("sun-second-layer", {
            diameter: this.diameter + 15
        }, this.scene);
        this.secondLayerMesh.material = new BABYLON.StandardMaterial("sun-second-layer-material", this.scene);
        this.secondLayerMesh.material.emissiveColor = BABYLON.Color3.FromHexString("#FDB813");
        this.secondLayerMesh.material.alpha = 0.1;
        this.thirdLayerMesh = BABYLON.MeshBuilder.CreateSphere("sun-third-layer", {
            diameter: this.diameter + 10
        }, this.scene);
        this.thirdLayerMesh.material = new Materials.LavaMaterial("lava", this.scene);
        this.thirdLayerMesh.material.noiseTexture = new BABYLON.Texture("/assets/textures/cloud.png", this.scene);
        this.thirdLayerMesh.material.diffuseTexture = new BABYLON.Texture("/assets/textures/lavatile.jpg", this.scene);
        this.thirdLayerMesh.material.speed = 1.5;
        this.thirdLayerMesh.material.unlit = true;
    }
}