import { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });

  const [activities, setActivities] = useState(() => {
    return JSON.parse(localStorage.getItem("activities")) || [];
  });

  // save employees
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // save activities
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  // ADD EMPLOYEE (Admin)
  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        ...employee,
        status: "Active",
      },
    ]);
  };

  // Activate / Deactivate employee
  const toggleEmployeeStatus = (id) => {
    setEmployees(
      employees.map((e) =>
        e.id === id
          ? {
              ...e,
              status: e.status === "Active" ? "Inactive" : "Active",
            }
          : e
      )
    );
  };

  // ADD ACTIVITY (Employee)
  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  // UPDATE ACTIVITY STATUS (Manager)
  const updateActivityStatus = (id, newStatus, remarks = "") => {
    setActivities(
      activities.map((a) =>
        a.id === id ? { ...a, status: newStatus, remarks } : a
      )
    );
  };

  // EDIT EMPLOYEE (Admin)
  const editEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((e) => (e.id === updatedEmployee.id ? updatedEmployee : e))
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        toggleEmployeeStatus,
        activities,
        addActivity,
        updateActivityStatus,
        editEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
