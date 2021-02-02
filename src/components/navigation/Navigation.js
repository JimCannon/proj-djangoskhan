import "./Navigation.css";
import { MobileNavigation } from "./mobilenavigation/MobileNavigation";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { DesktopNavigation } from "./desktopnavigation/DesktopNavigation";

export const Navigation = () => {
  const { height, width } = useWindowDimension();

  const displayNavigationDependingOnDevice = () => {
    return width <= 1000 ? <MobileNavigation /> : <DesktopNavigation />;
  };

  return <div>{displayNavigationDependingOnDevice()}</div>;
};
