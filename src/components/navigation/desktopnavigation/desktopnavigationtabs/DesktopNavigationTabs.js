import "./DesktopNavigationTabs.css";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../../routes/RoutingPath";

export const DesktopNavigationTabs = () => {
  const history = useHistory();

  return (
    <ul className="ulTabsWrapper">
      <li
        className="liTabs"
        onClick={() => history.push(RoutingPath.playersView)}
      >
        Players
      </li>
      <li
        className="liTabs"
        onClick={() => history.push(RoutingPath.scheduleView)}
      >
        Spelschema
      </li>
      <li
        className="liTabs"
        onClick={() => history.push(RoutingPath.aboutUsView)}
      >
        Om oss
      </li>
    </ul>
  );
};
