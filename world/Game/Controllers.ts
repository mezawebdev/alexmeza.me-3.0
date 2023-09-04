import World from '../World';

export default class Controllers {
  world: World;

  constructor(world: World) {
    this.world = world;
    this.setControllers();
  }

  public setControllers(): void {}

  public update(): void {
    this.world.target.mesh.position.x += 1;
  }
}
