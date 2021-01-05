import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.type}</div>
      <button className="More" onClick={props.added}>
        More
      </button>

      <button className="Less" onClick={props.remove} disabled={props.disabled}>
        Less
      </button>
    </div>
  );
};

export default BuildControl;
