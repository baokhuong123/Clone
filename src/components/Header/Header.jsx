import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {signOut} from 'firebase/auth'
import { auth } from "../Services/FirebaseConfig"
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';
import UserLogo from '../images/User.png'
import LogoutModal from '../Modals/Logout_modals';
import SecondHeader from "./SecondHeader";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const Header = () =>{
  const [logoutModalShow, setLogoutModalShow] = useState(false)
  const navigate = useNavigate()
  const [hoverLogout, setHoverLogout] = useState(false)

  const handleLogout =()=>{
    signOut(auth).then(() => {
      console.log('Sign-out successful')
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
    localStorage.clear()
    if(localStorage.length === 0) navigate('/')
}
  //console.log(localStorage.getItem('avatar'))
    return <div className="fixed-top" >
    <Navbar className='header py-3' expand="lg" bg='dark'>
    {/* <Navbar.Brand href="/home">
          <img src={logoApp} alt="app logo" width={'30'} height={'30'} className="d-inline-block align-top" /> Khuong Webapp</Navbar.Brand> */}
    
        <Nav className="ms-4 me-auto"><h3 className='text-white'>Hisoft Asset</h3></Nav>
        
        <Nav className='me-4'>
        {/* <i className="fa-solid fa-bell pt-2 me-4 text-white" style={{ fontSize: '26px' }} /> */}
        <NotificationsRoundedIcon className='mt-1 me-5' fontSize='large' sx={{ color: 'white' }}/>
        <img src={localStorage.getItem('avatar') === null || localStorage.getItem('avatar') === '' ? UserLogo : localStorage.getItem('avatar')}
         alt="app logo" width={'48'} height={'48'} className="me-2 rounded-circle" /> 
        <span className='me-4' style={{height:'3rem'}}>
        <span  className='text-white'><strong>{localStorage.getItem('username')}</strong></span>
         <p className='text-white'>Warehouse manager</p> 
        </span>
          <Button className='px-3 rounded-0' variant='warning'
          onMouseEnter={() => setHoverLogout(true)} onMouseLeave={() => setHoverLogout(false)} 
          onClick={() => setLogoutModalShow(true)}>
            <i className={`fa-solid fa-right-from-bracket ${hoverLogout && 'fa-beat'}`}></i> Logout
            </Button></Nav>
  </Navbar>
  <SecondHeader/>
  {logoutModalShow && <LogoutModal show={logoutModalShow}
   handleClose={() => setLogoutModalShow(false)} logout={() => handleLogout()}/>}
    </div>
    
}

export default Header