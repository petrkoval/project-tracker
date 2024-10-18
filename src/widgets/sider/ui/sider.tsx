import {default as AntSider} from "antd/es/layout/Sider";
import {Link, useLocation} from "react-router-dom";
import {Menu, MenuProps, theme} from "antd";
import {MdDashboard} from "react-icons/md";
import {PiFoldersDuotone} from "react-icons/pi";
import {FaHome, FaTasks} from "react-icons/fa";
import {IoStatsChart} from "react-icons/io5";
import {LuMessagesSquare} from "react-icons/lu";
import {selectThemeName, SwitchThemeButton} from "@features/switch-theme";
import {useSelector} from "react-redux";
import {Links} from "@shared/enums";
import {useSiderCollapse} from "@widgets/sider";


const items: MenuProps['items'] = [
	{
		key: Links.HOME,
		icon: <FaHome/>,
		label: <Link to={Links.HOME}>Моя страница</Link>
	},
	{
		type: "divider"
	},
	{
		key: Links.PROJECTS,
		icon: <PiFoldersDuotone/>,
		label: <Link to={Links.PROJECTS}>Проекты</Link>
	},
	{
		key: Links.DASHBOARDS,
		icon: <MdDashboard/>,
		label: <Link to={Links.DASHBOARDS}>Дашборды</Link>
	},
	{
		key: Links.STATS,
		icon: <IoStatsChart/>,
		label: <Link to={Links.STATS}>Статистика</Link>
	},
	{
		key: Links.TASKS,
		icon: <FaTasks/>,
		label: <Link to={Links.TASKS}>Задачи</Link>
	},
	{
		key: Links.MESSAGES,
		icon: <LuMessagesSquare/>,
		label: <Link to={Links.MESSAGES}>Сообщения</Link>
	},
];

export function Sider() {
	const [siderCollapsed, setSiderCollapsed] = useSiderCollapse();
	const currentTheme = useSelector(selectThemeName);
	const location = useLocation();

	const {token: {colorBorder}} = theme.useToken();

	return (
		<AntSider collapsible
				  collapsed={siderCollapsed}
				  onCollapse={() => setSiderCollapsed(prev => !prev)}
				  style={{position: 'relative', borderRight: `1px solid ${colorBorder}`}}
				  theme={currentTheme}>
			<Menu items={items}
				  mode="vertical"
				  theme={currentTheme}
				  style={{borderRight: 'none'}}
				  selectedKeys={[location.pathname]}
			/>

			<SwitchThemeButton/>
		</AntSider>
	)
}
