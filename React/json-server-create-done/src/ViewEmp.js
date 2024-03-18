import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import file from './Img-1.jpg';

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
                <td rowSpan={4} style={{width:"25%"}}>
                    <img src={file} alt="" width={200} height={200}></img>
                </td>
            </tr>
          <tr>
            <td className="text-align-left">Name : {name}</td>
          </tr>
          <tr>
            <td className="text-align-left">Email : {email}</td>
          </tr>
          <tr>
            <td className="text-align-left">Salary : {salary}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
export default ViewEmp;