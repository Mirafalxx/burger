import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{props.price} KGS</strong>{" "}
      </p>
      {Object.keys(props.ingredients).map((ingType) => (
        <BuildControl
          key={ingType + 1}
          disabled={props.ingredients[ingType] === 0}
          type={ingType}
          added={() => props.ingredientAdded(ingType)}
          remove={() => props.ingredientRemove(ingType)}
        />
      ))}
    </div>
  );
};

export default BuildControls;
// addIngredientHandler;
// removeIngredientHandler;
