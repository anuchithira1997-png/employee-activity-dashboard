import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("role", role);

    if (role === "Admin") navigate("/admin");
    else if (role === "Manager") navigate("/manager");
    else navigate("/employee");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Login Page</h1>
      <select
        style={{ marginBottom: "12px" }}
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="" disabled>
          Select Role
        </option>
        <option>Admin</option>
        <option>Manager</option>
        <option>Employee</option>
      </select>

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
