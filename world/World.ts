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
import Game from "./Game/Game";

const App: any = config;

class World {
    mode: string;
    canvasElId: string;
    initialPagePath: string;
    canvas: HTMLCanvasElement;
    engine: BABYLON.Engine;
    scene: BABYLON.Scene;
    camera: any;
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
    playingGame: boolean;
    game: Game;
    onLoaded: Function;
    
    constructor(canvasElId: string, initialPagePath: string, onLoaded: Function) {
        this.onLoaded = onLoaded;
        this.mode = Utils.isMobile() ? "mobile" : "desktop";
        this.canvasElId = canvasElId;
        this.initialPagePath = initialPagePath;
        this.canvas = document.getElementById(this.canvasElId) as HTMLCanvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true, { stencil: true });
        this.scene = new BABYLON.Scene(this.engine);
        this.camera = new BABYLON.ArcRotateCamera("Camera", App.world.camera.initialPosition.alpha, App.world.camera.initialPosition.beta, App.world.camera.initialPosition.radius, new BABYLON.Vector3(App.world.camera.initialPosition.x, App.world.camera.initialPosition.y, App.world.camera.initialPosition.z), this.scene);
        this.camera.setTarget(BABYLON.Vector3.Zero());
        // this.camera.attachControl(this.canvas, true);
        this.camera.maxZ = 17000;
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
        this.planets = [];
        this.lights = [];
        this.playingGame = false;
        this.createWorld();
        this.engine.runRenderLoop(() => this.scene.render());
        this.resize();
        if (App.world.debug.showAxis) Utils.showWorldAxis(App.world.debug.axisSize, this.scene);
        this.scene.registerAfterRender(() => {
            this.rotatePlanets();
            if (this.playingGame) this.game.controllers.update();
        });

        // @ts-ignore
        window.moveToNewTarget = (target, callback) => { this.moveToNewTarget(target, callback) };
        
        setTimeout(() => onLoaded(), 1000);
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
            let planetToFollowKey;

            switch (this.initialPagePath) {
                case "/":
                    planetToFollowKey = "earth";
                break;
                case "/about":
                    planetToFollowKey = "venus";
                break;
                case "/work":
                    planetToFollowKey = "mars";
                break;
                case "/contact":
                    planetToFollowKey = "mercury";
                break;
                default: 
                    planetToFollowKey = "earth";
                break;
            }

            const planetToFollow = this.planets.find(planet => { return planet.key === planetToFollowKey });

            if (planetToFollow !== undefined) {
                this.target = new Target(this, planetToFollow);
                this.camera.setTarget(this.target.mesh);
                // this.camera.position = new BABYLON.Vector3(
                //     planetToFollow.cameraPlacement.x, 
                //     planetToFollow.cameraPlacement.y, 
                //     planetToFollow.cameraPlacement.z
                // );
                // console.log(this.camera.position);
                this.camera.alpha = planetToFollow.cameraPlacement.alpha;
                this.camera.beta = planetToFollow.cameraPlacement.beta;
                this.camera.radius = planetToFollow.cameraPlacement.radius;
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
            this.scene.registerAfterRender(() => this.spaceBox.rotate());
        }

        if (App.world.effects.enabled) this.effects = new Effects(this.scene, this);
        if (App.world.objects.stars.enabled) this.stars = new Stars(this.scene);
        if (App.world.objects.asteroidBelt.enabled) this.asteroidBelt = new AsteroidBelt(this.scene);
    }

    public rotatePlanets(): void {
        this.planets.forEach(planet => {
            planet.mesh.rotation.y += planet.rotation.speed;
            // planet.rotationAxis.pivot.rotate(new BABYLON.Vector3(0, 1, 0), planet.rotation.angle, BABYLON.Space.WORLD);
        });

        // if (App.world.camera.animate && !this.playingGame) this.camera.alpha -= 0.001275;
        this.sun.mesh.rotation.y += this.sun.rotation.speed;
        this.sun.mesh.rotation.z += this.sun.rotation.speed;
    }

    public getPlanetByKey(key: string): Planet {
        return this.planets.find(planet => { return planet.key === key });
    }

    public async moveToNewTarget(targetKey: string, cb: any = function(){}) {
        let targetAnimation = {
                x:  new BABYLON.Animation("newTargetX", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT),
                y: new BABYLON.Animation("newTargetY", "position.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT),
                z: new BABYLON.Animation("newTargetZ", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            },
            cameraAnimation = {
                alpha: new BABYLON.Animation("alpha", "alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT),
                beta: new BABYLON.Animation("beta", "beta", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT),
                radius: new BABYLON.Animation("radius", "radius", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            }, 
            newTargetPlanet: Planet = this.getPlanetByKey(targetKey),
            easingFunction = new BABYLON.PowerEase();
        
        easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        targetAnimation.x.setEasingFunction(easingFunction);
        targetAnimation.y.setEasingFunction(easingFunction);
        targetAnimation.z.setEasingFunction(easingFunction);
        cameraAnimation.alpha.setEasingFunction(easingFunction);
        cameraAnimation.beta.setEasingFunction(easingFunction);
        cameraAnimation.radius.setEasingFunction(easingFunction);

        if (newTargetPlanet) {
            cameraAnimation.alpha.setKeys([
                {
                    frame: 0,
                    value: this.camera.alpha
                },
                {
                    frame: 100,
                    value: newTargetPlanet.cameraPlacement.alpha
                }
            ]);

            cameraAnimation.beta.setKeys([
                {
                    frame: 0,
                    value: this.camera.beta
                },
                {
                    frame: 100,
                    value: newTargetPlanet.cameraPlacement.beta
                }
            ]);

            cameraAnimation.radius.setKeys([
                {
                    frame: 0,
                    value: this.camera.radius
                },
                {
                    frame: 100,
                    value: newTargetPlanet.cameraPlacement.radius
                }
            ]);

            targetAnimation.x.setKeys([
                {
                    frame: 0,
                    value: this.target.mesh.position.x
                }, 
                {
                    frame: 100,
                    value: newTargetPlanet.target.x
                }
            ]);

            targetAnimation.y.setKeys([
                {
                    frame: 0,
                    value: this.target.mesh.position.y
                }, 
                {
                    frame: 100,
                    value: newTargetPlanet.target.y
                }
            ]);

            targetAnimation.z.setKeys([
                {
                    frame: 0,
                    value: this.target.mesh.position.z
                }, 
                {
                    frame: 100,
                    value: newTargetPlanet.target.z
                }
            ]);

            this.target.mesh.animations = [targetAnimation.x, targetAnimation.y, targetAnimation.z];
            this.camera.animations = [cameraAnimation.alpha, cameraAnimation.beta, cameraAnimation.radius];

            let anim1 = this.scene.beginAnimation(this.target.mesh, 0, 100, false, 2),
                anim2 = this.scene.beginAnimation(this.camera, 0, 100, false, 2);

            await anim1.waitAsync();
            // await anim2.waitAsync();

            cb();
        } else {
            return;
        }
    }

    public startGame(): void {
        // this.camera = new BABYLON.UniversalCamera("GameCamera", new BABYLON.Vector3(App.world.camera.initialPosition.x, App.world.camera.initialPosition.y, App.world.camera.initialPosition.z), this.scene);
        this.target.newUnlockedTarget();
        this.camera.setTarget(this.target.mesh);
        this.game = new Game(this);
        this.playingGame = true;
        console.log(this);
    }
}

export default World;