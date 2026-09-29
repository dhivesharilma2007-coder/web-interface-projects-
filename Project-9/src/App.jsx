import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const businesses = [
    { name: "Elite Mobiles", type: "Mobile Shop", place: "Tambaram" },
    { name: "ABC Cafe", type: "Restaurant", place: "Chennai" },
    { name: "Tech Zone", type: "Computer Shop", place: "Chromepet" },
    { name: "Fitness Hub", type: "Gym", place: "Pallavaram" }
  ];

  const result = businesses.filter((b) =>
    (b.name + b.type + b.place)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Local Business Discovery</h1>
        <p>Find businesses near you</p>
      </header>

      <div className="search">
        <input
          placeholder="Search business, type or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="businesses">
        {result.map((b, i) => (
          <div className="card" key={i}>
            <h2>{b.name}</h2>
            <p>Category: {b.type}</p>
            <p>Location: {b.place}</p>
            <button>View Details</button>
          </div>
        ))}

        {result.length === 0 && <h3>No businesses found</h3>}
      </div>
    </div>
  );
}

export default App;