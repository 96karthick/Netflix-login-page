import "./Login.css";

function Login() {
  return (
    <div className="login">
      
      <div className="overlay"></div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
        className="logo"
      />

      <div className="login-box">
        <h2>Sign In</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="signin-btn">Sign In</button>

        <p>Forgot Password?</p>
        <hr />
        <p>Create an Account</p>
      </div>

    </div>
  );
}

export default Login;

