import {PageWrapper} from "@shared/ui/page-wrapper";
import {Dialogue} from "@pages/messages";
import {Avatar, Col, List, Row} from "antd";
import {Link} from "react-router-dom";

import "../style/messages-page.scss";

const data = [
	{
		title: 'Ant Design Title 1',
		description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
	},
	{
		title: 'Ant Design Title 2',
		description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
	},
	{
		title: 'Ant Design Title 3',
		description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
	},
	{
		title: 'Ant Design Title 4',
		description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
	},
	{
		title: 'Ant Design Title 1',
		description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
	},
	{
		title: 'Ant Design Title 2',
		description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
	},
	{
		title: 'Ant Design Title 3',
		description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
	},
	{
		title: 'Ant Design Title 4',
		description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
	},
];

export function MessagesPage() {
	return (
		<PageWrapper noScroll crumbs={[{title: "Сообщения"}]}>
			<Row style={{height: '100%'}} wrap={false}>
				<Col flex="300px" style={{overflow: "auto", height: "95%", paddingRight: ".5rem", scrollbarGutter: "stable"}}>
					<List itemLayout="horizontal"
						  dataSource={data}
						  renderItem={(item, index) => (
							  <Link to="/">
								  <List.Item style={{gap: ".5rem"}}>
									  <List.Item.Meta
										  avatar={<Avatar
											  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
										  title={item.title}
										  description={item.description}
									  />
									  <time>20:31</time>
								  </List.Item>
							  </Link>
						  )}
					/>
				</Col>
				<Col flex="auto" style={{overflow: "auto", height: "95%", scrollbarGutter: "stable"}}>
					<Dialogue/>
				</Col>
			</Row>
		</PageWrapper>
	);
}