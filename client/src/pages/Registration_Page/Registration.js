import React, { useState } from 'react'
import './Registration.css';
import axios from 'axios'
export default function Registration() {

  const[data,regdata] = useState({});
  // console.log('data',data);

  const setRegister = (event) =>{
    const name = event.target.name
    const value= event.target.value
    regdata({...data,[name]:value})

   
  }
  const btnclk = (clk)=>{
    clk.preventDefault()
    console.log("Userdata",data);
    axios.post("http://localhost:3001/",data).then((response)=>{
    console.log(response);
    }).catch((err)=>{
      console.log(err.response.data.message)
    })
  }
  return (
    <div class="maindiv">
    <input type="text" placeholder="USERNAME" class="Username" name='Username' onChange={setRegister}/><br/>
    <input type="password" placeholder="PASSWORD"name='Password' onChange={setRegister} /><br/>
    <input type="tel" placeholder="MOBILE" name='Mobile' onChange={setRegister}/>
    <input type="email" placeholder="EMAIL ID" name='Email' onChange={setRegister}/>
    <input type="text" placeholder="ROLE" name='Role' onChange={setRegister}/>
    <input type="number" placeholder="AGE" name='Age' onChange={setRegister}/>
    
    <br/><br/>
    <a href="/"><button class="button1" onClick={btnclk}>REGISTER</button></a><br/><br/><br/>


</div>
  )
}
