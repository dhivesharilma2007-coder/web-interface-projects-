import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "Dhivesh Arul",
    roll: "CS101",
    department: "CSE - Cyber Security",
    year: "II Year"
  });

  const [subjects, setSubjects] = useState([
    { name: "Java", mark: 85 },
    { name: "Python", mark: 92 },
    { name: "DBMS", mark: 78 },
    { name: "Computer Networks", mark: 88 },
    { name: "Cyber Security", mark: 95 }
  ]);

  const updateStudent = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const updateMark = (index, value) => {
    const data = [...subjects];
    data[index].mark = Number(value);
    setSubjects(data);
  };

  const total = subjects.reduce((sum, s) => sum + s.mark, 0);
  const average = (total / subjects.length).toFixed(2);

  const grade =
    average >= 90 ? "A+" :
    average >= 80 ? "A" :
    average >= 70 ? "B" :
    average >= 60 ? "C" :
    average >= 50 ? "D" : "F";

  const status = average >= 50 ? "PASS" : "FAIL";

  return (
    <div className="app">

      <header>
        <h1>NOVA REPORT STUDIO</h1>
        <p>Advanced Student Report Card</p>
      </header>

      <div className="container">

        <section className="card">
          <h2>Student Information</h2>

          <input
            name="name"
            value={student.name}
            onChange={updateStudent}
            placeholder="Student Name"
          />

          <input
            name="roll"
            value={student.roll}
            onChange={updateStudent}
            placeholder="Roll Number"
          />

          <input
            name="department"
            value={student.department}
            onChange={updateStudent}
            placeholder="Department"
          />

          <input
            name="year"
            value={student.year}
            onChange={updateStudent}
            placeholder="Year"
          />
        </section>

        <section className="card">
          <h2>Subject Marks</h2>

          {subjects.map((subject, index) => (
            <div className="subject" key={index}>
              <span>{subject.name}</span>

              <input
                type="number"
                min="0"
                max="100"
                value={subject.mark}
                onChange={(e) =>
                  updateMark(index, e.target.value)
                }
              />
            </div>
          ))}
        </section>

        <section className="report">
          <h2>REPORT CARD</h2>

          <div className="student">
            <p><b>Name:</b> {student.name}</p>
            <p><b>Roll No:</b> {student.roll}</p>
            <p><b>Department:</b> {student.department}</p>
            <p><b>Year:</b> {student.year}</p>
          </div>

          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((s, i) => (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.mark}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="results">
            <div>
              <h3>{total}</h3>
              <p>Total</p>
            </div>

            <div>
              <h3>{average}%</h3>
              <p>Average</p>
            </div>

            <div>
              <h3>{grade}</h3>
              <p>Grade</p>
            </div>

            <div>
              <h3>{status}</h3>
              <p>Status</p>
            </div>
          </div>

          <button onClick={() => window.print()}>
            Print Report
          </button>
        </section>

      </div>
    </div>
  );
}

export default App;