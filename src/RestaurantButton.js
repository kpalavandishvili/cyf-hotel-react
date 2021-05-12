import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.orderOne} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;

// #### 11. Extract the Add button to its own component
// Pass the `orderOne` function as a prop to the
//   `<RestaurantButton />` component and use this prop
//        in the `onClick` handler.
