import {ThemeConfig} from "antd";

export interface themeState extends ThemeConfig {
	themeName: ThemeNames;
}

export enum ThemeNames {
	dark = "dark",
	light = "light",
}
