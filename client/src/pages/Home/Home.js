import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import TrainingsCards from "../../components/TrainingsCards/TrainingsCards";
import TrainersCards from "../../components/TrainersCards/TrainersCards";
import Tickets from "../../components/Tickets/Tickets";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const trainingsRef = useRef(null);
    const trainersRef = useRef(null);
    const ticketsRef = useRef(null);

    const location = useLocation();

    const scrollToSection = (ref) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        // Якщо в state є targetSection, скролимо до відповідної секції
        if (location.state?.targetSection) {
            const targetRef = {
                trainingsRef,
                trainersRef,
                ticketsRef,
            }[location.state.targetSection];
            if (targetRef) {
                scrollToSection(targetRef);
            }
        }
    }, [location.state]);

    return (
        <div className="home">
            <Header
                scrollToSection={scrollToSection}
                refs={{ trainingsRef, trainersRef, ticketsRef }}
            />
            <div ref={trainingsRef}>
                <TrainingsCards />
            </div>
            <div ref={trainersRef}>
                <TrainersCards />
            </div>
            <div ref={ticketsRef}>
                <Tickets />
            </div>
            <Footer scrollToSection={scrollToSection} refs={{ trainingsRef, trainersRef, ticketsRef }} />
        </div>
    );
};

export default Home;
