import {Layout as AntLayout} from 'antd';
import {Outlet} from "react-router-dom";
import {Sider} from "@widgets/sider";
import {Header} from "@widgets/header";

const {Content, Footer} = AntLayout;

export function Layout() {

	return (
		<AntLayout style={{minHeight: '100dvh'}}>
			<Header/>
			<AntLayout>
				<AntLayout>
					<Sider/>
					<Content>
						<Outlet/>
					</Content>
				</AntLayout>
				<Footer></Footer>
			</AntLayout>
		</AntLayout>
	)
}