import React,{useEffect, useState} from 'react'
import './buses.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import myImagebus from './bus.png';
import myImage from './wavebus.png';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import {AiFillDelete} from 'react-icons/ai'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
export default function Buses() {
  const navigate = useNavigate()
  const ViewBus =(id)=>{
   navigate(`/singlebus/${id}`)
  }

  const [bus,setBus]=useState([])
  console.log(bus);

  useEffect(()=>{
    axios.get('http://localhost:3001/Add_bus/buses').then((data)=>{
      console.log(data);
      setBus(data.data.data)
    })
  },[])

const deleteBus = (id)=>{
  console.log(id);
  axios.delete(`http://localhost:3001/Add_bus/buses/${id}`).then((data)=>{
    console.log(data);
    window.location.reload()
  })
  .catch((err)=>{
    console.log(err);
  })

}
const [busdetail,dataBUS]=useState([])
console.log(busdetail);
const busdetails = (id)=>{
  console.log(id);
  axios.get(`http://localhost:3001/Add_bus/buses/${id}`).then((data)=>{
    console.log(data);
    dataBUS(data.data.data)
  })
}


  return (
    <div>
     

        <Navbar collapseOnSelect expand="lg" variant="dark" id='main-nav'>
        <Container>
          <Navbar.Brand ><Link to='/' ><img src={myImage} id='logo_image' /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <marquee direction='right' scrollamount="10"><img src={myImagebus}></img></marquee>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" id='nav-btn'><Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link></Nav.Link>
              {/* <Nav.Link href="#pricing" id='nav-btn'>About</Nav.Link> */}
            </Nav>

          </Navbar.Collapse>
        </Container>

      </Navbar>
               
             
      <div className="buses-main">
           
      <section>
   
     
     
     <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
      <div class="modal-dialog  modal-dialog-centered" role="document">
     
        <div class="modal-content" id='modalefct'>
          <div class="modal-header">
            <center><h5 class="modal-title" id="modalTitleId">{busdetail.BusNumber}</h5></center>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div className="busImg">
              <center><h5>Time  : <span className='timemodal' > {busdetail.Etime}AM to {busdetail.Etime}PM</span></h5></center>
            </div>
            <div className="busRoutes">
              <li>Arrival Route  : <span className='arrroute'>{busdetail.Departure}</span> </li>
              <li>Departure Route: <span className='dptroute' >{busdetail.Destination}</span> </li>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
     </div>
  
     <script>
      const myModal = new bootstrap.Modal(document.getElementById('modalId'), options)
     
     </script>
            
  <div className="container">
    {bus.map((data,key)=>

              <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={`images/${data.BusImage}`} />
                </div>
                <div className="contentBx">
                  <h3>
                    KSRTC
                    <br />
                    <span>{data.BusNumber}</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  {/* <a onClick={()=>{
                    ViewBus('1');
                    console.log('hyy')
                  }}> */}
                          <a data-bs-toggle="modal" data-bs-target="#modalId"  onClick={()=>busdetails(data._id)}>
                          <span className='viewbus'><MdOutlineArrowForwardIos className='viewicon'/> VIEW BUS</span>
     
                          </a>  
                </li>
                <li>
                  <a><AiFillDelete onClick={()=>deleteBus(data._id)} className='deleteicon'/></a>
                </li>    
              </ul>
              </div>
      
    )}
  
    {/* <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src="https://media.istockphoto.com/id/1202308955/vector/blue-public-bus.jpg?s=612x612&w=0&k=20&c=xz45M3tlrXk7G21nXaVTuEKmKFhhhB7iIsKbpZEWTok=" />
        </div>
        <div className="contentBx">
          <h3>
            KSRTC
            <br />
            <span>KL15AB7836</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="">Routs</a>
        </li>
        <li>
          <a href="">Drivers</a>
        </li>
        <li>
          <a href="">Time</a>
        </li>
      </ul>
    </div>
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src="https://media.istockphoto.com/id/1202308955/vector/blue-public-bus.jpg?s=612x612&w=0&k=20&c=xz45M3tlrXk7G21nXaVTuEKmKFhhhB7iIsKbpZEWTok=" />
        </div>
        <div className="contentBx">
          <h3>
            KSRTC
            <br />
            <span>KL15AB7836</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="">Routs</a>
        </li>
        <li>
          <a href="">Drivers</a>
        </li>
        <li>
          <a href="">Time</a>
        </li>
      </ul>
    </div>
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src="https://media.istockphoto.com/id/1202308955/vector/blue-public-bus.jpg?s=612x612&w=0&k=20&c=xz45M3tlrXk7G21nXaVTuEKmKFhhhB7iIsKbpZEWTok=" />
        </div>
        <div className="contentBx">
          <h3>
            KSRTC
            <br />
            <span>KL15AB7836</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="">Routs</a>
        </li>
        <li>
          <a href="">Drivers</a>
        </li>
        <li>
          <a href="">Time</a>
        </li>
      </ul>
    </div>
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src="https://media.istockphoto.com/id/1202308955/vector/blue-public-bus.jpg?s=612x612&w=0&k=20&c=xz45M3tlrXk7G21nXaVTuEKmKFhhhB7iIsKbpZEWTok=" />
        </div>
        <div className="contentBx">
          <h3>
            KSRTC
            <br />
            <span>KL15AB7836</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="">Routs</a>
        </li>
        <li>
          <a href="">Drivers</a>
        </li>
        <li>
          <a href="">Time</a>
        </li>
      </ul>
    </div>
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src="https://media.istockphoto.com/id/1202308955/vector/blue-public-bus.jpg?s=612x612&w=0&k=20&c=xz45M3tlrXk7G21nXaVTuEKmKFhhhB7iIsKbpZEWTok=" />
        </div>
        <div className="contentBx">
          <h3>
            KSRTC
            <br />
            <span>KL15AB7836</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="">Routs</a>
        </li>
        <li>
          <a href="">Drivers</a>
        </li>
        <li>
          <a href="">Time</a>
        </li>
      </ul>
    </div>
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src="https://media.istockphoto.com/id/1202308955/vector/blue-public-bus.jpg?s=612x612&w=0&k=20&c=xz45M3tlrXk7G21nXaVTuEKmKFhhhB7iIsKbpZEWTok=" />
        </div>
        <div className="contentBx">
          <h3>
            KSRTC
            <br />
            <span>KL15AB7836</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="">Routs</a>
        </li>
        <li>
          <a href="">Drivers</a>
        </li>
        <li>
          <a href="">Time</a>
        </li>
      </ul>
    </div>
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src="https://media.istockphoto.com/id/1202308955/vector/blue-public-bus.jpg?s=612x612&w=0&k=20&c=xz45M3tlrXk7G21nXaVTuEKmKFhhhB7iIsKbpZEWTok=" />
        </div>
        <div className="contentBx">
          <h3>
            KSRTC
            <br />
            <span>KL15AB7836</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="">Routs</a>
        </li>
        <li>
          <a href="">Drivers</a>
        </li>
        <li>
          <a href="">Time</a>
        </li>
      </ul>
    </div> */}
    {/* <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src="https://media.istockphoto.com/id/1202308955/vector/blue-public-bus.jpg?s=612x612&w=0&k=20&c=xz45M3tlrXk7G21nXaVTuEKmKFhhhB7iIsKbpZEWTok=" />
        </div>
        <div className="contentBx">
          <h3>
            KSRTC
            <br />
            <span>KL15AB7836</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="">Routs</a>
        </li>
        <li>
          <a href="">Drivers</a>
        </li>
        <li>
          <a href="">Time</a>
        </li>
      </ul>
    </div> */}
  </div>
</section>
      </div>


    </div>
  )
}
