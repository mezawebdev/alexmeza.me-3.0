import World from './World';
import Planet from './Planet';
import config from 'app.config';
import { MeshBuilder, StandardMaterial, Color3, Mesh } from 'babylonjs';

export default class Target {
  public world: World;
  public planetToFollow: Planet;
  public mesh: Mesh;

  constructor(world: World, planetToFollow: Planet) {
    this.world = world;
    this.planetToFollow = planetToFollow;
    this.create();
  }

  public create(): void {
    this.mesh = MeshBuilder.CreateBox('target', { size: 1 }, this.world.scene);
    this.mesh.position.x = this.planetToFollow.target.x;
    this.mesh.position.y = this.planetToFollow.target.y;
    this.mesh.position.z = this.planetToFollow.target.z;

    const material = new StandardMaterial('target-material', this.world.scene);

    material.emissiveColor = new Color3(1, 0, 0);
    material.alpha = config.world.debug.showTarget ? 1 : 0;

    this.mesh.material = material;
  }

  public newUnlockedTarget(): void {
    const currentPos = this.mesh.position;
    this.destroy();
    this.mesh = MeshBuilder.CreateBox('target', { size: 1 }, this.world.scene);
    this.mesh.position = currentPos;

    const material = new StandardMaterial('target-material', this.world.scene);

    material.emissiveColor = new Color3(1, 0, 0);
    this.mesh.material = material;
  }

  public destroy(): void {
    this.mesh.dispose();
  }
}
