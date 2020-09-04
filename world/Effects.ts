import * as BN from "babylonjs";
import config from "../app.config";
import World from "./World";

const App: any = config;

export default class Effects {
    scene: BN.Scene;
    glow: any;
    meshesToGlow: Array<any>;
    world: World;

    constructor(scene: BN.Scene, world: World) {
        this.scene = scene;
        this.world = world;
        this.meshesToGlow = [];

        if (App.world.effects.fog.enabled) {
            this.initFog();
        }

        if (App.world.effects.glow.enabled) {
            this.initGlow();
        }
    }

    public initFog(): void {
        this.scene.fogMode = BN.Scene.FOGMODE_EXP2;
        this.scene.fogDensity = App.world.effects.fog.density;
        this.scene.fogColor = BABYLON.Color3.FromHexString(App.world.effects.fog.color);
    }

    public initGlow(): void {
        this.glow = new BN.GlowLayer("glow", this.scene);
        this.glow.intensity = App.world.effects.glow.intensity;
        this.glow.addIncludedOnlyMesh(this.scene.getMeshByName("sun"));
        this.glow.addIncludedOnlyMesh(this.scene.getMeshByName("sun-second-layer"));
        this.world.planets.forEach(planet => {
            this.glow.addIncludedOnlyMesh(this.scene.getMeshByName(planet.key));
        });
    }
}