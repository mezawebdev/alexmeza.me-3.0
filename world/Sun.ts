import Planet from "./Planet";
import * as Materials from "babylonjs-materials";
import { Scene, Texture, MeshBuilder, StandardMaterial, Color3 } from "babylonjs";

interface target {
    x: number,
    y: number,
    z: number
}

interface cameraPlacement {
    x: number,
    y: number,
    z: number,
    alpha: number;
    beta: number;
    radius: number;
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
            scene: Scene) {
        super(key, diameter, x, y, z, texture, rotation, layer, effects, target, cameraPlacement, debug, scene);
        this.mesh.material.emissiveTexture = new Texture("/assets/textures/sun.jpg", this.scene);
        this.secondLayerMesh = MeshBuilder.CreateSphere("sun-second-layer", { diameter: this.diameter + 15 }, this.scene);
        this.secondLayerMesh.material = new StandardMaterial("sun-second-layer-material", this.scene);
        this.secondLayerMesh.material.emissiveColor = Color3.FromHexString("#FDB813");
        this.secondLayerMesh.material.alpha = 0.1;
        this.thirdLayerMesh = MeshBuilder.CreateSphere("sun-third-layer", { diameter: this.diameter + 10 }, this.scene);
        this.thirdLayerMesh.material = new Materials.LavaMaterial("lava", this.scene);
        this.thirdLayerMesh.material.noiseTexture = new Texture("/assets/textures/cloud.png", this.scene);
        this.thirdLayerMesh.material.diffuseTexture = new Texture("/assets/textures/lavatile.jpg", this.scene);
        this.thirdLayerMesh.material.speed = 1.5;
        this.thirdLayerMesh.material.unlit = true;
    }
}