// import "./Navigation.css";
import { MobileNavigation } from "./mobilenavigation/MobileNavigation"
import { useWindowDimension } from "../../hooks/useWindowDimension"
import { DesktopNavigation } from "./desktopnavigation/DesktopNavigation"

export const Navigation = () => {
	// eslint-disable-next-line
	const { height, width } = useWindowDimension()

	const displayNavigationDependingOnDevice = () => {
		return width <= 1000 ? <MobileNavigation /> : <DesktopNavigation />
	}

	return <div className="hej">{displayNavigationDependingOnDevice()}</div>
}
