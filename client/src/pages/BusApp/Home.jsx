import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myImage from './wavebus.png';
import myImagebus from './bus.png';
import myImagebusss from './busss.jpg';
import busesimg from './buses.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconName } from "react-icons/md";
import { NearMe } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: ' #fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "20px"
};
export default function Home() {

  const [buses,setBus]=useState([]);
  const [open, setOpen] = React.useState(false);
  const [locations, setlocations] = useState({
    inp1: '',
    inp2: ''
  })
  const locData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setlocations({ ...locations, [name]: value })
    // console.log(locations);
  }

  const handleOpen = (e) => {
    e.preventDefault()
    console.log(locations);

    if (locations.inp1 === '' || locations.inp2 === '') {
      setOpen(false)
      toast.warn('Please fill out the Locations');
    }
    else {
              const arr=['Malappuram','Kannur',"Kasaragod","Wayanad","Kozhikode","Thrissur","Palakkad","Ernakulam","Idukki","Alappuzha","Kottayam","Pathanamthitta","Kollam","Thiruvananthapuram"]

           if(arr.includes(locations.inp1)&&arr.includes(locations.inp2)){
                setOpen(true)
              }
              else{
                setOpen(false)
                toast.warn('Please fill correct Locations');
              }
            
    }
    axios.get('http://localhost:3001/Add_bus/getbuses').then((response)=>{
      console.log(response);
    setBus(response.data.data)
    }).catch((err)=>{
      console.log(err);
    })


  
  }
  const handleClose = () => setOpen(false);



  return (


  <div className='mdiv'>


      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} id='boxmodal' >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {buses.map((data,key)=>
               <b>{data.Departure} to {data.Destination}</b>
              )}
             
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div class="table-responsive">
                <table class="table table-striped
            table-hover	
            table-borderless
            table-primary
            align-middle"
                  style={{ textAlign: 'center' }}>
                  <thead class="table-light">
                    <tr>
                      <th>BUS</th>
                      <th>NUMBER</th>
                      <th>TIME</th>
                      <th>FIND</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                    {buses.map((data,key)=> 
                    <tr class="table-primary" >
                      <td><img src={`images/${data.BusImage}`} id='busimg'  alt=""/></td>
                      <td scope="row" style={{textTransform:"uppercase"}}>{data.BusNumber}</td>
                      <td>{data.Stime} - {data.Etime}</td>
                      <td><a name="" class="btn btn-warning" href="" role="button"><Link to='/Track_bus' id="track-btn" >Track</Link> </a></td>
                    </tr>
                    )}
                  </tbody>
                  <tfoot>

                  </tfoot>
                </table>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
      <Navbar collapseOnSelect expand="lg" variant="dark" id='main-nav'>
        <Container>
          <Navbar.Brand><Link to='/' ><img src={myImage} id='logo_image' /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <marquee direction='right' scrollamount="10"><img src={myImagebus}></img></marquee>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" id='nav-btnhome'>Home</Nav.Link>
              <Nav.Link href="#pricing" id='nav-btn'>About</Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown" className='nav-btn'>
                <NavDropdown.Item href="#action/3.1"><Link to='/Login' style={{ textDecoration: "none", color: "black", letterSpacing: '3px' }}> <LoginIcon /> Sign In</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to='/Registration_page' style={{ textDecoration: "none", color: "black", letterSpacing: '3px' }}><PersonAddIcon /> Sign Up</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link to='/Add_bus' style={{ textDecoration: "none", color: "black", letterSpacing: '3px' }}><i style={{fontSize:'20px',padding:'5px'}} class="bi bi-bus-front"></i>Add Bus</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <Link to='/Buses' style={{ textDecoration: "none", color: "black", letterSpacing: '3px' }}><i style={{fontSize:'20px',padding:'5px'}} class="bi bi-bus-front"></i> Buses</Link>
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
        theme="colored"
        toastStyle={{backgroundColor:'#f9b054'}}
      />
      <div id='main-division'>
        <h1 id='heading1'>WAVE<span id='bushead'>BUS</span> LIVE TRACKING</h1>
        <h2 id='heading2'>Track Your Bus Live!</h2>
        <div id='sub-div'>
          <form id='sub-div'>
         
  
            <Form.Control type="text" list="fruitList" id='inpbox1' name='inp1' placeholder="Leaving From " onChange={locData} required />
  <datalist id="fruitList">
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
  </datalist>
            <Form.Control type="text" list="fruitList" id='inpbox2' name='inp2' placeholder="Going to" onChange={locData} required />

            <button id='btn-trk' onClick={handleOpen}>TrackBUS</button>
          </form>
        

        </div>
        <h5 id='heading3'>WAVE<span id='bushead'>BUS</span> Live Tracking technology tracks and
          shows the real-time moment of your bus location.</h5>
      </div>
      {/* <Card style={{ width: '95%' , margin:'auto' , marginTop:'20px',display:'flex'}}>
      <Card.Img variant="top" src="https://developer.tomtom.com/assets/products/SDKs/navigation-sdk.png?hash=j43jfjs" id='card1'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        AbhiBus live bus tracking feature enables our customers and their family members or friends to check real time online bus tracking for all bus operator services. This online bus tracker feature helps for passengers to know the boarding, dropping, pick-ups points, bus scheduling and information for safe and comfortable bus journey.

          The live bus tracker facility will begin once a bus operator assigns the online bus live tracker on your scheduled bus service. AbhiBus passengers can track their booked bus service details on bus tracking tool to know the information for catching the bus at the boarding point and you can also track the live location of the dropping point on your mobile or desktop devices.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      {/* </Card.Body>
    </Card> */}


    
      <Container id='main-container' style={{ width: '95%', margin: 'auto', marginTop: '30px', color: 'white' }}>
        <Row sty>
          <Col><Card.Img variant="top" src={myImagebusss} id='card1' /></Col>
          <Col id='content1' style={{ marginLeft: '-10px' }}> <h2>Online Bus Tracking With WAVEBUS</h2>Wavebus live bus tracking feature enables our customers and their family members or friends to check real time online bus tracking for all bus operator services. This online bus tracker feature helps for passengers to know the boarding, dropping, pick-ups points, bus scheduling and information for safe and comfortable bus journey.</Col>
        </Row>
      </Container>
  
   <footer>
    <div className="waves">
      <div className="wave" id='wave1'></div>
      <div className="wave" id='wave2'></div>
      <div className="wave" id='wave3'></div>
      <div className="wave" id='wave4'></div>
    </div>
    <ul className="social_icons">
      <li><a href="#"><i class="bi bi-instagram"></i></a></li>
      <li><a href="#"><i class="bi bi-facebook"></i></a></li>
      <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
      <li><a href="#"><i class="bi bi-whatsapp"></i></a></li>
    </ul>
    <ul className="menu">
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Team</a></li>
      <li><a href="">Contact</a></li>
    </ul>
    <p>Copyright© 1995-2023 abuabz All Rights Reserved.</p>
    </footer>
</div>
 

  )
}
