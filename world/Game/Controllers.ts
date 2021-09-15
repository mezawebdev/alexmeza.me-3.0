import World from "../World";

export default class Controllers {
    world: World;

    constructor(world: World) {
        this.world = world;
        this.setControllers();
    }

    public setControllers(): void {

    }

    public update(): void {
        this.world.target.mesh.position.x += 1;
        // console.log("yo");
        // console.log(camera);
        // camera.position.x += 100;
        // console.log(camera.position.x);
        // this.world.target.mesh.position.x += 1;
    }
}