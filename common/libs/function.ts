import type { Input } from "../types/input";
import type { Output } from "../types/output";
// https://www.airc.aist.go.jp/dhrt/hand/data/list.html
import { Vector } from "../types/vector";

main();

function main() {
	const maleAverage: Input = {
		hand: {
			digits: {
				thumb: {
					breadth: 20.1,
					length: 55.1,
					circumference: 64.5,
					shape: null,
				},
				index: {
					breadth: 15.6,
					length: 82.4,
					circumference: 61.6,
					shape: null,
				},
				middle: {
					breadth: 18.1,
					length: 93.4,
					circumference: 63,
					shape: null,
				},
				ring: {
					breadth: 17.0,
					length: 88.7,
					circumference: 59.1,
					shape: null,
				},
				little: {
					breadth: 15,
					length: 69,
					circumference: 51.9,
					shape: null,
				},
			},
		},
	};
	console.log(func(maleAverage));
}

export function func(_input: Input): Output {
	const mockPos = new Vector(0, 0, 0);
	const mockRow = {
		perRow: {
			bottom: {
				pos: new Vector(0, -20, 0),
				dir: mockPos,
			},
			home: {
				pos: new Vector(0, 0, 0),
				dir: mockPos,
			},
			numRow: {
				pos: new Vector(0, 19, 0),
				dir: mockPos,
			},
			upper: {
				pos: new Vector(0, 38, 0),
				dir: mockPos,
			},
		},
	};
	return {
		left: {
			index: {
				homeRowVector: {
					pos: new Vector(40, 0, 0),
					dir: new Vector(0, 0, 0),
				},
				...mockRow,
			},
			little: {
				homeRowVector: {
					pos: new Vector(0, 0, 0),
					dir: new Vector(0, 0, 0),
				},
				...mockRow,
			},
			middle: {
				homeRowVector: {
					pos: new Vector(-20, 0, 0),
					dir: new Vector(0, 0, 0),
				},
				...mockRow,
			},
			ring: {
				homeRowVector: {
					pos: new Vector(-40, 0, 0),
					dir: new Vector(0, 0, 0),
				},
				...mockRow,
			},
			subIndex: {
				homeRowVector: {
					pos: new Vector(-60, 0, 0),
					dir: new Vector(0, 0, 0),
				},
				...mockRow,
			},
			subLittle: {
				homeRowVector: {
					pos: new Vector(-80, 0, 0),
					dir: new Vector(0, 0, 0),
				},
				...mockRow,
			},
		},
	};
}
