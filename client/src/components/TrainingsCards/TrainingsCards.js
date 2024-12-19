import React from "react";
import "./TrainingsCards.css";

const trainings = [
    {
        id: 1,
        title: "Power Yoga",
        description: "Інтенсивна йога для балансу та гнучкості.",
        image: "/assets/images/power-yoga.png",
    },
    {
        id: 2,
        title: "Power Fitness",
        description: "Силові тренування для витривалості.",
        image: "/assets/images/power-fitness.png",
    },
    {
        id: 3,
        title: "Functional",
        description: "Функціональні тренування для всього тіла.",
        image: "/assets/images/functional.png",
    },
];

const TrainingCards = () => {
    return (
        <div className="training-cards">
            <h2>Тренування</h2>
            <hr></hr>
            <div className="card-container">
                {trainings.map((training) => (
                    <div className="card" key={training.id}>
                        <img src={training.image} alt={training.title} />
                        <h3>{training.title}</h3>
                        <p>{training.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainingCards;
