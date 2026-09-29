import { useState } from "react";
import "./App.css";

function App() {
  const [attendance, setAttendance] = useState(75);

  return (
    <div className="app">
      <h1>Student Attendance Tracker</h1>

      <div className="card">
        <h2>Dhivesh Arul</h2>
        <p>CSE - Cyber Security | 2nd Year</p>

        <div className="percent">{attendance}%</div>

        <button onClick={() => setAttendance(attendance + 1)}>
          Present
        </button>

        <button onClick={() => setAttendance(Math.max(0, attendance - 1))}>
          Absent
        </button>

        <h3>
          Status: {attendance >= 75 ? "Eligible" : "Not Eligible"}
        </h3>
      </div>
    </div>
  );
}

export default App;