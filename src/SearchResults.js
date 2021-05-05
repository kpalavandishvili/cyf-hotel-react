import React from "react";

const SearchResults = props => {
  const searchInfo = [
    {
      id: 1,
      title: `Coliseum`,
      firstName: `Chris`,
      surname: `Brown`,
      email: `efake@fake.com`,
      roomId: `203`,
      checkIn: `23/11`,
      checkOut: `25/11`
    },
    {
      id: 2,
      title: `Radisson Blue`,
      firstName: `Johny`,
      surname: `Dap`,
      email: `efake@fake.co.uk`,
      roomId: `123`,
      checkIn: `25/12`,
      checkOut: `2/01`
    },
    {
      id: 3,
      title: `Plaza Espana`,
      firstName: `Luis`,
      surname: `Sanchez`,
      email: `efake@fake.au`,
      roomId: `12`,
      checkIn: `2/10`,
      checkOut: `5/10`
    }
  ];

  return (
    <table className="tableCenter ">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Hotel</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room Number</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
          </tr>
        </thead>
        {searchInfo.map(element => (
          <tbody>
            <tr>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkIn}</td>
              <td>{element.checkOut}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </table>
  );
};
export default SearchResults;
