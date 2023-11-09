import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const navigate = useNavigate();
  const handleSignup = () => {
    const { username, password } = formData;
    if (username && password) {
      localStorage.setItem("user", JSON.stringify(formData));
      console.log(formData);
      setFormData({ username: "", password: "" });
      navigate("/login");
    } else {
    }
  };
  return (
    <div className="signupRoot">
      <div className="signupConatiner">
        <div className="heading">
          <h2>Signup</h2>
        </div>
        <div className="inputGroup">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>

        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
