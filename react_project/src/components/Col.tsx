import type { Col } from "@common/types/output";
import type { MeshProps } from "@react-three/fiber";
import { Key } from "./Key";

type Props = MeshProps & {
	col: Col;
};
// eslint-disable-next-line react-refresh/only-export-components
export default ({ col, ...props }: Props) => (
	<>
		<Key
			rowVectors={col.homeRowVector}
			keyVectors={col.perRow.numRow}
			{...props}
		/>
		<Key
			rowVectors={col.homeRowVector}
			keyVectors={col.perRow.upper}
			{...props}
		/>
		<Key
			rowVectors={col.homeRowVector}
			keyVectors={col.perRow.home}
			// color={keyPrimaryColor}
			{...props}
		/>
		<Key
			rowVectors={col.homeRowVector}
			keyVectors={col.perRow.bottom}
			{...props}
		/>
	</>
);
