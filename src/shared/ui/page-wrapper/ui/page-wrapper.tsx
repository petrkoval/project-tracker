import {ReactNode} from "react";
import {Breadcrumb} from "antd";
import {BreadcrumbItemType, BreadcrumbSeparatorType} from "antd/es/breadcrumb/Breadcrumb";
import {FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";
import {Links} from "@shared/enums";

import "../style/page-wrapper.scss";

interface Props {
	children?: ReactNode;
	crumbs?: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
}

export function PageWrapper({children, crumbs = []}: Props) {
	const items = [
		{
			title: <Link to={Links.HOME}><FaHome aria-label="home icon"/></Link>
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