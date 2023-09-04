import World from './World';
import { Scene, Color3, GlowLayer, Mesh } from 'babylonjs';
import { config } from 'app.config';

export default class Effects {
  scene: Scene;
  glow: GlowLayer;
  meshesToGlow: Mesh[];
  world: World;

  constructor(scene: Scene, world: World) {
    this.scene = scene;
    this.world = world;
    this.meshesToGlow = [];
    if (config.world.effects.fog.enabled) this.initFog();
    if (config.world.effects.glow.enabled) this.initGlow();
  }

  public initFog(): void {
    this.scene.fogMode = Scene.FOGMODE_EXP2;
    this.scene.fogDensity = config.world.effects.fog.density;
    this.scene.fogColor = Color3.FromHexString(config.world.effects.fog.color);
  }

  public initGlow(): void {
    this.glow = new GlowLayer('glow', this.scene);
    this.glow.intensity = config.world.effects.glow.intensity;
    this.glow.addIncludedOnlyMesh(
      this.scene.getMeshByName('sun-second-layer') as Mesh
    );
    this.world.planets.forEach((planet) =>
      this.glow.addIncludedOnlyMesh(
        this.scene.getMeshByName(planet.key) as Mesh
      )
    );
  }
}
