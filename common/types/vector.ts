import { Vector3 } from "three";

export class Vector {
	constructor(
		public length: number,
		public width: number,
		public height: number,
	) {}

	add(vector2: Vector): Vector {
		return new Vector(
			this.length + vector2.length,
			this.width + vector2.width,
			this.height + vector2.height,
		);
	}

	static fromVector3(v: Vector3): Vector {
		return new Vector(v.x, v.z, v.y);
	}

	toVector3(): Vector3 {
		return new Vector3(this.length, this.height, this.width);
	}

	toVector3Array(): Array<number> {
		return this.toVector3().toArray();
	}
}
