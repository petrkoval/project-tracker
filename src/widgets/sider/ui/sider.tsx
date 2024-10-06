import {useState} from "react";
import {default as AntSider} from "antd/es/layout/Sider";
import {Link} from "react-router-dom";
import {Menu, MenuProps} from "antd";
import {MdDashboard} from "react-icons/md";
import {PiFoldersDuotone} from "react-icons/pi";
import {FaHome, FaTasks} from "react-icons/fa";
import {IoStatsChart} from "react-icons/io5";
import {LuMessagesSquare} from "react-icons/lu";


const items: MenuProps['items'] = [
	{
		key: '0',
		icon: <FaHome/>,
		label: <Link to="/">Моя страница</Link>
	},
	{
		type: "divider"
	},
	{
		key: '1',
		icon: <PiFoldersDuotone/>,
		label: <Link to="/">Проекты</Link>
	},
	{
		key: '2',
		icon: <MdDashboard/>,
		label: <Link to="/">Дашборды</Link>
	},
	{
		key: '3',
		icon: <IoStatsChart/>,
		label: <Link to="/">Статистика</Link>
	},
	{
		key: '4',
		icon: <FaTasks/>,
		label: <Link to="/">Задачи</Link>
	},
	{
		key: '5',
		icon: <LuMessagesSquare/>,
		label: <Link to="/">Сообщения</Link>
	},
];

export function Sider() {
	const [siderCollapsed, setSiderCollapsed] = useState(false);

	return (
		<AntSider collapsible
				  collapsed={siderCollapsed}
				  onCollapse={() => setSiderCollapsed(prev => !prev)}
				  style={{paddingTop: '1rem'}}>
			<Menu items={items} mode="vertical" theme="dark" style={{marginTop: '1rem'}}/>
		</AntSider>
	)
}
