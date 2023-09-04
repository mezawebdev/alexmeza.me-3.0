import Utils from './Utils';
import config from '../app.config';
import Planet from './Planet';
import Sun from './Sun';
import Light from './Light';
import SpaceBox from './SpaceBox';
import Effects from './Effects';
import Stars from './Stars';
import AsteroidBelt from './AsteroidBelt';
import Target from './Target';
import Game from './Game/Game';
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color4,
  MeshBuilder,
  HemisphericLight,
  Animation,
  PowerEase,
  EasingFunction,
  TransformNode,
} from 'babylonjs';

class World {
  mode: string;
  canvasElId: string;
  initialPagePath: string;
  canvas: HTMLCanvasElement;
  engine: Engine;
  scene: Scene;
  camera: ArcRotateCamera;
  light: HemisphericLight;
  spaceBox: SpaceBox;
  effects: Effects;
  sphere: MeshBuilder;
  sun: Sun;
  planets: Array<Planet>;
  lights: Array<Light>;
  planetsRotationAxis: { [key: string]: Vector3 };
  pivot: TransformNode;
  stars: Stars;
  target: Target;
  asteroidBelt: AsteroidBelt;
  playingGame: boolean;
  game: Game;
  onLoaded: () => void;

  constructor(
    canvasElId: string,
    initialPagePath: string,
    onLoaded: () => void
  ) {
    this.onLoaded = onLoaded;
    this.mode = Utils.isMobile() ? 'mobile' : 'desktop';
    this.canvasElId = canvasElId;
    this.initialPagePath = initialPagePath;
    this.canvas = document.getElementById(this.canvasElId) as HTMLCanvasElement;
    this.engine = new Engine(this.canvas, true, { stencil: true });
    this.scene = new Scene(this.engine);
    this.camera = new ArcRotateCamera(
      'Camera',
      config.world.camera.initialPosition.alpha,
      config.world.camera.initialPosition.beta,
      config.world.camera.initialPosition.radius,
      new Vector3(
        config.world.camera.initialPosition.x,
        config.world.camera.initialPosition.y,
        config.world.camera.initialPosition.z
      ),
      this.scene
    );
    this.camera.setTarget(Vector3.Zero());
    this.camera.maxZ = 17000;
    this.scene.clearColor = new Color4(0, 0, 0, 1);
    this.planets = [];
    this.lights = [];
    this.playingGame = false;
    this.createWorld();
    this.engine.runRenderLoop(() => this.scene.render());
    this.resize();
    if (config.world.debug.showAxis)
      Utils.showWorldAxis(config.world.debug.axisSize, this.scene);
    this.scene.registerAfterRender(() => {
      this.rotatePlanets();
      if (this.playingGame) this.game.controllers.update();
    });

    window.moveToNewTarget = (target, callback) => {
      this.moveToNewTarget(target, callback);
    };

    setTimeout(() => onLoaded(), 1000);
  }

  public resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.engine.resize();
  }

  public createWorld(): void {
    if (config.world.objects.showSun) {
      this.sun = new Sun(
        config.world.objects.sun.key,
        config.world.objects.sun.diameter,
        config.world.objects.sun.initialPosition.x,
        config.world.objects.sun.initialPosition.y,
        config.world.objects.sun.initialPosition.z,
        config.world.objects.sun.texture,
        config.world.objects.sun.rotation,
        config.world.objects.sun.layers === undefined
          ? []
          : config.world.objects.sun.layers,
        config.world.objects.sun.effects === undefined
          ? {}
          : config.world.objects.sun.effects,
        config.world.objects.sun.target === undefined
          ? {}
          : config.world.objects.sun.target,
        config.world.objects.sun.cameraPlacement === undefined
          ? {}
          : config.world.objects.sun.cameraPlacement,
        config.world.objects.sun.debug,
        this.scene
      );
    }

    if (config.world.objects.showPlanets) {
      config.world.objects.planets.forEach((planet) => {
        this.planets.push(
          new Planet(
            planet.key,
            planet.diameter,
            planet.initialPosition.x,
            planet.initialPosition.y,
            planet.initialPosition.z,
            planet.texture || '',
            planet.rotation,
            planet.layers === undefined ? [] : planet.layers,
            planet.effects === undefined ? {} : planet.effects,
            planet.target === undefined ? {} : planet.target,
            planet.cameraPlacement === undefined ? {} : planet.cameraPlacement,
            planet.debug,
            this.scene
          )
        );
      });
    }

    if (config.world.camera.initialPlanetFollow !== 'none') {
      let planetToFollowKey;

      switch (this.initialPagePath) {
        case '/':
          planetToFollowKey = 'earth';
          break;
        case '/about':
          planetToFollowKey = 'venus';
          break;
        case '/work':
          planetToFollowKey = 'mars';
          break;
        case '/contact':
          planetToFollowKey = 'mercury';
          break;
        default:
          planetToFollowKey = 'earth';
          break;
      }

      const planetToFollow = this.planets.find((planet) => {
        return planet.key === planetToFollowKey;
      });

      if (planetToFollow !== undefined) {
        this.target = new Target(this, planetToFollow);
        this.camera.setTarget(this.target.mesh);
        this.camera.alpha = planetToFollow.cameraPlacement.alpha;
        this.camera.beta = planetToFollow.cameraPlacement.beta;
        this.camera.radius = planetToFollow.cameraPlacement.radius;
      }
    }

    if (config.world.showLights) {
      config.world.lights.forEach((light) => {
        this.lights.push(
          new Light(
            light.key,
            light.initialPosition.x,
            light.initialPosition.y,
            light.initialPosition.z,
            light.intensity,
            this.scene
          )
        );
      });
    }

    if (config.world.spacebox.enabled) {
      this.spaceBox = new SpaceBox('light-blue', this.scene);
      this.scene.registerAfterRender(() => this.spaceBox.rotate());
    }

    if (config.world.effects.enabled)
      this.effects = new Effects(this.scene, this);
    if (config.world.objects.stars.enabled) this.stars = new Stars(this.scene);
    if (config.world.objects.asteroidBelt.enabled)
      this.asteroidBelt = new AsteroidBelt(this.scene);
  }

  public rotatePlanets(): void {
    this.planets.forEach((planet) => {
      planet.mesh.rotation.y += planet.rotation.speed;
    });

    this.sun.mesh.rotation.y += this.sun.rotation.speed;
    this.sun.mesh.rotation.z += this.sun.rotation.speed;
  }

  public getPlanetByKey(key: string): Planet {
    return this.planets.find((planet) => {
      return planet.key === key;
    });
  }

  public async moveToNewTarget(targetKey: string, cb = function () {}) {
    const targetAnimation = {
        x: new Animation(
          'newTargetX',
          'position.x',
          30,
          Animation.ANIMATIONTYPE_FLOAT,
          Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
        y: new Animation(
          'newTargetY',
          'position.y',
          30,
          Animation.ANIMATIONTYPE_FLOAT,
          Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
        z: new Animation(
          'newTargetZ',
          'position.z',
          30,
          Animation.ANIMATIONTYPE_FLOAT,
          Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
      },
      cameraAnimation = {
        alpha: new Animation(
          'alpha',
          'alpha',
          30,
          Animation.ANIMATIONTYPE_FLOAT,
          Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
        beta: new Animation(
          'beta',
          'beta',
          30,
          Animation.ANIMATIONTYPE_FLOAT,
          Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
        radius: new Animation(
          'radius',
          'radius',
          30,
          Animation.ANIMATIONTYPE_FLOAT,
          Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
      };
    const newTargetPlanet: Planet = this.getPlanetByKey(targetKey);
    const easingFunction = new PowerEase();

    easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
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
          value: this.camera.alpha,
        },
        {
          frame: 100,
          value: newTargetPlanet.cameraPlacement.alpha,
        },
      ]);

      cameraAnimation.beta.setKeys([
        {
          frame: 0,
          value: this.camera.beta,
        },
        {
          frame: 100,
          value: newTargetPlanet.cameraPlacement.beta,
        },
      ]);

      cameraAnimation.radius.setKeys([
        {
          frame: 0,
          value: this.camera.radius,
        },
        {
          frame: 100,
          value: newTargetPlanet.cameraPlacement.radius,
        },
      ]);

      targetAnimation.x.setKeys([
        {
          frame: 0,
          value: this.target.mesh.position.x,
        },
        {
          frame: 100,
          value: newTargetPlanet.target.x,
        },
      ]);

      targetAnimation.y.setKeys([
        {
          frame: 0,
          value: this.target.mesh.position.y,
        },
        {
          frame: 100,
          value: newTargetPlanet.target.y,
        },
      ]);

      targetAnimation.z.setKeys([
        {
          frame: 0,
          value: this.target.mesh.position.z,
        },
        {
          frame: 100,
          value: newTargetPlanet.target.z,
        },
      ]);

      this.target.mesh.animations = [
        targetAnimation.x,
        targetAnimation.y,
        targetAnimation.z,
      ];
      this.camera.animations = [
        cameraAnimation.alpha,
        cameraAnimation.beta,
        cameraAnimation.radius,
      ];

      const anim1 = this.scene.beginAnimation(
        this.target.mesh,
        0,
        100,
        false,
        2
      );

      this.scene.beginAnimation(this.camera, 0, 100, false, 2);

      await anim1.waitAsync();

      cb();
    } else {
      return;
    }
  }

  public startGame(): void {
    this.target.newUnlockedTarget();
    this.camera.setTarget(this.target.mesh);
    this.game = new Game(this);
    this.playingGame = true;
  }
}

export default World;
