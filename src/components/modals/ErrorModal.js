import React from "react";
import "./ErrorModal.css";

function ErrorModal(props) {
  return (
    <div>
      <div onClick={props.onConfirm} className="dropback"></div>
      <div className="modal">
        <div className="header">
          <h2>{props.title}</h2>
        </div>
        <div className="body">
          <p>{props.message}</p>
        </div>
        <footer>
          <button onClick={props.onConfirm}>oky</button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModal;
