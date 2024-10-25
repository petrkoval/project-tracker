import {Layout as AntLayout} from 'antd';
import {Outlet} from "react-router-dom";
import {Sider} from "@widgets/sider";
import {Header} from "@widgets/header";
import {Footer} from "@widgets/footer";
import {motion} from 'framer-motion';

const {Content} = AntLayout;

export function Layout() {

	return (
		<AntLayout style={{height: '100dvh', overflow: 'hidden'}}>
			<Header/>
			<AntLayout>
				<Sider/>
				<Content>
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{duration: 0.2}}
						style={{overflow: 'hidden', height: "100%"}}
					>
						<Outlet/>
					</motion.div>
				</Content>
			</AntLayout>
			<Footer/>
		</AntLayout>
	)
}