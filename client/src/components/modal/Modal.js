import "./Modal.css";
import { BackDrop } from "../backdrop/BackDrop";

export const Modal = (props) => {
  // return showModal ? <div>Modals</div> : <div>1</div>;
  return (
    <>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        className="modal"
        style={{
          transform: props.show ? "translate(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};
