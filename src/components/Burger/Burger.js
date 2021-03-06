import React from "react";
import "./Burger.css";
import Ingredient from "./Ingredient/Ingredient";

const Burger = ({ ingredients }) => {
  const ingredientsKeys = Object.keys(ingredients);
  let ingList = [];
  ingredientsKeys.forEach((igKey) => {
    const amount = ingredients[igKey];
    for (let i = 0; i < amount; i++) {
      ingList.push(<Ingredient key={igKey + i} type={igKey} />);
    }
  });

  if (ingList.length === 0) {
    ingList = <p>Please Start adding ingredients!</p>;
  }
  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {ingList}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
