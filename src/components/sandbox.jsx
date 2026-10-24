import React, { useState } from "react";
const EmployeeTable = () => {
  const [employees, setEmployees] = useState([
    { id: 101, name: "Bhupender", dept: "Frontend", salary: 50000 },
    { id: 102, name: "Amit", dept: "Backend", salary: 60000 },
  ]);
  const addEmployee = () => {
    const newEmp = {
      id: Date.now(),
      name: "New Hire",
      dept: "Engineering",
      salary: 45000,
    };
    setEmployees([...employees, newEmp]);
  };
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Records</h2>
      <button onClick={addEmployee} style={{ marginBottom: "10px" }}>
        Add Employee
      </button>
      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>S.No</th> {/* Changed from ID */}
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              {/* index + 1 gives us 1, 2, 3... */}
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.dept}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
