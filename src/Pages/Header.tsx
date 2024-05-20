import React, { useEffect, useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem
} from 'mdb-react-ui-kit';
import ticketicon from '../Assets/movie-tickets-icon.webp'
import '../Styles/header.css'
import { Link } from 'react-router-dom';


function Header() {

  const [userData, setUserData] = useState<string | null>(null);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem('existingUser');
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('existingUser');
    sessionStorage.removeItem('token');
    setUserData(null);
  };

  return (
    <>
      <MDBNavbar className='bgclr' fixed="top">
        <MDBContainer>
          <MDBNavbarBrand href='/' className='text-warning py-2 fs-4 fw-bolder'>
            <img
              src={ticketicon}
              height='40'
              alt=''
              loading='lazy'
              className='me-2 mb-2'
            />
            Book Your Show
          </MDBNavbarBrand>
          <MDBNavbarItem type='none'>
            <div className='d-flex'>
              <div style={{marginTop:'10px'}}>
                <Link to={'/'} className='link me-5'>Home</Link>
                <Link to={'/moviesList'} className='link me-5'>Movies</Link>
                <Link to={''} className='link me-5'>About</Link>
                <Link to={''} className='link'>Contact us</Link>
              </div>
              <div style={{marginLeft:'100px'}}>
                { userData ? (
                  <button onClick={handleLogout} className='btn btn-outline-warning'><small>Logout</small></button>
                ) : (
                  <Link to={'/userLogin'}><button className='btn btn-outline-warning'><small>Login or Create Account</small></button></Link>
                ) }
              </div>
            </div>
          </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header
