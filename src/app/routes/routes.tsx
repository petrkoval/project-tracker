import {Route, Routes as BrowserRoutes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {Layout} from "@app/layout";
import {Projects} from "@pages/projects";

export function Routes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<BrowserRoutes location={location} key={location.pathname}>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Projects/>}/>
				</Route>
			</BrowserRoutes>
		</AnimatePresence>
	)
}