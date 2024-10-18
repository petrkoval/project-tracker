import {Layout as AntLayout} from 'antd';
import {Outlet} from "react-router-dom";
import {Sider} from "@widgets/sider";
import {Header} from "@widgets/header";
import {Footer} from "@widgets/footer";

const {Content} = AntLayout;

export function Layout() {

	return (
		<AntLayout style={{height: '100dvh', overflow: 'hidden'}}>
			<Header/>
			<AntLayout>
				<Sider/>
				<Content style={{overflow: 'auto'}}>
					<Outlet/>
				</Content>
			</AntLayout>
			<Footer/>
		</AntLayout>
	)
}