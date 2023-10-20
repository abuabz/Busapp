import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios'
export default function Login() {

  const[data,setdata] = useState({});
  // console.log("data",data);

  const setRegister = (event)=>{
    const name = event.target.name;
    const value=event.target.value;
    setdata({...data,[name]:value})
  }

  const btnfun = (clk)=>{
    clk.preventDefault()
    console.log("Userdata",data);
    axios.post("http://localhost:3001/log/log",data).then((response)=>{
console.log(response.data.tocken);
localStorage.setItem('Tocken',response.data.tocken)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div class="divv">

    
    <div class="maindivL">
        <input className='inputbox' type="text" placeholder="USERNAME" id="username" name='Username' onChange={setRegister}/><br/>
        <input className='inputbox' type="password" placeholder="PASSWORD" name='Password'onChange={setRegister}/><br/><br/>
        <a href="//"><button class="button2" onClick={btnfun} >LOGIN</button></a><br/><br/><br/>

        <label  style={{marginLeft: "106px",fontSize: "20px", color:"white"}}>Not registered?</label><label style={{color: "#fff"}}><Link style={{    color: "#f9b054"}} to={"/Registration_Page"}>Create an account</Link></label>
    </div>
    </div>
  
  )
}
