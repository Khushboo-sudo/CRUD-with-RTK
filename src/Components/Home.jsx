import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { deleteUser } from "../utils/UserSlice";


function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  const handleDelete=(id)=>{
     dispatch(deleteUser({id}))
  }

  return (
   <>
    <div className="container mt-5">
   <h2 >Employees Data</h2>
  
   <button className="btn btn-primary  mb-2 "><Link to={"/create"} className="text-white">Add+</Link></button>
   <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to  ={`/update/${user.id}`} className="btn  btn-success m-1">Update</Link>
             <button className="btn btn-danger"
             onClick={()=>handleDelete(user.id)}>
               Delete
             </button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
      </>
  );
}

export default Home;
