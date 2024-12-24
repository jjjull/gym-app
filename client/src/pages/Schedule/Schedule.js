import React, { useEffect, useRef } from "react";
import "./Schedule.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Schedule = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        if (window.location.hash === "#schedule-table" && tableRef.current) {
            tableRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div>
            <Header /> {/* refs не передаються на сторінці Schedule */}
            <div className="schedule-page">
                <header className="schedule-header">
                    <h2>Розклад</h2>
                    <hr />
                </header>

                <div className="schedule-filters">
                    <select>
                        <option>Вибрати тренування</option>
                    </select>
                    <select>
                        <option>Вибрати напрямок</option>
                    </select>
                    <button>За тренером</button>
                </div>

                <div ref={tableRef} className="schedule-table">
                    <table>
                        {/* Тут буде ваш контент */}
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Schedule;
