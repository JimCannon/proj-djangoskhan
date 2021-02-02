import "./SideBar.css";

export const SideBar = (props) => {
  return (
    <div className={props.drawerIsOpen ? "side-drawer open" : "side-drawer"}>
      <button
        onClick={() => {
          props.drawerHandler(false);
        }}
      >
        Close Hamburger
      </button>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  );
};
