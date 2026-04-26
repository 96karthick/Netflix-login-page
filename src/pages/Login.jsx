import "./Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill the column ⚠️");
      return;
    }
   window.location.href = "/dashboard";
  };

  return (
    <div className="login">
      <div className="overlay"></div>

      <h1 className="logo">NETFLIX</h1>

      <div className="login-box">
        <h2>Sign In</h2>

        <input
          type="text"
          placeholder="Email or mobile number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signin-btn" onClick={handleLogin}>
          Sign In
        </button>

        <p className="or">OR</p>
        <button className="code-btn">Use a sign-in code</button>
      </div>
    </div>
  );
}

export default Login;