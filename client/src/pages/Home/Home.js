import React from "react";
import Header from "../../components/Header/Header";
import TrainingsCards from "../../components/TrainingsCards/TrainingsCards";
import TrainersCards from "../../components/TrainersCards/TrainersCards";
import Tickets from "../../components/Tickets/Tickets";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <TrainingsCards />
            <TrainersCards />
            <Tickets />
            <Footer />
        </div>
    );
};

export default Home;
