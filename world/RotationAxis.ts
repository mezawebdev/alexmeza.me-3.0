export default class RotationAxes {
    key: string;
    x: number;
    y: number;
    z: number;
    pivot: any;

    constructor(key: string, x: number, y: number, z: number) {
        this.key = key;
        this.x = x;
        this.y = y;
        this.z = z;
        this.pivot = new BABYLON.TransformNode(this.key);
        this.pivot.position = new BABYLON.Vector3(
            this.x, 
            this.y, 
            this.z
        );
    }
}