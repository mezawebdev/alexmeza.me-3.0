import { PointLight, Color3, Scene, Vector3 } from 'babylonjs';

export default class Light {
  key: string;
  x: number;
  y: number;
  z: number;
  mesh: PointLight;
  scene: Scene;

  constructor(
    key: string,
    x: number,
    y: number,
    z: number,
    intensity: number,
    scene: Scene
  ) {
    this.key = key;
    this.scene = scene;
    this.mesh = new PointLight(this.key, new Vector3(x, y, z), this.scene);
    this.mesh.diffuse = new Color3(1, 1, 1);
    this.mesh.intensity = intensity;
    this.mesh.range = 5000;
  }
}
