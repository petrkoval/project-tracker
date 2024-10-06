import {Footer as AntFooter} from "antd/es/layout/layout";
import {theme} from "antd";

export function Footer() {
	const {token: {colorBorder}} = theme.useToken();

	return (
		<AntFooter style={{borderTop: `1px solid ${colorBorder}`}}/>
	)
}