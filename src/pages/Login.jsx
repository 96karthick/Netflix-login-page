import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();   // 👈 IMPORTANT

  const handleLogin = () => {
    // simple login logic (you can customize)
    if (password) {
      navigate("/dashboard");   // 👈 THIS FIXES YOUR ISSUE
    } else {
      alert("Enter password");
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="signin-btn" onClick={handleLogin}>
        Sign In
      </button>
    </div>
  );
}

export default Login;

