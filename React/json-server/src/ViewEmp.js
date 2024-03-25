import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ViewEmp() {
  let [id1, setId1] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [salary, setSalary] = useState("");
  
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    fetch("http://localhost:4000/employees/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setId1(data.id);
        setName(data.name);
        setEmail(data.email);
        setSalary(data.salary);
      });
  }, []);
  return (
    <div>
      <table className="table">
        <thead className="table-info">
          <tr>
            <td>Name : {name}</td>
          </tr>
          <tr>
            <td>Email : {email}</td>
          </tr>
          <tr>
            <td>Salary : {salary}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
export default ViewEmp;