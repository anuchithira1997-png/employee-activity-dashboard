import { useContext, useState } from "react";
import { EmployeeContext } from "../context/Context";
import ActivityStats from "../Components/ActivityStatus";

function ManagerDashboard() {
  const { activities, updateActivityStatus } = useContext(EmployeeContext);

  const [filter, setFilter] = useState("All");
  const [remarks, setRemarks] = useState({});

  const filteredActivities =
    filter === "All"
      ? activities
      : activities.filter((a) => a.status === filter);

  return (
    <div style={{ padding: 20 }}>
      <h2>Manager Dashboard</h2>

      <ActivityStats />

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Pending</option>
        <option>Approved</option>
        <option>Rejected</option>
      </select>

      <hr />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Task</th>
            <th>Hours</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredActivities.map((a) => (
            <tr key={a.id}>
              <td>{a.employeeName}</td>
              <td>{a.date}</td>
              <td>{a.task}</td>
              <td>{a.hours}</td>
              <td>{a.status}</td>
              <td>
                <input
                  placeholder="Remarks"
                  value={remarks[a.id] || ""}
                  onChange={(e) =>
                    setRemarks({
                      ...remarks,
                      [a.id]: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                {a.status === "Pending" && (
                  <>
                    <button
                      onClick={() =>
                        updateActivityStatus(a.id, "Approved", remarks[a.id])
                      }
                    >
                      Approve
                    </button>
                    &nbsp;
                    <button
                      onClick={() =>
                        updateActivityStatus(a.id, "Rejected", remarks[a.id])
                      }
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagerDashboard;
