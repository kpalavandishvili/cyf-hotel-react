import React from "react";
// import moment from "./moment"

const SearchResults = props => {
  // const searchInfo = [
  //   {
  //     id: 1,
  //     title: `Coliseum`,
  //     firstName: `Chris`,
  //     surname: `Brown`,
  //     email: `efake@fake.com`,
  //     roomId: `203`,
  //     checkIn: `23/11/2021`,
  //     checkOut: `25/11/2021`
  //   },
  //   {
  //     id: 2,
  //     title: `Radisson Blue`,
  //     firstName: `Johny`,
  //     surname: `Dap`,
  //     email: `efake@fake.co.uk`,
  //     roomId: `123`,
  //     checkIn: `25/12/2021`,
  //     checkOut: `2/01/2021`
  //   },
  //   {
  //     id: 3,
  //     title: `Plaza Espana`,
  //     firstName: `Luis`,
  //     surname: `Sanchez`,
  //     email: `efake@fake.au`,
  //     roomId: `12`,
  //     checkIn: `2/10/2021`,
  //     checkOut: `5/10/2021`
  //   }
  // ];

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
            <tr key={index}>
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
  console.log({ differenceinDays: difference / 1000 / 60 / 60 / 24 });

  return difference / 1000 / 60 / 60 / 24;

  // Another way to calculate
  // var a = moment(endDate);
  // var b = moment(startDate);

  // console.log(a.diff(b));

  // return a.diff(b, "days")
}

export default SearchResults;
