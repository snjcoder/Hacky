import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  const id = params.id;
  const [pizza, setPizza] = useState();

  useEffect(() => {
    const getPizza = async () => {
      let response = await fetch(`/pizza/${id}`);
      let data = await response.json();
      setPizza(data);
    };
    getPizza();
  }, [id]);

  if (!pizza) {
    return <p> Loading Data...</p>;
  }

  return <div>{pizza.name}</div>;
};

export default DetailPage;
