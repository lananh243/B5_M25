import React from "react";

export default function Department() {
  const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Sales" },
    { id: 4, name: "IT" },
  ];
  return (
    <div>
      <h2>List Departments</h2>
      {departments.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
