import React from "react";
import "./Tickets.css"

// Дані про абонементи
const tickets = [
  {
    id: 1,
    title: "CLUB 8",
    description: "Термін дії: 1 місяць",
    price: "2000 грн",
  },
  {
    id: 2,
    title: "CLUB 12",
    description: "Термін дії: 1 місяць",
    price: "2800 грн",
  },
  {
    id: 3,
    title: "CLUB 30",
    description: "Термін дії: 2 місяці",
    price: "6300 грн",
  },
];

const Tickets = () => {
  return (
    <div className="training-cards">
      <h2>Абонементи</h2>
      <hr></hr>
      <div className="card-container">
        {tickets.map((ticket) => (
          <div className="card" key={ticket.id}>
           <div className="title-button"><h3>{ticket.title}</h3></div> 
            <p>{ticket.description}</p>
            <p className="price">{ticket.price}</p>
            <button className="buy-button">Купити</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
