import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ scrollToSection, refs = {} }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleNavigation = (targetSection) => {
        if (location.pathname === "/") {
            // Якщо користувач уже на головній сторінці, скролимо
            scrollToSection(refs[targetSection]);
        } else {
            // Якщо користувач на іншій сторінці, переходимо на Home з targetSection
            navigate("/", { state: { targetSection } });
        }
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
                <Link to="/">Sport<br />Club</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/schedule#schedule-table">Розклад</Link>
                </li>
                <li onClick={() => handleNavigation("trainingsRef")}>Тренування</li>
                <li onClick={() => handleNavigation("trainersRef")}>Тренери</li>
                <li onClick={() => handleNavigation("ticketsRef")}>Абонементи</li>
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

            <div className="hero-text">Work Hard To<br /> Get Better Life</div>
            <a href="/signup" className="hero-button">
                Записатись
            </a>
        </nav>
    );
};

export default Header;
