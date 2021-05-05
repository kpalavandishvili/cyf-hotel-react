import React from "react";

const hotelInfo = props => {
  return (
    <ul className="footer">
      {props.content.map((
        el // no need return
      ) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
};

export default hotelInfo;
