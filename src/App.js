import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/Admin";
import EmployeeDashboard from "./Pages/Employeer";
import ManagerDashboard from "./Pages/Manager";
import EmployeeActivity from "./Pages/Activity";
import ProtectedRoute from "./Components/ProtectPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="Admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee"
        element={
          <ProtectedRoute allowedRole="Employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/activity"
        element={
          <ProtectedRoute allowedRole="Employee">
            <EmployeeActivity />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manager"
        element={
          <ProtectedRoute allowedRole="Manager">
            <ManagerDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
