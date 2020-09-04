import World from "./World";
import Planet from "./Planet";
import * as B from "babylonjs";

export default class Target {
    world: World;
    planetToFollow: Planet;
    mesh: any;

    constructor(world: World, planetToFollow: Planet) {
        this.world = world;
        this.planetToFollow = planetToFollow;
        this.create();
    }

    public create(): void {
        this.mesh = B.MeshBuilder.CreateBox("target", {
            size: 1
        }, this.world.scene);
        
        this.mesh.position.x = this.planetToFollow.target.x;
        this.mesh.position.y = this.planetToFollow.target.y;
        this.mesh.position.z = this.planetToFollow.target.z;
        this.mesh.material = new B.StandardMaterial("target-material", this.world.scene);
        this.mesh.material.emissiveColor = new B.Color3(1, 0, 0);
        this.mesh.parent = this.planetToFollow.rotationAxis.pivot;
        this.mesh.material.alpha = 0;
    }
}