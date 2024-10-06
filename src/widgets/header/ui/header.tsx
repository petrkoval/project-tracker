import {Logo} from "@shared/logo";
import {Link} from "react-router-dom";
import {Button, Space, theme, Tooltip} from "antd";
import {Header as AntHeader} from "antd/es/layout/layout";
import {IoIosSettings} from "react-icons/io";
import {FaUser} from "react-icons/fa";
import {IoNotifications} from "react-icons/io5";


export function Header() {
	const {token: {colorText, colorBgBase, colorBorder}} = theme.useToken();

	return (
		<AntHeader
			style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: "1.5rem"}}>
			<Link to="/" style={{color: colorText, display: 'inline'}}>
				<Logo/>
			</Link>

			<Space style={{
				height: "3rem",
				backgroundColor: colorBgBase,
				borderRadius: "2rem",
				border: `1px solid ${colorBorder}`,
				paddingInline: ".5rem"
			}}>
				<Tooltip title="Уведомления">
					<Button shape="circle" type="default" icon={<IoNotifications/>}></Button>
				</Tooltip>

				<Tooltip title="Настройки">
					<Button shape="circle" type="default" icon={<IoIosSettings/>}></Button>
				</Tooltip>

				<Tooltip title="Учетная запись">
					<Button shape="circle" type="default" icon={<FaUser/>}></Button>
				</Tooltip>
			</Space>
		</AntHeader>
	)
}