import * as BABYLON from 'babylonjs';
import Utils from "./Utils";
import config from "../app.config";
import Planet from "./Planet";
import Sun from "./Sun";
import Light from "./Light";
import SpaceBox from "./SpaceBox";
import Effects from "./Effects";
import Stars from "./Stars";
import AsteroidBelt from './AsteroidBelt';
import Target from './Target';

const App: any = config;

class World {
    canvasElId: string;
    canvas: HTMLCanvasElement;
    engine: BABYLON.Engine;
    scene: BABYLON.Scene;
    camera: BABYLON.ArcRotateCamera;
    light: BABYLON.HemisphericLight;
    spaceBox: SpaceBox;
    effects: Effects;
    sphere: BABYLON.MeshBuilder;
    sun: Sun;
    planets: Array<Planet>;
    lights: Array<Light>;
    planetsRotationAxis: any;
    pivot: any;
    stars: Stars;
    target: Target;
    asteroidBelt: AsteroidBelt;
    
    constructor(canvasElId: string) {
        this.canvasElId = canvasElId;
        this.canvas = document.getElementById(this.canvasElId) as HTMLCanvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true, { stencil: true });
        // this.engine.displayLoadingUI();
        this.scene = new BABYLON.Scene(this.engine);
        this.camera = new BABYLON.ArcRotateCamera("Camera", App.world.camera.initialPosition.alpha, App.world.camera.initialPosition.beta, App.world.camera.initialPosition.radius, new BABYLON.Vector3(App.world.camera.initialPosition.x, App.world.camera.initialPosition.y, App.world.camera.initialPosition.z), this.scene);
        this.camera.setTarget(BABYLON.Vector3.Zero());
        this.camera.attachControl(this.canvas, true);
        this.camera.maxZ = 17000;
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
        this.planets = [];
        this.lights = [];
        this.createWorld();

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        this.resize();

        if (App.world.debug.showAxis) {
            Utils.showWorldAxis(App.world.debug.axisSize, this.scene);
        }
        
        this.scene.registerAfterRender(() => {
            this.rotatePlanets();
        });
    }

    public resize(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.engine.resize();
    }

    public createWorld(): void {
        if (App.world.objects.showSun) {
            this.sun = new Sun(
                App.world.objects.sun.key, 
                App.world.objects.sun.diameter, 
                App.world.objects.sun.initialPosition.x,
                App.world.objects.sun.initialPosition.y,
                App.world.objects.sun.initialPosition.z,
                App.world.objects.sun.texture,
                App.world.objects.sun.rotation,
                App.world.objects.sun.layers === undefined ? [] : App.world.objects.sun.layers,
                App.world.objects.sun.effects === undefined ? {} : App.world.objects.sun.effects,
                App.world.objects.sun.target === undefined ? {} : App.world.objects.sun.target,
                App.world.objects.sun.cameraPlacement === undefined ? {} : App.world.objects.sun.cameraPlacement,
                App.world.objects.sun.debug,
                this.scene
            );
        }

        if (App.world.objects.showPlanets) {
            App.world.objects.planets.forEach(planet => {
                this.planets.push(new Planet(
                    planet.key, 
                    planet.diameter, 
                    planet.initialPosition.x,
                    planet.initialPosition.y,
                    planet.initialPosition.z,
                    planet.texture || "",
                    planet.rotation,
                    planet.layers === undefined ? [] : planet.layers,
                    planet.effects === undefined ? {} : planet.effects,
                    planet.target === undefined ? {} : planet.target,
                    planet.cameraPlacement === undefined ? {} : planet.cameraPlacement,
                    planet.debug,
                    this.scene
                ));
            });
        }

        if (App.world.camera.initialPlanetFollow !== "none") {
            const planetToFollow = this.planets.find(planet => { return planet.key === App.world.camera.initialPlanetFollow; });

            if (planetToFollow !== undefined) {
                this.target = new Target(this, planetToFollow);
                this.camera.setTarget(this.target.mesh);
                this.camera.position = new BABYLON.Vector3(planetToFollow.cameraPlacement.x, planetToFollow.cameraPlacement.y, planetToFollow.cameraPlacement.z)
                // this.camera.position.x = planetToFollow.cameraPlacement.x;
                // this.camera.position.y = planetToFollow.cameraPlacement.y;
                // this.camera.position.z = planetToFollow.cameraPlacement.z;
            }
        }

        if (App.world.showLights) {
            App.world.lights.forEach(light => {
                this.lights.push(new Light(
                    light.key,
                    light.initialPosition.x,
                    light.initialPosition.y,
                    light.initialPosition.z,
                    light.intensity,
                    this.scene
                ));
            });
        }

        if (App.world.spacebox.enabled) {
            this.spaceBox = new SpaceBox("light-blue", this.scene);

            this.scene.registerAfterRender(() => {
                this.spaceBox.rotate();
            });
        }

        if (App.world.effects.enabled) {
            this.effects = new Effects(this.scene, this);
        }

        if (App.world.objects.stars.enabled) {
            this.stars = new Stars(this.scene);
        }
        
        if (App.world.objects.asteroidBelt.enabled) {
            this.asteroidBelt = new AsteroidBelt(this.scene);
        }
    }

    public rotatePlanets(): void {
        this.planets.forEach(planet => {
            planet.mesh.rotation.y += planet.rotation.speed;
            planet.rotationAxis.pivot.rotate(new BABYLON.Vector3(0, 1, 0), planet.rotation.angle, BABYLON.Space.WORLD);
        });

        if (App.world.camera.animate) {
            this.camera.alpha -= 0.001275;
        }

        this.sun.mesh.rotation.y += this.sun.rotation.speed;
        this.sun.mesh.rotation.z += this.sun.rotation.speed;
    }

    public getPlanetByKey(key: string): Planet {
        return this.planets.find(planet => { return planet.key === key });
    }

    public moveToNewTarget(targetKey: string): void {
        let animationX = new BABYLON.Animation("newTargetX", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT),
            animationZ = new BABYLON.Animation("newTargetZ", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT),
            newTargetPlanet: Planet = this.getPlanetByKey(targetKey);

        if (newTargetPlanet) {
            animationX.setKeys([
                {
                    frame: 0,
                    value: this.target.mesh.position.x
                }, {
                    frame: 100,
                    value: newTargetPlanet.mesh.position.x
                }
            ]);

            animationZ.setKeys([
                {
                    frame: 0,
                    value: this.target.mesh.position.z
                }, {
                    frame: 100,
                    value: newTargetPlanet.mesh.position.z
                }
            ]);

            this.target.mesh.animations = [animationX, animationZ];

            this.scene.beginAnimation(this.target.mesh, 0, 100, false, 2);

            // @ts-ignore
            window.showMessage(`going to planet: ${ newTargetPlanet.key }`);
        } else {
            return;
        }
    }
}

export default World;