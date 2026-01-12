import { useContext } from "react";
import { EmployeeContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function ActivityStats() {
  const { activities } = useContext(EmployeeContext);

  const total = activities.length;
  const pending = activities.filter((a) => a.status === "Pending").length;
  const approved = activities.filter((a) => a.status === "Approved").length;
  const rejected = activities.filter((a) => a.status === "Rejected").length;
  const navigate = useNavigate();

  const totalHours = activities.reduce((sum, a) => sum + Number(a.hours), 0);
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <h3>
        Activity Summary
        <button onClick={handleBack} style={{ marginLeft: "12px" }}>
          Back
        </button>
      </h3>

      <div style={{ display: "flex", gap: 20 }}>
        <Stat label="Total" value={total} />
        <Stat label="Pending" value={pending} />
        <Stat label="Approved" value={approved} />
        <Stat label="Rejected" value={rejected} />
        <Stat label="Hours" value={totalHours} />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div
      style={{
        padding: 15,
        border: "1px solid #ccc",
        borderRadius: 6,
        minWidth: 100,
        textAlign: "center",
      }}
    >
      <h4>{label}</h4>
      <p style={{ fontSize: 20 }}>{value}</p>
    </div>
  );
}

export default ActivityStats;
