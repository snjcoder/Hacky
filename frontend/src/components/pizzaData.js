import React from "react";

const PizzaData = (props) => {
  const pizza = props.pizza;
  return (
    <div>
      {pizza.name}
      {pizza.toppings}
    </div>
  );
};

export default PizzaData;
