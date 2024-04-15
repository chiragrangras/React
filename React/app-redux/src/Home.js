import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { deleteUser } from './UseReducer';

function Home() {
  let users = useSelector((state) => state.user);
  // console.log(users);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let handleEdit = (id) =>{
    // console.log(id)
    navigate('/edituser/'+id)
  }

  let handleDelete = (id1) =>{
    // console.log(id)
    dispatch(deleteUser({id:id1}))
  }

  return (
    <div>
      <div className="container">
        <div>
            <Link to='/adduser' className="btn btn-primary my-3">Add new user</Link>
        </div>
        <div className="row justify-content-center">
          <div className="col-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user)=>(
                   <tr key={user.id}>
                   <th scope="row">{user.id}</th>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>{user.phone}</td>
                   <td>
                     <button className="btn btn-info">View</button>
                     <button onClick={()=>{handleEdit(user.id)}} className="btn btn-success mx-2">Edit</button>
                     <button onClick={()=>{handleDelete(user.id)}} className="btn btn-danger">Delete</button>
                   </td>
                 </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;