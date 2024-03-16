import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from './Img-1.jpg';

function ViewEmp() {
  let [id1, setId1] = useState("");
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Salary, setSalary] = useState("");
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
                <td>
                    <img src={img} alt="" width={400} height={300}></img>
                </td>
            </tr>
          <tr>
            <td>Name : {Name}</td>
          </tr>
          <tr>
            <td>Email : {Email}</td>
          </tr>
          <tr>
            <td>Salary : {Salary}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
export default ViewEmp;