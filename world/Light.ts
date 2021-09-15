import * as BABYLON from 'babylonjs';

export default class Light {
    key: string;
    x: number;
    y: number;
    z: number;
    mesh: any;
    scene: BABYLON.Scene;

    constructor(key: string, x: number, y: number, z: number, intensity: number, scene: BABYLON.Scene) {
        this.key = key;
        this.scene = scene;
        this.mesh = new BABYLON.PointLight(this.key, new BABYLON.Vector3(x, y, z), this.scene);
        this.mesh.diffuse = new BABYLON.Color3(1, 1, 1);
        this.mesh.intensity = intensity;
        this.mesh.range = 5000;
    }
}