import { keySize, keySubColor } from "@common/constant";
import type { MeshProps } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { Mesh } from "three";

extend({ Mesh });
type Props = MeshProps & {
	position: [number, number, number];
	rotation: [number, number, number];
	color?: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export default ({ position, rotation, color, ...props }: Props) => {
	return (
		<mesh position={position} {...props} rotation={rotation}>
			<boxGeometry args={[keySize, 1, keySize]} />
			<meshStandardMaterial color={color ?? keySubColor} />
		</mesh>
	);
};
