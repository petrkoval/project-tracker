import {enableMocking} from "@app/mocks";
import {createRoot} from "react-dom/client";
import {Providers} from "@app/providers";
import {Routes} from "@app/routes";

import "./style/index.scss";

enableMocking().then(() => {
	createRoot(document.getElementById("root")!).render(
		<Providers>
			<Routes/>
		</Providers>
	);
});