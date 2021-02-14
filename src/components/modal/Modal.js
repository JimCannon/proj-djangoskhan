import "./Modal.css";

export const Modal = (props) => {
  // return showModal ? <div>Modals</div> : <div>1</div>;
  return (
    <div
      className="modal"
      style={{
        transform: props ? "translate(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  );
};
