import { useState, useContext } from "react";
import { EmployeeContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { employees, addEmployee, toggleEmployeeStatus, editEmployee } =
    useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const navigate = useNavigate();

  // Add employee details
  const handleAdd = () => {
    if (!name) {
      alert("Enter employee name");
      return;
    }
    addEmployee({
      id: Date.now(),
      name,
      department,
      role,
    });
    setName("");
  };

  // Edit employee details
  const handleEdit = (employee) => {
    const newName = prompt("Edit employee name", employee.name);
    if (!newName) return;
    const newRole = prompt(
      "Edit role (Admin / Manager / Employee)",
      employee.role
    );
    if (!newRole) return;

    editEmployee({
      ...employee,
      name: newName,
      role: newRole,
    });
  };
  const handleBack = () => {
    navigate("/");
  };

  // 🔎 Apply search & filter
  const filteredEmployees = employees.filter((e) => {
    const matchesName = e.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "All" || e.status === filterStatus;
    return matchesName && matchesStatus;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Admin Dashboard
      </h2>

      {/* Add Employee */}
      <input
        placeholder="Employee Name"
        style={{ marginRight: "12px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        style={{ marginRight: "12px" }}
      >
        <option value="" disabled>
          Select Department
        </option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="HR">HR</option>
      </select>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ marginRight: "12px" }}
      >
        <option value="" disabled>
          Select Role
        </option>
        <option value="Employee">Employee</option>
        <option value="Manager">Manager</option>
        <option value="Admin">Admin</option>
      </select>
      <button onClick={handleAdd}>Add </button>
      <button onClick={handleBack} style={{ margin: "12px" }}>
        Back
      </button>

      <hr />

      <h3>Employee List</h3>
      <input
        placeholder="Search by name"
        style={{ marginRight: "12px" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>EmployeeName</th>
            <th>Role</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((e) => (
            <tr key={e.id}>
              <td>
                {e.name}
                <button
                  style={{
                    marginLeft: "8px",
                    marginRight: "8px",
                  }}
                  onClick={() => handleEdit(e)}
                >
                  Edit
                </button>
              </td>
              <td>{e.role}</td>
              <td>{e.department}</td>
              <td>
                {e.status}
                <button
                  style={{
                    marginLeft: "8px",
                    marginRight: "8px",
                  }}
                  onClick={() => toggleEmployeeStatus(e.id)}
                >
                  {e.status === "Active" ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredEmployees.length === 0 && <p>No employees found</p>}
    </div>
  );
}

export default AdminDashboard;
