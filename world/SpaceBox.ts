import * as BN from "babylonjs";
import config from "../app.config";

const App: any = config;

export default class SpaceBox {
    color: string;
    scene: BN.Scene;
    mesh: any;
    layer2: any;

    constructor(color: string, scene: BN.Scene) {
        this.scene = scene;
        this.color = color;

        this.mesh = BN.MeshBuilder.CreateBox("spacebox", {
            size: 15000
        }, this.scene);
        
        this.mesh.material = new BN.StandardMaterial("spacebox", this.scene);
        this.mesh.material.backFaceCulling = false;
        this.mesh.material.disableLighting = true;
        this.mesh.material.infiniteDistance = true;
        this.mesh.material.reflectionTexture = new BN.CubeTexture("/assets/textures/spacebox/" + this.color + "/", this.scene);
        this.mesh.material.reflectionTexture.coordinatesMode = BN.Texture.SKYBOX_MODE;
        this.mesh.material.alpha = 0.5;

        this.layer2 = BN.MeshBuilder.CreateBox("spacebox-layer-2", {
            size: 12000
        }, this.scene);

        this.layer2.material = new BN.StandardMaterial("spacebox-layer-2-material", this.scene);
        this.layer2.material.backFaceCulling = false;
        this.layer2.material.disableLighting = true;
        this.layer2.material.infiniteDistance = true;
        this.layer2.material.reflectionTexture = new BN.CubeTexture("/assets/textures/spacebox/layer-2/", this.scene);
        this.layer2.material.reflectionTexture.coordinatesMode = BN.Texture.SKYBOX_MODE;
        this.layer2.material.alpha = 0.7;
    }

    public rotate(): void {
        this.mesh.rotation.x += App.world.spacebox.speed;
        this.mesh.rotation.y += App.world.spacebox.speed;
        this.mesh.rotation.z += App.world.spacebox.speed;
        this.layer2.rotation.x -= App.world.spacebox.speed;
        this.layer2.rotation.y -= App.world.spacebox.speed;
        this.layer2.rotation.z -= App.world.spacebox.speed;
    }
}