import config from "../app.config";
import { Scene, ParticleSystem, Texture, Vector3 } from "babylonjs";

const App: any = config;

export default class Stars {
    scene: Scene;
    particleSystem: any;

    constructor(scene: Scene) {
        this.scene = scene;
        this.particleSystem = new ParticleSystem("stars", 5000, this.scene);
        this.particleSystem.particleTexture = new Texture(App.world.objects.stars.texture, this.scene);
        this.particleSystem.emitter = new Vector3(App.world.objects.stars.origin.x, App.world.objects.stars.origin.y, App.world.objects.stars.origin.z);
        this.particleSystem.minEmitBox = new Vector3(App.world.objects.stars.minEmitBox.x, App.world.objects.stars.minEmitBox.y, App.world.objects.stars.minEmitBox.z); 
        this.particleSystem.maxEmitBox = new Vector3(App.world.objects.stars.maxEmitBox.x, App.world.objects.stars.maxEmitBox.y, App.world.objects.stars.maxEmitBox.z); 
        this.particleSystem.emitRate = App.world.objects.stars.emitRate;
        this.particleSystem.minSize = App.world.objects.stars.minSize;
        this.particleSystem.maxSize = App.world.objects.stars.maxSize;
        this.particleSystem.minLifeTime = App.world.objects.stars.minLifeTime;
        this.particleSystem.maxLifeTime = App.world.objects.stars.maxLifeTime;
        this.particleSystem.start();
    }
}