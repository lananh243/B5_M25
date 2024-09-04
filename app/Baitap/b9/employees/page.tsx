import { useRouter } from "next/navigation";
import React from "react";

export default function Employee() {
  const employee = [
    {
      name: "David",
      age: 20,
      id: 1,
    },
    {
      name: "Linda",
      age: 22,
      id: 2,
    },
    {
      name: "Kavin",
      age: 18,
      id: 3,
    },
  ];
  return (
    <div>
      <h1>Bài 9 :</h1>
      <h2>Danh sách nhân viên</h2>
      {employee.map((item) => {
        return (
          <ul key={item.id}>
            <li>Id : {item.id}</li>
            <p>Name : {item.name}</p>
            <p>Age : {item.age}</p>
            <button>Employee detail</button>
          </ul>
        );
      })}
    </div>
  );
}
