import React from "react";
import Order from "./Order";

const Restaurant = () => {
  const orderTypes = ["Pizzas", "Salads", "Chocolate cake"];
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="meal-list">
        {orderTypes.map(orderType => {
          return <Order orderType={orderType} />;
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
