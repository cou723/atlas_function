import type { Vectors } from "@common/types/output";
import KeyCore from "./core";
type Props = {
	rowVectors: Vectors;
	keyVectors: Vectors;
	color?: string;
};

export const Key = ({ rowVectors, keyVectors, color }: Props) => {
	return (
		<KeyCore
			position={rowVectors.pos.add(keyVectors.pos).toVector3().toArray()}
			rotation={rowVectors.dir.add(keyVectors.dir).toVector3().toArray()}
			color={color}
		/>
	);
};
