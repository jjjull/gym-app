import React from "react";
import "./TrainersCards.css"; 


const trainers = [
  {
    id: 1,
    name: "Марина",
    direction: "Functional, Power Fitness",
    image: "/assets/images/marina.png", 
  },
  {
    id: 2,
    name: "Іван",
    direction: "TRX, Functional",
    image: "/assets/images/ivan.png",
  },
  {
    id: 3,
    name: "Катерина",
    direction: "Power Yoga, Stretching",
    image: "/assets/images/kateryna.png",
  },
  {
    id: 4,
    name: "Олександр",
    direction: "Power Fitness",
    image: "/assets/images/olexandr.png",
  },
];

const TrainersCards = () => {
    return (
        <div className="training-cards">
            <h2>Тренери</h2>
            <hr></hr>
            <div className="card-container">
                {trainers.map((trainer) => (
                    <div className="card" key={trainer.id}>
                        <div className="trainers-photo"><img src={trainer.image} alt={trainer.name}  /></div>
                        <h3>{trainer.name}</h3>
                        <p>{trainer.direction}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default TrainersCards;
