import {ReactNode} from "react";
import {Breadcrumb} from "antd";
import {BreadcrumbItemType, BreadcrumbSeparatorType} from "antd/es/breadcrumb/Breadcrumb";

import "../style/page-wrapper.scss";
import {FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";

interface Props {
	children?: ReactNode;
	crumbs: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
}

export function PageWrapper({children, crumbs}: Props) {
	const items = [
		{
			title: <Link to="/"><FaHome/></Link>
		},
		...crumbs
	];

	return (
		<div className="page">
			<Breadcrumb items={items} separator=">"/>

			<div className="page__inner">
				{children}
			</div>
		</div>
	);
}