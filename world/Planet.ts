import * as BABYLON from "babylonjs";
import RotationAxis from "./RotationAxis";
import { CellMaterial } from "babylonjs-materials";

interface rotation {
    axis: {
        x: number,
        y: number,
        z: number;
    },
    angle: number,
    speed: number
}

interface debug {
    showRing: boolean,
    showInitialPosition: boolean
}

interface target {
    x: number,
    y: number,
    z: number
}

interface cameraPlacement {
    x: number,
    y: number,
    z: number
}

export default class Planet {
    key: string;
    mesh: any;
    diameter: number;
    x: number;
    y: number;
    z: number;
    texture: string;
    rotation: rotation;
    layers: Array<any>;
    effects: any;
    layerMeshes: Array<any>;
    scene: BABYLON.Scene;
    rotationAxis: RotationAxis;
    debug: debug;
    target: target;
    cameraPlacement: cameraPlacement;
    ring: any;
    initialPositionMesh: any;

    constructor(
        key: string, 
        diameter: number, 
        x: number,
        y: number, 
        z: number, 
        texture: string, 
        rotation: rotation, 
        layers: Array<any>, 
        effects: any,
        target: target,
        cameraPlacement: cameraPlacement,
        debug: debug, 
        scene: BABYLON.Scene) {
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
        this.mesh = BABYLON.MeshBuilder.CreateSphere(this.key, {
            diameter: this.diameter
        }, this.scene);

        this.mesh.position.x = this.x;
        this.mesh.position.y = this.y;
        this.mesh.position.z = this.z;
        this.rotationAxis = new RotationAxis(`${ this.key }-axis`, this.rotation.axis.x, this.rotation.axis.y, this.rotation.axis.z);

        if (this.texture.length > 0) {
            this.mesh.material = new BABYLON.StandardMaterial(`${ this.key }-texture`, this.scene);
            this.mesh.material.ambientTexture = new BABYLON.Texture(this.texture, this.scene);
            this.mesh.material.ambientTexture.uScale = -1;
            this.mesh.material.ambientTexture.vScale = -1;
            this.mesh.material.ambientTexture.unlit = true;
            this.mesh.material.specularColor = new BABYLON.Color3(0, 0, 0);
            this.mesh.material.transparencyMode = 0;
        }

        if (this.debug.showInitialPosition) {
            this.initialPositionMesh = BABYLON.MeshBuilder.CreateBox(`${ this.key }-initial-position`, {
                size: 50
            }, this.scene);
            this.initialPositionMesh.position.x = this.x;
            this.initialPositionMesh.position.y = this.y;
            this.initialPositionMesh.position.z = this.z;
            this.initialPositionMesh.material = new BABYLON.StandardMaterial(`${ this.key }-initial-position-material`, this.scene);
            this.initialPositionMesh.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
        }

        if (this.debug.showRing) {
            this.ring = BABYLON.MeshBuilder.CreateTorus(`${ this.key }-torus`, {
                thickness: 2,
                diameter: (Math.abs(this.z) * 3) - this.diameter,
                tessellation: 100
            }, this.scene);
        }

        if (this.layers.length > 0) {
            this.applyLayers();
        }

        if (this.effects.highlight) {
            this.applyHighlight();
        }

        this.mesh.parent = this.rotationAxis.pivot;
    }

    public applyLayers(): void {
        const hlLayers: Array<any> = [];

        this.layers.forEach((layer, i) => {
            switch (layer.type) {
                case "texture":
                    this.layerMeshes.push(
                        BABYLON.MeshBuilder.CreateSphere(`${ this.key }-layer-${ i }`, {
                            diameter: this.diameter + (0.4 * (i + 1))
                        }, this.scene)
                    );

                    this.layerMeshes[this.layerMeshes.length - 1].position.x = this.x;
                    this.layerMeshes[this.layerMeshes.length - 1].position.y = this.y;
                    this.layerMeshes[this.layerMeshes.length - 1].position.z = this.z;
                    this.layerMeshes[this.layerMeshes.length - 1].parent = this.rotationAxis.pivot;
                    this.layerMeshes[this.layerMeshes.length - 1].material = new BABYLON.StandardMaterial(`${ this.key }-layer-${ i }-material`, this.scene);
                    this.layerMeshes[this.layerMeshes.length - 1].material.diffuseTexture = new BABYLON.Texture(layer.texture, this.scene);
                    this.layerMeshes[this.layerMeshes.length - 1].material.disableLighting = false;
                    this.layerMeshes[this.layerMeshes.length - 1].material.useAlphaFromDiffuseTexture = true;
                    this.layerMeshes[this.layerMeshes.length - 1].material.diffuseTexture.hasAlpha = true;
                    this.layerMeshes[this.layerMeshes.length - 1].material.backFaceCulling = false;
                    this.layerMeshes[this.layerMeshes.length - 1].material.specularColor = new BABYLON.Color3(0, 0, 0);
                    this.layerMeshes[this.layerMeshes.length - 1].material.alpha = layer.alpha || 1;
                    this.layerMeshes[this.layerMeshes.length - 1].material.roughness = 10;

                    if (layer.rotate) {
                        this.scene.registerAfterRender(() => {
                            this.layerMeshes[this.layerMeshes.length - 1].rotation.y += layer.rotationSpeed;
                            this.layerMeshes[this.layerMeshes.length - 1].rotation.z += layer.rotationSpeed;
                        });
                    }

                    if (layer.rotate) {
                        hlLayers.push(new BABYLON.HighlightLayer(`${ layer.type }-${ i }-hl`, this.scene));
                        hlLayers[hlLayers.length - 1].addMesh(this.layerMeshes[this.layerMeshes.length - 1], BABYLON.Color3.FromHexString(layer.highlightColor));
                    }
                break;
                // case "highlight":
                //     this.layerMeshes.push(
                //         BABYLON.MeshBuilder.CreateSphere(`${ this.key }-layer-${ i }`, {
                //             diameter: this.diameter + (0.5 * (i + 1))
                //         }, this.scene)
                //     );

                //     this.layerMeshes[this.layerMeshes.length - 1].position.x = this.x;
                //     this.layerMeshes[this.layerMeshes.length - 1].position.y = this.y;
                //     this.layerMeshes[this.layerMeshes.length - 1].position.z = this.z;
                //     this.layerMeshes[this.layerMeshes.length - 1].parent = this.rotationAxis.pivot;
                //     this.layerMeshes[this.layerMeshes.length - 1].material = new BABYLON.StandardMaterial(`${ this.key }-layer-${ i }-material`, this.scene);
                //     this.layerMeshes[this.layerMeshes.length - 1].material.emissiveColor = BABYLON.Color3.FromHexString(layer.color);
                //     this.layerMeshes[this.layerMeshes.length - 1].material.backFaceCulling = false;
                //     this.layerMeshes[this.layerMeshes.length - 1].material.alpha = 0.02;
                // break;
            }
        });
    }

    public applyHighlight(): void {
        const hl = new BABYLON.HighlightLayer(`${ this.key }-hl`, this.scene);
        hl.addMesh(this.mesh, BABYLON.Color3.FromHexString(this.effects.highlightColor));
        hl.blurHorizontalSize = 100;
        hl.blurVerticalSize = 100;
    }
}