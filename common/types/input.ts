export type Input = {
	hand: {
		digits: {
			thumb: Finger;
			index: Finger;
			middle: Finger;
			ring: Finger;
			little: Finger;
		};
	};
};

type Finger = {
	/**
	 * 指を伸ばした状態での、指の遠位指節間関節の最大幅
	 * PIPの幅
	 */
	breadth: number;
	/**
	 * 手の背面で、指のphalangion（指節点：基節骨の背側で最も近位にある点）をみつ
け、マークをつける。手を（指と手掌を）のばした状態での、マークからから指の先端
までの直線距離。
	 * 背中側 L14~L18
	 */
	length: number; // 背中側
	/**
	 * 指をのばした状態での、近位指節間関節部における薬指の周長。
	 * PIP
	 */
	circumference: number;
	/**
	 * 指先の形
	 * 未定義
	 * AISTにないから自分で定義しないといけない
	 * PIP
	 */
	shape: null;
};
