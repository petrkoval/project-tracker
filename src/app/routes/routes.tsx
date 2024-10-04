import {Route, Routes as BrowserRoutes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

export function Routes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<BrowserRoutes location={location} key={location.pathname}>
				<Route path="/">

				</Route>
			</BrowserRoutes>
		</AnimatePresence>
	)
}