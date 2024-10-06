import {FaMoon} from "react-icons/fa";
import {theme} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentTheme, Themes, toggleThemeToken} from "@features/switch-theme";

import "../style/switch-theme-button.scss";

export function SwitchThemeButton() {
	const dispatch = useDispatch();
	const {token: {colorPrimary, borderRadius}} = theme.useToken();
	const currentTheme = useSelector(selectCurrentTheme);

	const onClick = () => {
		dispatch(toggleThemeToken());
	}

	const setColor = () => {
		switch (currentTheme) {
			case Themes.dark:
				return colorPrimary;
			case Themes.light:
				return undefined;
			default:
				return undefined;
		}
	}

	return (
		<>
			<button className="switch-theme-btn" onClick={onClick} style={{borderRadius}}>
				<FaMoon size={16} color={setColor()}/>
			</button>
		</>
	)
}