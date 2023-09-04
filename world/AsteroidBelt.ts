import { SolidParticleSystem, MeshBuilder, Scene, Mesh } from 'babylonjs';

export default class AsteroidBelt {
  scene: Scene;
  SPS: SolidParticleSystem;
  mesh: Mesh;
  builtMesh: Mesh;

  constructor(scene: Scene) {
    this.scene = scene;
    this.SPS = new SolidParticleSystem('asteroid-belt', this.scene);
    this.mesh = MeshBuilder.CreateSphere('asteroid', { diameter: 10 });
    this.SPS.addShape(this.mesh, 100);
    this.SPS.billboard = true;
    this.SPS.setParticles();
    this.builtMesh = this.SPS.buildMesh();
    this.builtMesh.position.y = 300;
  }
}
