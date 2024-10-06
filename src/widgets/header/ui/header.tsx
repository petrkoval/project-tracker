import {Logo} from "@shared/logo";
import {Link} from "react-router-dom";
import {theme} from "antd";
import {Header as AntHeader} from "antd/es/layout/layout";


export function Header() {
	const {token: {colorText}} = theme.useToken();

	return (
		<AntHeader style={{paddingInline: '1.25rem'}}>
			<Link to="/" style={{color: colorText, display: 'inline'}}>
				<Logo/>
			</Link>
		</AntHeader>
	)
}