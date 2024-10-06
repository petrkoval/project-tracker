import {Layout as AntLayout} from 'antd';
import {Outlet} from "react-router-dom";
import {Sider} from "@widgets/sider";
import {Header} from "@widgets/header";
import {Footer} from "@widgets/footer";

const {Content} = AntLayout;

export function Layout() {

	return (
		<AntLayout style={{minHeight: '100dvh'}}>
			<Header/>
			<AntLayout>
				<Sider/>
				<Content>
					<Outlet/>
				</Content>
			</AntLayout>
			<Footer/>
		</AntLayout>
	)
}