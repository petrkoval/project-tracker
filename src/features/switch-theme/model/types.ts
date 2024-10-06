import {AliasToken} from "antd/es/theme/interface";

export interface themeState extends Partial<AliasToken> {
	theme: Themes;
}

export enum Themes {
	dark = "dark",
	light = "light",
}
