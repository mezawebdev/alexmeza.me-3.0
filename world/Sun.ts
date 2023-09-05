import Planet from './Planet';
import * as Materials from 'babylonjs-materials';
import {
  Scene,
  Texture,
  MeshBuilder,
  StandardMaterial,
  Color3,
  Mesh,
} from 'babylonjs';
import { rotation, debug } from './Planet';

interface target {
  x: number;
  y: number;
  z: number;
}

interface cameraPlacement {
  x: number;
  y: number;
  z: number;
  alpha: number;
  beta: number;
  radius: number;
}

export default class Sun extends Planet {
  secondLayerMesh: Mesh;
  thirdLayerMesh: Mesh;

  constructor(
    key: string,
    diameter: number,
    x: number,
    y: number,
    z: number,
    texture: string,
    rotation: rotation,
    layer: { [key: string]: string | number | boolean }[],
    effects: { [key: string]: string | number | boolean },
    target: target,
    cameraPlacement: cameraPlacement,
    debug: debug,
    scene: Scene
  ) {
    super(
      key,
      diameter,
      x,
      y,
      z,
      texture,
      rotation,
      layer,
      effects,
      target,
      cameraPlacement,
      debug,
      scene
    );

    const material1 = new StandardMaterial('sun-material', this.scene);

    material1.emissiveTexture = new Texture(
      '/assets/textures/sun.webp',
      this.scene
    );

    this.mesh.material = material1;

    this.secondLayerMesh = MeshBuilder.CreateSphere(
      'sun-second-layer',
      { diameter: this.diameter + 15 },
      this.scene
    );

    const material2 = new StandardMaterial(
      'sun-second-layer-material',
      this.scene
    );

    material2.emissiveColor = Color3.FromHexString('#FDB813');
    material2.alpha = 0.1;

    this.secondLayerMesh.material = material2;

    this.thirdLayerMesh = MeshBuilder.CreateSphere(
      'sun-third-layer',
      { diameter: this.diameter + 10 },
      this.scene
    );

    const material3 = new Materials.LavaMaterial('lava', this.scene);

    material3.noiseTexture = new Texture(
      '/assets/textures/cloud.webp',
      this.scene
    );
    material3.diffuseTexture = new Texture(
      '/assets/textures/lavatile.webp',
      this.scene
    );
    material3.speed = 1.5;
    material3.unlit = true;

    this.thirdLayerMesh.material = material3;
  }
}
