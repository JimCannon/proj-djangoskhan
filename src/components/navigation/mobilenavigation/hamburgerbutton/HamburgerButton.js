import "./HamburgerButton.css";

export const HamburgerButton = (props) => {
  return (
    <button className="toggle-button" onClick={() => props.drawerHandler(true)}>
      <div className="toggle-button_line"></div>
      <div className="toggle-button_line"></div>
      <div className="toggle-button_line"></div>
    </button>
  );
};
