import { useState } from "react";
import Login from "../components/Login.jsx";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="" alt="Company" />
        </div>
        <ul className="nav">
          <li>Home</li>
          <li>Projects</li>
          <li>Education</li>
          <li>Certification</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="login">
          <button onClick={() => setShowLogin(true)}>Login</button>
        </div>
      </div>

      {showLogin && <Login />}
    </>
  );
}

export default App;
