import * as BN from "babylonjs";
import { SolidParticleSystem } from "babylonjs";

export default class AsteroidBelt {
    scene: BN.Scene;
    SPS: any;
    mesh: any;
    builtMesh: any;

    constructor(scene: BN.Scene) {
        this.scene = scene;
        this.SPS = new SolidParticleSystem("asteroid-belt", this.scene);
        console.log(this.SPS);
        this.mesh = BABYLON.MeshBuilder.CreateSphere("asteroid", {
            diameter: 10
        });
        this.SPS.addShape(this.mesh, 100);
        this.SPS.billboard = true; // or false by default
        this.SPS.setParticles();     
        this.builtMesh = this.SPS.buildMesh();
        this.builtMesh.position.y = 300;
    }
}
