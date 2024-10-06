import {Layout as AntLayout} from 'antd';
import {useState} from "react";
import {Outlet} from "react-router-dom";

const {Sider, Header, Content, Footer} = AntLayout;

export function Layout() {
	const [siderCollapsed, setSiderCollapsed] = useState(false);

	return (
		<AntLayout style={{minHeight: '100dvh'}}>
			<Sider collapsible collapsed={siderCollapsed} onCollapse={() => setSiderCollapsed(prev => !prev)}>

			</Sider>
			<AntLayout>
				<Header></Header>
				<Content>
					<Outlet/>
				</Content>
				<Footer></Footer>
			</AntLayout>
		</AntLayout>
	)
}