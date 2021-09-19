import config from "../app.config";
import { MeshBuilder, StandardMaterial, CubeTexture, Texture, Scene } from "babylonjs";

const App: any = config;

export default class SpaceBox {
    color: string;
    scene: Scene;
    mesh: any;
    layer2: any;

    constructor(color: string, scene: Scene) {
        this.scene = scene;
        this.color = color;
        this.mesh = MeshBuilder.CreateBox("spacebox", { size: 15000 }, this.scene);
        this.mesh.material = new StandardMaterial("spacebox", this.scene);
        this.mesh.material.backFaceCulling = false;
        this.mesh.material.disableLighting = true;
        this.mesh.material.infiniteDistance = true;
        this.mesh.material.reflectionTexture = new CubeTexture("/assets/textures/spacebox/" + this.color + "/", this.scene);
        this.mesh.material.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
        this.mesh.material.alpha = 0.5;
        this.layer2 = MeshBuilder.CreateBox("spacebox-layer-2", { size: 12000 }, this.scene);
        this.layer2.material = new StandardMaterial("spacebox-layer-2-material", this.scene);
        this.layer2.material.backFaceCulling = false;
        this.layer2.material.disableLighting = true;
        this.layer2.material.infiniteDistance = true;
        this.layer2.material.reflectionTexture = new CubeTexture("/assets/textures/spacebox/layer-2/", this.scene);
        this.layer2.material.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
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