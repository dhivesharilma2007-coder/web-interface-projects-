import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav>
        <h2>Dhivesh</h2>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home" className="hero">
        <h1>Hi, I'm Dhivesh Arul</h1>
        <h2>Cyber Security Student</h2>
        <p>I build websites and learn cybersecurity.</p>
        <button>View My Work</button>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a 2nd year CSE Cyber Security student interested in
          web development, programming and cybersecurity.
        </p>
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Java</span>
          <span>Python</span>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Counter App</h3>
          <p>A simple counter web application.</p>
        </div>
        <div className="project">
          <h3>Student Profile</h3>
          <p>Student profile with automatic grade calculation.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: dhivesh@example.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>
      </section>
    </div>
  );
}

export default App;