import {FaMoon} from "react-icons/fa";
import {LuSun} from "react-icons/lu";
import {theme} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectThemeName, ThemeNames, toggleTheme} from "@features/switch-theme";

import "../style/switch-theme-button.scss";

export function SwitchThemeButton() {
	const dispatch = useDispatch();
	const {token: {colorPrimary, borderRadius}} = theme.useToken();
	const themeName = useSelector(selectThemeName);

	const onClick = () => {
		dispatch(toggleTheme());
	}

	return (
		<>
			<button className="switch-theme-btn" onClick={onClick} style={{borderRadius}} aria-label="toggle theme">
				{
					themeName === ThemeNames.dark
						? <FaMoon size={16} color={colorPrimary} aria-label="dark theme icon"/>
						: <LuSun size={16} color={colorPrimary} aria-label="light theme icon"/>
				}
			</button>
		</>
	)
}