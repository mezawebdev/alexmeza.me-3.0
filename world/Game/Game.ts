import Controllers from './Controllers';
import World from '../World';

export default class Game {
  controllers: Controllers;
  world: World;

  constructor(world: World) {
    this.world = world;
    this.controllers = new Controllers(this.world);
  }
}
