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
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingInline: "1.5rem",
				borderBottom: `1px solid ${colorBorder}`
			}}>
			<Link to="/" style={{color: colorText, display: 'inline'}} aria-label="home">
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
					<Button shape="circle" type="default" icon={<IoNotifications/>} aria-label="notifications"/>
				</Tooltip>

				<Tooltip title="Настройки">
					<Button shape="circle" type="default" icon={<IoIosSettings/>} aria-label="settings"/>
				</Tooltip>

				<Tooltip title="Учетная запись">
					<Button shape="circle" type="default" icon={<FaUser/>} aria-label="account"/>
				</Tooltip>
			</Space>
		</AntHeader>
	)
}