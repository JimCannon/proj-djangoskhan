import "./BackDrop.css";

export const BackDrop = (props) => {
  return (
    <div className="backDrop" onClick={() => props.drawerHandler(false)}></div>
  );
};
