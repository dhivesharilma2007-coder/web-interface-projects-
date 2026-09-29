import { useState } from "react";
import "./App.css";

function App() {
  const [hobby, setHobby] = useState("");
  const [hobbies, setHobbies] = useState([
    "Reading",
    "Photography",
    "Gaming"
  ]);

  function addHobby() {
    if (hobby.trim() !== "") {
      setHobbies([...hobbies, hobby]);
      setHobby("");
    }
  }

  function removeHobby(index) {
    setHobbies(hobbies.filter((_, i) => i !== index));
  }

  return (
    <div className="app">
      <h1>Hobby Management System</h1>

      <div className="card">
        <input
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          placeholder="Enter your hobby"
        />

        <button onClick={addHobby}>Add Hobby</button>

        <h2>My Hobbies</h2>

        {hobbies.map((item, index) => (
          <div className="hobby" key={index}>
            <span>{item}</span>
            <button onClick={() => removeHobby(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;