import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
      </ul>
    </div>
  );
};

// Line #13 Ex. 10 add a `onClick` handler to the Add `<button>`

export default Restaurant;
