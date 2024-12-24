import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ scrollToSection, refs }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип і графік роботи */}
        <div className="footer-section">
          <h3>Sport Club</h3>
          <div className="working-hours">
            <p>Понеділок - П'ятниця</p>
            <p>8:00 - 22:00</p>
            <p>Субота - Неділя</p>
            <p>8:00 - 14:00</p>
          </div>
        </div>

        {/* Список посилань */}
        <div className="footer-section">
          <ul className="footer-links">
            <Link to="/schedule">Розклад</Link>
            <li onClick={() => scrollToSection(refs.trainingsRef)}>Тренування</li>
            <li onClick={() => scrollToSection(refs.trainersRef)}>Тренери</li>
            <li onClick={() => scrollToSection(refs.ticketsRef)}>Абонементи</li>
          </ul>
        </div>

        {/* Контакти */}
        <div className="footer-section">
          <h4>Контакти:</h4>
          <ul className="contacts">
            <li>
              <span className="icon">&#128205;</span> Київ, Шевченка 152
            </li>
            <li>
              <span className="icon">&#128222;</span> +380 99 552 33 21
            </li>
            <li>
              <span className="icon">&#128241;</span> +380 66 145 98 22
            </li>
            <li>
              <span className="icon">&#9993;</span> info@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
