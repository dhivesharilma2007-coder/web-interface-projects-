import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    mobile: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="app">
      <header>
        <h1>IDVerse</h1>
        <p>Smart PAN Card Registration Portal</p>
      </header>

      <div className="card">
        <h2>PAN Registration</h2>

        <form onSubmit={submit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="dob"
            type="date"
            value={form.dob}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Application</button>
        </form>

        {submitted && (
          <div className="success">
            <h3>Application Submitted!</h3>
            <p>Applicant: {form.name}</p>
            <p>Your registration has been received.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;