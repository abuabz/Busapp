import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Add_bus.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myImage from './wavebus.png';
import myImagebus from './bus.png';
import myImagebusss from './busss.jpg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconName } from "react-icons/md";
import {NearMe} from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export default function Track_page() {

  const navigate = useNavigate();
  
  const [value, setValue] = useState("");
  const [file,setFile]=useState('');

  const handleChange = (event) => {
  
    setValue(event.target.value);
  };

  const [data, setdata] = useState({})
  const busno = (event)=>{
    const name=event.target.name
    const value=event.target.value
    setdata({...data,[name]:value})
    // console.log(data);
  }
 const addbusdata = (event)=>{
  
  event.preventDefault()
  console.log(data);
  if(file){
    const formdata = new FormData();
    const filename=file.name
    formdata.append('name',filename)
    formdata.append('file',file)
    console.log('filedata',formdata);
    axios.post('http://localhost:3001/Add_bus/upload',formdata).then((response)=>{
      console.log(response);
      toast.success('🦄 Bus added!');
      navigate('/Buses');
    })
  }
 


  axios.post('http://localhost:3001/Add_bus/add_bus',data).then((response)=>{
    console.log(response)
  }).catch((err)=>{
    console.log(err);
    toast.error('Please Fill out the field');

  })
 }  

  return (
    <div id=''>
      <Navbar collapseOnSelect expand="lg" variant="dark" id='main-nav'>
      <Container>
        <Navbar.Brand href="#home"><img src={myImage}  id='logo_image' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <marquee direction='right' scrollamount="10"><img src={myImagebus}></img></marquee>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='nav-btnhom'><Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link></Nav.Link>
            <Nav.Link href="#pricing" id='nav-btn'>About</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown" className='nav-btn'>
              <NavDropdown.Item href="#action/3.1"><Link to='/' style={{textDecoration:"none",color:"black"}}>Sign In</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to='/Registration_page' style={{textDecoration:"none",color:"black"}}>Sign Up</Link>
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
  
    </Navbar>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <div id='track-main'>
        <input className='inputbox-addbus' type="text" placeholder="BUS NUMBER eg:(KL71B7909)" id="bus-number" value={value}
          onChangeCapture={handleChange}  onChange={busno}
          maxLength={10} name='BusNumber'   required/><br/>
           <input className='inputbox-addbus' id='imagebus' type="file"  name='BusImage'  required onChange={(e)=>{
            setFile(e.target.files[0]); setdata({...data,BusImage:e.target.files[0].name})
           }}/>
        <div id='bustime-inputbox'>
            <input className='inputbox-addbus' type="time" placeholder='06:00AM' name='Stime' onChange={busno}/>
            <h4 id='to'>TO</h4>
            <input className='inputbox-addbus' id='endtime' type="time" placeholder="10:00PM" name='Etime' onChange={busno}/>

           
        </div>
      <div >
        {/* <label for="" class="form-label">City</label> */}
        <select class="form-select form-select-lg" name="Departure" id=""  onChange={busno}>
          <option value="" selected>Chooose Start Location</option>
          <option value="Kasaragod">Kasaragod</option>
          <option value="Kannur">Kannur</option>
          <option value="Wayanad">Wayanad</option>
          <option value="Kozhikode">Kozhikode</option>
          <option value="Malappuram">Malappuram</option>
          <option value="Thrissur">Thrissur</option>
          <option value="Palakkad">Palakkad</option>
          <option value="Ernakulam">Ernakulam</option>
          <option value="Idukki">Idukki</option>
          <option value="Alappuzha">Alappuzha</option>
          <option value="Kottayam">Kottayam</option>
          <option value="Pathanamthitta">Pathanamthitta</option>
          <option value="Kollam">Kollam</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
        </select>
      </div>
    
      <div >
        {/* <label for="" class="form-label">City</label> */}
        <select class="form-select form-select-lg select-input" name="Destination" id="" onChange={busno}>
        <option value="" selected>Chooose Destination</option>
          <option value="Kasaragod">Kasaragod</option>
          <option value="Kannur">Kannur</option>
          <option value="Wayanad">Wayanad</option>
          <option value="Kozhikode">Kozhikode</option>
          <option value="Malappuram">Malappuram</option>
          <option value="Thrissur">Thrissur</option>
          <option value="Palakkad">Palakkad</option>
          <option value="Ernakulam">Ernakulam</option>
          <option value="Idukki">Idukki</option>
          <option value="Alappuzha">Alappuzha</option>
          <option value="Kottayam">Kottayam</option>
          <option value="Pathanamthitta">Pathanamthitta</option>
          <option value="Kollam<">Kollam</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
        </select>
      </div>  <br/><br/>
        <button class="Addbus-btn" onClick={addbusdata}><AddIcon/>ADD BUS</button><br/><br/><br/>
    </div>
    </div>
  )
}
