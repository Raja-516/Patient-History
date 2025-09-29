
import "./mainn.css";


function Login() {
  

  return (
    <div className="login-box">
      <div className="exp">
        <h2>Login</h2>
        <form className="login-form" >
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

          

          <button type="submit" className="login-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
