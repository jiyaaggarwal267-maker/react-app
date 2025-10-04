import React, { useState } from "react";
import "./JiyaForm.css";

const JiyaForm = () => {
  const [users, setUsers] = useState([]); // store multiple users
  const [isLoginPage, setIsLoginPage] = useState(false); // toggle page
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      alert("Account already exists! Please login.");
      setIsLoginPage(true);
      return;
    }

    const newUser = { fullName, email, password, phone };
    setUsers([...users, newUser]);
    alert("Account created successfully! You can now login.");

    // clear inputs
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");

    setIsLoginPage(true); // switch to login
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      alert(`Welcome back, ${user.fullName}!`);
      // clear inputs
      setEmail("");
      setPassword("");
    } else {
      alert("Invalid email or password. Please signup if you don't have an account.");
      setIsLoginPage(false); // switch to signup
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">
          {isLoginPage ? "Login to Your Account" : "Jiya's Signup Form"}
        </h2>

        {isLoginPage ? (
          <form onSubmit={handleLogin} className="form-fields">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="form-fields">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password (min 6 letters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
          </form>
        )}

        <p className="login-text">
          {isLoginPage ? (
            <>
              Don't have an account?{" "}
              <span className="login-link" onClick={() => setIsLoginPage(false)}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className="login-link" onClick={() => setIsLoginPage(true)}>
                Login
              </span>
            </>
          )}
        </p>

        <div className="close-btn">✖</div>
      </div>
    </div>
  );
};

export default JiyaForm;
