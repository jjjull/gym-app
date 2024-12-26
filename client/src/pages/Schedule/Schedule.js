import React, { useEffect, useRef, useState } from "react";
import "./Schedule.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Дані для розкладу
const scheduleData = [
  {
    time: "8:00 - 9:00",
    monday: "Power Yoga",
    tuesday: "Functional",
    wednesday: "Power Yoga",
    thursday: "Power Fitness",
    friday: "Functional",
    saturday: "Power Yoga",
    sunday: "Power Fitness",
  },
  {
    time: "9:00 - 10:00",
    monday: "Power Fitness",
    tuesday: "Power Yoga",
    wednesday: "Functional",
    thursday: "Power Fitness",
    friday: "Power Yoga",
    saturday: "Functional",
    sunday: "Power Yoga",
  },
  {
    time: "18:00 - 19:00",
    monday: "Functional",
    tuesday: "Power Fitness",
    wednesday: "Power Yoga",
    thursday: "Functional",
    friday: "Power Fitness",
    saturday: "-",
    sunday: "Power Yoga",
  },
  {
    time: "19:00 - 20:00",
    monday: "Power Yoga",
    tuesday: "Power Yoga",
    wednesday: "Power Fitness",
    thursday: "Power Fitness",
    friday: "Functional",
    saturday: "-",
    sunday: "Power Fitness",
  },
];

const Schedule = () => {
  const tableRef = useRef(null);
  const [selectedDirection, setSelectedDirection] = useState("");

  useEffect(() => {
    if (window.location.hash === "#schedule-table" && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Фільтрація розкладу
  const filteredSchedule = scheduleData.filter((row) => {
    if (!selectedDirection) return true; // Якщо нічого не вибрано, показуємо всі рядки
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    return days.some((day) => row[day] === selectedDirection); // Перевірка відповідності
  });

  return (
    <div>
      <Header />
      <div className="schedule-page">
        <header className="schedule-header">
          <h2>Розклад</h2>
          <hr />
        </header>
        <div className="schedule-filters">
          <select
            value={selectedDirection}
            onChange={(e) => setSelectedDirection(e.target.value)}
          >
            <option value="">Вибрати напрямок</option>
            <option value="Power Yoga">Power Yoga</option>
            <option value="Power Fitness">Power Fitness</option>
            <option value="Functional">Functional</option>
            <option value="TRX">TRX</option>
          </select>
        </div>
        <div ref={tableRef} id="schedule-table" className="schedule-table">
          <table>
            <thead>
              <tr>
                <th>Час</th>
                <th>Понеділок</th>
                <th>Вівторок</th>
                <th>Середа</th>
                <th>Четвер</th>
                <th>П’ятниця</th>
                <th>Субота</th>
                <th>Неділя</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedule.map((row, index) => (
                <tr key={index}>
                  <td>{row.time}</td>
                  <td className={row.monday === selectedDirection ? "highlighted" : ""}>
                    {row.monday}
                  </td>
                  <td className={row.tuesday === selectedDirection ? "highlighted" : ""}>
                    {row.tuesday}
                  </td>
                  <td className={row.wednesday === selectedDirection ? "highlighted" : ""}>
                    {row.wednesday}
                  </td>
                  <td className={row.thursday === selectedDirection ? "highlighted" : ""}>
                    {row.thursday}
                  </td>
                  <td className={row.friday === selectedDirection ? "highlighted" : ""}>
                    {row.friday}
                  </td>
                  <td className={row.saturday === selectedDirection ? "highlighted" : ""}>
                    {row.saturday}
                  </td>
                  <td className={row.sunday === selectedDirection ? "highlighted" : ""}>
                    {row.sunday}
                  </td>
                </tr>
              ))}
              {filteredSchedule.length === 0 && (
                <tr>
                  <td colSpan="8">Немає занять за обраним напрямком</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;