import { Preview } from "@/components/Preview";
import { func } from "@common/libs/function";
import type { Input } from "@common/types/input";
function App() {
	return <Preview output={func({} as Input)} />;
}

export default App;
