import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SME.css"

const SME = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const hardcodedUserId = "SME";
    const hardcodedPassword = "1234";

    if (userId === hardcodedUserId && password === hardcodedPassword) {
      navigate("/sme/create-exam"); // Redirect to dashboard on successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div id="SME">
      <h1>SME Login</h1>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SME;
