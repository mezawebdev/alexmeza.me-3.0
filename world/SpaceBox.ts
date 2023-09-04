import config from '../app.config';
import {
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Texture,
  Scene,
  Mesh,
} from 'babylonjs';

export default class SpaceBox {
  color: string;
  scene: Scene;
  mesh: Mesh;
  layer2: Mesh;

  constructor(color: string, scene: Scene) {
    this.scene = scene;
    this.color = color;
    this.mesh = MeshBuilder.CreateBox('spacebox', { size: 15000 }, this.scene);

    const material = new StandardMaterial('spacebox', this.scene);

    material.backFaceCulling = false;
    material.disableLighting = true;
    material.reflectionTexture = new CubeTexture(
      '/assets/textures/spacebox/' + this.color + '/',
      this.scene
    );
    material.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    material.alpha = 0.5;

    this.mesh.material = material;

    this.layer2 = MeshBuilder.CreateBox(
      'spacebox-layer-2',
      { size: 12000 },
      this.scene
    );

    const material2 = new StandardMaterial('spacebox-layer-2', this.scene);

    material2.backFaceCulling = false;
    material2.disableLighting = true;
    material2.reflectionTexture = new CubeTexture(
      '/assets/textures/spacebox/layer-2/',
      this.scene
    );
    material2.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    material2.alpha = 0.7;

    this.layer2.material = material2;
  }

  public rotate(): void {
    this.mesh.rotation.x += config.world.spacebox.speed;
    this.mesh.rotation.y += config.world.spacebox.speed;
    this.mesh.rotation.z += config.world.spacebox.speed;
    this.layer2.rotation.x -= config.world.spacebox.speed;
    this.layer2.rotation.y -= config.world.spacebox.speed;
    this.layer2.rotation.z -= config.world.spacebox.speed;
  }
}
