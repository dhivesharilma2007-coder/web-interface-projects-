import { useState } from "react";
import "./App.css";

function App() {
  const [skill, setSkill] = useState("");

  const student = {
    name: "Dhivesh Arul",
    department: "CSE - Cyber Security",
    year: "2nd Year",
    cgpa: 8.5,
    skills: ["Java", "Python", "SQL", "Cyber Security"],
    projects: 3
  };

  return (
    <div className="app">
      <h1>Student Career & Placement Dashboard</h1>

      <div className="profile">
        <h2>{student.name}</h2>
        <p>{student.department} | {student.year}</p>
        <p>CGPA: <b>{student.cgpa}</b></p>
      </div>

      <div className="cards">
        <div><h2>{student.skills.length}</h2><p>Skills</p></div>
        <div><h2>{student.projects}</h2><p>Projects</p></div>
        <div><h2>75%</h2><p>Placement Readiness</p></div>
      </div>

      <h2>Skills</h2>
      <div className="skills">
        {student.skills.map((s, i) => (
          <button key={i} onClick={() => setSkill(s)}>{s}</button>
        ))}
      </div>

      {skill && <p className="selected">Selected Skill: {skill}</p>}

      <h2>Career Goals</h2>
      <ul>
        <li>Improve Programming Skills</li>
        <li>Build Real-time Projects</li>
        <li>Prepare for Placements</li>
      </ul>
    </div>
  );
}

export default App;