import * as React from 'react';
import { Link } from 'react-router-dom'
import './Track_page.css'
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
import Modal from '@mui/material/Modal';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
export default function Track_page() {
  return (
    <div id=''>
      <Navbar collapseOnSelect expand="lg" variant="dark" id='main-nav'>
      <Container>
        <Navbar.Brand><Link to='/' ><img src={myImage} id='logo_image' /></Link></Navbar.Brand>
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

    <div id='trackbus-main'>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector' />
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}id='disname'>
          <Typography variant="h6" component="span" >
          Kasaragod
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector' />
          <TimelineDot style={{background:'green'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}id='disname'>
          <Typography variant="h6" component="span" >
          Kannur
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector' />
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}id='disname'>
          <Typography variant="h6" component="span" >
          Wayanad
                    </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Kozhikode
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Malappuram
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Palakkad
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Thrissur
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
           Ernakulam
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Idukki
          </Typography>
        </TimelineContent>
      </TimelineItem>
     
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Kottayam
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Alappuzha
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Pthitta
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Kollam 
          </Typography>
        </TimelineContent>
      </TimelineItem>  <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector id='conector'/>
          <TimelineDot style={{background:'#f9b054'}}>
            <DirectionsBusRoundedIcon />
          </TimelineDot>
          <TimelineConnector id='conector' />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} id='disname'>
          <Typography variant="h6" component="span">
          Tvm
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

    </div>
    
    </div>
  )
}
  