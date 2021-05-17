import React, { useState } from "react";
import "./searchResults.css";
// import moment from "./moment"

const SearchResults = props => {
  const [isRowHighlighted, setIsRowHighlighted] = useState({});

  const handleClick = index => {
    const copy = { ...isRowHighlighted };
    const rowValue = copy[index];

    console.log("rowValue", rowValue, !rowValue);

    copy[index] = !rowValue;
    // copy[index] = rowValue === true ? false : true;
    // copy[index] = rowValue ? false : true;
    setIsRowHighlighted(copy);

    console.log(index, copy);
  };

  return (
    // Add another column which shows the number of nights a guest is staying #7

    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room Number</th>
          <th scope="col">Check In</th>
          <th scope="col">Check Out</th>
          <th scope="col">Number Of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings &&
          props.bookings.map((element, index) => (
            <tr
              className={
                isRowHighlighted[index] ? "highlighted" : "notHighlighted"
              }
              onClick={() => handleClick(index)}
              key={index}
            >
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>
              <td>{countDays(element.checkInDate, element.checkOutDate)}</td>
            </tr>
            // Add another column which shows the number of nights a guest is staying #7
          ))}
      </tbody>
    </table>
  );
};

function countDays(startDate, endDate) {
  const testStartDate = new Date(startDate);
  const testEndDate = new Date(endDate);
  const difference = testEndDate.getTime() - testStartDate.getTime();
  //console.log({ differenceinDays: difference / 1000 / 60 / 60 / 24 });

  return difference / 1000 / 60 / 60 / 24;

  // Another way to calculate
  // var a = moment(endDate);
  // var b = moment(startDate);

  // console.log(a.diff(b));

  // return a.diff(b, "days")
}

export default SearchResults;
