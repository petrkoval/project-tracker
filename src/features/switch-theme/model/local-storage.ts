import {ThemeNames} from "@features/switch-theme";

export function getThemeNameFromLocalStorage(): ThemeNames {
	const storageValue = localStorage.getItem('theme');
	return storageValue as ThemeNames || "dark";
}

export function setThemeNameToLocalStorage(theme: ThemeNames) {
	localStorage.setItem('theme', theme);
}