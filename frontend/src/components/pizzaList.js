import React, { useEffect, useState } from "react";
import PizzaData from "./pizzaData";

const PizzaList = () => {
  const [pizzaList, setPizzaList] = useState();
  useEffect(() => {
    const getPizzaList = async () => {
      try {
        let response = await fetch("/pizza");
        let pizzas = await response.json();
        console.log(`pizzas is:`, pizzas);
        return setPizzaList(pizzas);
      } catch (ex) {
        console.log(ex);
      }
    };
    getPizzaList();
  }, []);

  return (
    <div>
      {pizzaList ? (
        pizzaList.map((pizza, index) => {
          return <PizzaData pizza={pizza} />;
        })
      ) : (
        <div>Loading </div>
      )}
    </div>
  );
};

export default PizzaList;
