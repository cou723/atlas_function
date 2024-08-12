import type { Vector } from "./vector";

export type Output = {
	left: {
		subIndex: Col;
		index: Col;
		middle: Col;
		ring: Col;
		little: Col;
		subLittle: Col;
	};
};

export type Col = {
	/**
	 * このカラムあたりの位置を設定
	 */
	homeRowVector: Vectors;
	/**
	 * homeRowVectorを基準に+,-で位置を表現する
	 */
	perRow: ColVectors;
};

type ColVectors = {
	numRow: Vectors;
	upper: Vectors;
	home: Vectors;
	bottom: Vectors;
};

export type Vectors = { pos: Vector; dir: Vector };
