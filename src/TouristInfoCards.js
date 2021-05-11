import React from "react";

const TouristInfoCards = () => {
  const cardInfo = [
    {
      image: "./images/Glasgow.jpg",
      cityName: "GLASGOW",
      description:
        "Glasgow has a rich and varied architectural heritage. The city's wealthy past has left a legacy of some of the finest Victorian architecture like the iconic City Chambers which sits majestically overlooking George Square – the civic heart of the city.",
      cardURL: "https://peoplemakeglasgow.com/",
      id: 1
    },
    {
      image: "./images/Manchester.jpg",
      cityName: "MANCHESTER",
      description:
        "Third biggest city in the UK, Manchester has a rich industrial heritage.Manchester is the greatest city in the world regardless of exterior accolade. The community spirit and opportunity Manchester offers its inhabitants makes it one of the best places in the world to live.",
      cardURL: "https://www.visitmanchester.com/",
      id: 2
    },
    {
      image: "./images/London.jpg",
      cityName: "LONDON",
      description:
        "The Houses of Parliament and Elizabeth Tower, commonly called Big Ben, are among London's most iconic landmarks and must-see London attractions. Technically, Big Ben is the name given to the massive bell inside the clock tower, which weighs more than 13 tons (13,760 kg).",
      cardURL: "https://visitlondon.com/",
      id: 3
    }
  ];
  return (
    // we are giving the "key" to the parent element <div>
    <div className="cards mt-5 mb-5 text-center">
      {cardInfo.map(card => {
        return (
          <div className="card" key={card.id}>
            <img
              src={card.image}
              className="card-img-top img-responsive img-thumbnail"
              alt="city"
            />
            <div className="card-body">
              <h3>{card.cityName}</h3>
              <p>{card.description}</p>
              <a href={card.cardURL} className="btn btn-primary ">
                More Information
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
