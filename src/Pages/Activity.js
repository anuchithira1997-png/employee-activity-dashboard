import { useState, useContext } from "react";
import { EmployeeContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function EmployeeActivity() {
  const { addActivity, activities } = useContext(EmployeeContext);

  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!task || !hours || !date) {
      alert("Fill all fields");
      return;
    }

    addActivity({
      id: Date.now(),
      employeeName: "Employee",
      task,
      hours,
      date,
      status: "Pending",
      remarks: "",
    });

    setTask("");
    setHours("");
    setDate("");
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Employee Activity</h2>

      <input
        placeholder="Task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <br />

      <input
        type="number"
        placeholder="Hours worked"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <br />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleSubmit}>Submit Activity</button>
      <button onClick={handleBack} style={{ margin: "12px" }}>
        Back
      </button>

      <hr />

      <h3>My Activities</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Hours</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a) => (
            <tr key={a.id}>
              <td>{a.date}</td>
              <td>{a.task}</td>
              <td>{a.hours}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeActivity;
