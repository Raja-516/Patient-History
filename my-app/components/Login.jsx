import { useState } from "react";
import "./mainn.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-box">
      <div className="exp">
        <button
          className={`design ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`design ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      

      <form className="login-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />

        {!isLogin && (
          <>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </>
        )}

        <button type="submit" className="login-btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      </div>
    </div>
  );
}

export default Login;
