import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import type { Output } from "../../common/types/output";
import Col from "./Col";

type Props = {
	output: Output;
};

export const Preview: React.FC<Props> = ({ output }) => {
	return (
		<Canvas style={{ width: "100vw", height: "100vh" }}>
			<OrbitControls />
			<ambientLight intensity={Math.PI / 2} />
			{/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
			<Col col={output.left.subIndex} />
			<Col col={output.left.index} />
			<Col col={output.left.middle} />
			<Col col={output.left.ring} />
			<Col col={output.left.little} />
			<Col col={output.left.subLittle} />
		</Canvas>
	);
};
