import {ThemeNames, themeState} from "./types.ts";


export const darkTheme: themeState = {
	themeName: ThemeNames.dark,
	cssVar: true,
	token: {
		colorPrimary: '#f01879',
		colorLink: '#f01879',
		colorLinkHover: '#f66eab',
		colorBgBase: '#242424',
		colorBgLayout: '#242424',
		colorBorder: "#424242",
	},
	components: {
		Layout: {
			siderBg: '#1f1f1f',
			triggerBg: '#1f1f1f',
			headerBg: '#1f1f1f',
			footerBg: '#1f1f1f',
		},
		Menu: {
			darkItemBg: '#1f1f1f',
		}
	}
};

export const lightTheme: themeState = {
	themeName: ThemeNames.light,
	cssVar: true,
	token: {
		colorPrimary: '#f01879',
		colorLink: '#f01879',
		colorLinkHover: '#f66eab',
		colorBgBase: '#ffffff',
		colorBgLayout: '#ffffff',
	},
	components: {
		Layout: {
			lightSiderBg: '#F8F9FA',
			lightTriggerBg: '#F8F9FA',
			headerBg: '#F8F9FA',
			footerBg: '#F8F9FA',
		},
		Menu: {
			itemBg: '#F8F9FA',
		}
	}
};