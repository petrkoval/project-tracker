import {FaMoon} from "react-icons/fa";
import {theme} from "antd";

import "../style/switch-theme-button.scss";
import {HTMLProps} from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
	active?: boolean;
}

export function SwitchThemeButton({active, onClick}: Props) {
	const {token: {colorPrimary, borderRadius}} = theme.useToken();

	return (
		<>
			<button className="switch-theme-btn" onClick={onClick} style={{borderRadius}}>
				<FaMoon size={16} color={active ? colorPrimary : undefined}/>
			</button>
		</>
	)
}