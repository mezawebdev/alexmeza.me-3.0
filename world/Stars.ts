import config from '../app.config';
import { Scene, ParticleSystem, Texture, Vector3 } from 'babylonjs';

export default class Stars {
  scene: Scene;
  particleSystem: ParticleSystem;

  constructor(scene: Scene) {
    this.scene = scene;
    this.particleSystem = new ParticleSystem('stars', 5000, this.scene);
    this.particleSystem.particleTexture = new Texture(
      config.world.objects.stars.texture,
      this.scene
    );
    this.particleSystem.emitter = new Vector3(
      config.world.objects.stars.origin.x,
      config.world.objects.stars.origin.y,
      config.world.objects.stars.origin.z
    );
    this.particleSystem.minEmitBox = new Vector3(
      config.world.objects.stars.minEmitBox.x,
      config.world.objects.stars.minEmitBox.y,
      config.world.objects.stars.minEmitBox.z
    );
    this.particleSystem.maxEmitBox = new Vector3(
      config.world.objects.stars.maxEmitBox.x,
      config.world.objects.stars.maxEmitBox.y,
      config.world.objects.stars.maxEmitBox.z
    );
    this.particleSystem.emitRate = config.world.objects.stars.emitRate;
    this.particleSystem.minSize = config.world.objects.stars.minSize;
    this.particleSystem.maxSize = config.world.objects.stars.maxSize;
    this.particleSystem.minLifeTime = config.world.objects.stars.minLifeTime;
    this.particleSystem.maxLifeTime = config.world.objects.stars.maxLifeTime;
    this.particleSystem.start();
  }
}
