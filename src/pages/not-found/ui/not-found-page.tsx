import {Button, Flex, Space, theme} from "antd";
import {useNavigate} from "react-router-dom";

import imageUrl from "@shared/assets/img/not-found.png";

export function NotFoundPage() {
	const {token: {colorBgBase, colorText}} = theme.useToken();
	const navigate = useNavigate();

	return (
		<div className="error-page" style={{
			height: "100dvh",
			backgroundColor: colorBgBase,
			color: colorText,
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<Flex align="center">
				<Space direction="vertical" size="large" style={{width:'400px'}}>
					<h2 style={{fontSize: "2.5rem"}}>Something is not right...</h2>
					<p style={{fontSize: "1.5rem"}}>
						Page you are trying to open does not exist. You may have mistyped the address, or the page has
						been moved to another URL. If you think this is an error contact support.
					</p>
					<Button type="default" onClick={() => navigate(-1)}>Get back to previous page</Button>
				</Space>
				<img src={imageUrl} alt="resource not found" style={{width:'500px'}}/>
			</Flex>
		</div>
	);
}