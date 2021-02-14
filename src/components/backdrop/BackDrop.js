import "./BackDrop.css";

export const BackDrop = (props) => {
  return (
    // <div className="backDrop" onClick={() => props.drawerHandler(false)}></div>
    //props.show ? <div></div> : null

    props.show ? <div className="backDrop" onClick={props.clicked}></div> : null
  );
};
