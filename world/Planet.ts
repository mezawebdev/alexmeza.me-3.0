import {
  Scene,
  MeshBuilder,
  StandardMaterial,
  Texture,
  Color3,
  HighlightLayer,
  Mesh,
} from 'babylonjs';
import RotationAxis from './RotationAxis';

export interface rotation {
  axis: {
    x: number;
    y: number;
    z: number;
  };
  angle: number;
  speed: number;
}

export interface debug {
  showRing: boolean;
  showInitialPosition: boolean;
}

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

export default class Planet {
  key: string;
  mesh: Mesh;
  diameter: number;
  x: number;
  y: number;
  z: number;
  texture: string;
  rotation: rotation;
  layers: { [key: string]: string | number | boolean }[];
  effects: { [key: string]: string | number | boolean };
  layerMeshes: Mesh[];
  scene: Scene;
  rotationAxis: RotationAxis;
  debug: debug;
  target: target;
  cameraPlacement: cameraPlacement;
  ring: Mesh;
  initialPositionMesh: Mesh;

  constructor(
    key: string,
    diameter: number,
    x: number,
    y: number,
    z: number,
    texture: string,
    rotation: rotation,
    layers: { [key: string]: string | number | boolean }[],
    effects: { [key: string]: string | number | boolean },
    target: target,
    cameraPlacement: cameraPlacement,
    debug: debug,
    scene: Scene
  ) {
    this.key = key;
    this.diameter = diameter;
    this.x = x;
    this.y = y;
    this.z = z;
    this.texture = texture;
    this.rotation = rotation;
    this.layers = layers;
    this.effects = effects;
    this.target = target;
    this.cameraPlacement = cameraPlacement;
    this.layerMeshes = [];
    this.debug = debug;
    this.scene = scene;
    this.create();
  }

  public create(): void {
    this.mesh = MeshBuilder.CreateSphere(
      this.key,
      { diameter: this.diameter },
      this.scene
    );

    this.mesh.position.x = this.x;
    this.mesh.position.y = this.y;
    this.mesh.position.z = this.z;
    this.rotationAxis = new RotationAxis(
      `${this.key}-axis`,
      this.rotation.axis.x,
      this.rotation.axis.y,
      this.rotation.axis.z
    );

    if (this.texture.length > 0) {
      this.mesh.material = new StandardMaterial(
        `${this.key}-texture`,
        this.scene
      );

      const material = this.mesh.material as StandardMaterial;
      const texture = new Texture(this.texture, this.scene);
      texture.uScale = -1;
      texture.vScale = -1;
      // texture.unlit = true;

      material.ambientTexture = texture;
      material.specularColor = new Color3(0, 0, 0);
      material.transparencyMode = 0;
    }

    if (this.debug.showInitialPosition) {
      this.initialPositionMesh = MeshBuilder.CreateBox(
        `${this.key}-initial-position`,
        {
          size: 50,
        },
        this.scene
      );
      this.initialPositionMesh.position.x = this.x;
      this.initialPositionMesh.position.y = this.y;
      this.initialPositionMesh.position.z = this.z;

      const material = new StandardMaterial(
        `${this.key}-initial-position-material`,
        this.scene
      );

      material.emissiveColor = new Color3(1, 0, 0);
      this.initialPositionMesh.material = material;
    }

    if (this.debug.showRing) {
      this.ring = MeshBuilder.CreateTorus(
        `${this.key}-torus`,
        {
          thickness: 2,
          diameter: Math.abs(this.z) * 3 - this.diameter,
          tessellation: 100,
        },
        this.scene
      );
    }

    if (this.layers.length > 0) this.applyLayers();
    if (this.effects.highlight) this.applyHighlight();

    this.mesh.parent = this.rotationAxis.pivot;
  }

  public applyLayers(): void {
    this.layers.forEach((layer, i) => {
      if (layer.type === 'texture') {
        this.layerMeshes.push(
          MeshBuilder.CreateSphere(
            `${this.key}-layer-${i}`,
            { diameter: this.diameter + 0.4 * (i + 1) },
            this.scene
          )
        );

        const currentLayerMesh = this.layerMeshes[this.layerMeshes.length - 1];

        currentLayerMesh.position.x = this.x;
        currentLayerMesh.position.y = this.y;
        currentLayerMesh.position.z = this.z;
        currentLayerMesh.parent = this.rotationAxis.pivot;

        const material = new StandardMaterial(
          `${this.key}-layer-${i}-material`,
          this.scene
        );

        material.diffuseTexture = new Texture(
          layer.texture as string,
          this.scene
        );
        material.disableLighting = false;
        material.useAlphaFromDiffuseTexture = true;
        material.diffuseTexture.hasAlpha = true;
        material.backFaceCulling = false;
        material.specularColor = new Color3(0, 0, 0);
        material.alpha = (layer.alpha as number) || 1;
        material.roughness = 10;

        currentLayerMesh.material = material;

        if (layer.rotate) {
          this.scene.registerAfterRender(() => {
            currentLayerMesh.rotation.y += layer.rotationSpeed as number;
            currentLayerMesh.rotation.z += layer.rotationSpeed as number;
          });
        }
      }
    });
  }

  public applyHighlight(): void {
    const hl = new HighlightLayer(`${this.key}-hl`, this.scene, {
      renderingGroupId: 1,
    });
    hl.addMesh(
      this.mesh,
      Color3.FromHexString(this.effects.highlightColor as string)
    );
    hl.blurHorizontalSize = 100;
    hl.blurVerticalSize = 100;
    this.mesh.renderingGroupId = 1;
  }
}
