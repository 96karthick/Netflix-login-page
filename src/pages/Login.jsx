import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="overlay"></div>

      <div className="login-box">
        <h2>Sign In</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="signin-btn" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
