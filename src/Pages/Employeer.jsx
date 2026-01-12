import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <button onClick={() => navigate("/employee/activity")}>
        Add Daily Activity
      </button>
      <button onClick={handleBack} style={{ margin: "12px" }}>
        Back
      </button>
    </div>
  );
}

export default EmployeeDashboard;
