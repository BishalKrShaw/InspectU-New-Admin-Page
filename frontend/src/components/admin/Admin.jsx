import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css"

const Admin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const hardcodedUserId = "admin";
    const hardcodedPassword = "1234";

    if (userId === hardcodedUserId && password === hardcodedPassword) {
      navigate("/admin/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div id="admin">
      <h1>Admin Login</h1>
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

export default Admin;
