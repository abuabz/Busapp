import React from 'react'
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom'
import Home from './pages/BusApp/Home'
import Track_page from './pages/BusApp/Track_page'
import Login from './pages/Login_Page/Login'
import Registration from './pages/Registration_Page/Registration'
import Add_bus from './pages/BusApp/Add_bus'
import Buses from './pages/BusApp/Buses'
import Single from './pages/BusApp/Single'
export default function App() {
  return (
    <BrowserRouter>
  
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Track_bus' element={<Track_page/>}/>
        <Route  path='/Login' element={<Login/>}/>
        <Route path='/Registration_Page'  element={<Registration/>}/>
        <Route path='/Add_bus' element={<Add_bus/>}/>
        <Route path='/Buses' element={<Buses/>}/>
        <Route path='/singlebus/:id' element={<Single/>}/>

        
    </Routes>
    </BrowserRouter>
  )
}
