import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function ViewEmp(){

    let [id1,setId1] = useState('');
    let [Name,setName] = useState('');
    let [Email, setEmail] = useState('');
    let [Salary,setSalary] = useState('');
    const {id} = useParams();
    // console.log(id)

    useEffect(()=>{

        fetch('http://localhost:4000/employees/'+id)
        .then((res)=>{ return res.json()})
        .then((data)=>{
            setId1(data.id)
            setName(data.name)
            setEmail(data.email)
            setSalary(data.salary)
        })

    },[])
    return(
        <div>
            <h2>ID : {id1} </h2>
            <p>Name : {Name} </p>
            <p>Email : {Email}</p>
            <p>Salary : {Salary} </p>
        </div>
    )
}
export default ViewEmp