import logoUrl from "@shared/assets/icons/logo.svg";
import "../style/logo.scss";

export function Logo() {
	return (
		<div className="logo">
			<img src={logoUrl} alt="logo" className="logo__icon"/>
			<p className="logo__text">Project Tracker</p>
		</div>
	)
}