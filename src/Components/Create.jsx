import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../utils/UserSlice'
import { Link, useNavigate } from 'react-router-dom'


function Create() {
const [name, setName]= useState("")
const [email, setEmail]= useState("")

const users=useSelector((state)=>state.users)
const dispatch=useDispatch()
const navigate = useNavigate()

const handleSubmit=(e)=>{
e.preventDefault();
dispatch(adduser({id:users[users.length - 1].id+1,name,email}))

navigate("/")
}

  return (
<div className='container mt-5 form-control w-25 form-wrapper border rounded p-4   '>
  
    <form  onSubmit={handleSubmit}>
      <h2> Add Employees </h2>
      <div className='form-group '>
    <label htmlFor="">
        Name:
        <input type="text"  placeholder='name' onChange={(e)=>setName(e.target.value)} />
    </label>
    <br />
    <br />

    <label htmlFor="">
        Email:
        <input type="email"  placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
    </label>
    </div>
<button className='btn btn-primary mx-1 mt-2'>Submit</button>

</form>
</div>

  )
}

export default Create