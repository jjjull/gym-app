import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    return (
        <nav
            className="navbar"
            style={{
                backgroundImage: "url('/assets/images/gym-app.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="navbar-logo">
                <Link to="/">Sport
                    <br></br>Club</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/schedule">Розклад</Link></li>
                <li><Link to="/trainings">Тренування</Link></li>
                <li><Link to="/trainers">Тренери</Link></li>
                <li><Link to="/subscriptions">Абонементи</Link></li>
            </ul>

            <div className="navbar-login" onClick={toggleDropdown}>
                Увійти
                {showDropdown && (
                    <ul className="login-dropdown">
                        <li>Клієнт</li>
                        <li>Тренер</li>
                        <li>Адміністратор</li>
                    </ul>
                )}
            </div>

            <div className="hero-text">Work Hard To<br></br> Get Better Life</div>
            <Link to="/signup" className="hero-button">
                Записатись
            </Link>
        </nav>
    );
};

export default Header;
