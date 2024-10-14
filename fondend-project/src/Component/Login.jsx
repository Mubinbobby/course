import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
        const [user,setUser]=useState({
            username:'',
            password:''
        })

const navigate=useNavigate()

let updateUser=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}

let sendData=()=>{
    if ((user.username=="admin")&&(user.password=="1234"))
    {
        localStorage.setItem("username","admin");  // To store lifetime

        //sessionStorage.setItem("username","admin");  // To store for a paticulartime

        navigate('/home');

    }
    else alert("Invalid credentials")
}

  return (
    <>
    <div><h2>Login</h2></div>
    <br />
    <div>
    <TextField
    label="Username"
    id="outlined-required"
    defaultValue="Username"
    name='username'
    value={user.username}
    onChange={updateUser}
  />
  <br />
  <br />
  <TextField
  label="Password"
  id="outlined-required"
  defaultValue="Password"
  name='password'
  value={user.password}
  onChange={updateUser}
/>
</div>
<br />
<br />
<Button variant="contained" onClick={sendData}>Submit</Button>
</>
  )
}

export default Login