import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../utils/UserSlice'

function Update() {

  const {id} = useParams()
const users = useSelector((state)=>state.users)



const existUser= users.find(users=>users.id==id);


const [uname, setName] = useState(existUser?existUser.name:'')
const [uemail, setEmail]=useState(existUser?existUser.email:'')
const dispatch = useDispatch()
const navigate = useNavigate()

  



const handleUpdate=(e)=>{
  e.preventDefault()
  dispatch(updateUser(
    {
    id:id,
    name:uname,
    email:uemail 
    
    }
))
navigate("/")



}

  return (
    <div className='container mt-5 form-control w-25 form-wrapper border rounded p-4 '>
     <h2>Edit Employees</h2>
    <form onSubmit={handleUpdate}>
    <div className='form-group '>
    <label htmlFor="">
        Name:
        <input type="text"    value={uname} onChange={(e)=>setName(e.target.value)} placeholder='name'/>
    </label>
    <br />
    <br />

    <label htmlFor="">
        Email:
        <input type="email"   value={uemail} onChange={(e)=>setEmail(e.target.value)} placeholder='email' />
    </label>
    </div>
<button className='btn btn-primary mx-4 mt-3'>Submit</button>

</form>
</div>
  )
 }

export default Update