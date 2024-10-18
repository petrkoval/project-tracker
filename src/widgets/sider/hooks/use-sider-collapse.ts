import {Dispatch, SetStateAction, useEffect, useState} from "react";

export function useSiderCollapse(): [boolean, Dispatch<SetStateAction<boolean>>] {
	const [collapsed, setCollapsed] = useState(() => {
		const storageValue = localStorage.getItem("siderCollapsed");
		return JSON.parse(storageValue || 'false');
	});

	useEffect(() => {
		localStorage.setItem("siderCollapsed", String(collapsed));
	}, [collapsed]);

	return [collapsed, setCollapsed];
}