import {Themes, themeState} from "./types.ts";


export const darkThemeToken: themeState = {
	theme: Themes.dark,
	colorPrimary: '#f01879',
	colorLink: '#f01879',
	colorLinkHover: '#f66eab',
	colorBgBase: '#242424',
	colorBgLayout: '#242424',
	colorBorder: "#424242",
};

export const lightThemeToken: themeState = {
	theme: Themes.light,
	colorPrimary: '#f01879',
	colorLink: '#f01879',
	colorLinkHover: '#f66eab',
	colorBgBase: '#ffffff',
	colorBgLayout: '#ffffff',
};