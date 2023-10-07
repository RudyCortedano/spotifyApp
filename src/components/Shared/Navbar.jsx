import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <nav className='navbar__init'>
      <label className='navbar__btnBack' onClick={handleBack}>Back</label>
      <div className='navbar__infoButton'>
        <Link className='navbar__home' to='/'>Home</Link>
        <Link className='navbar__home' to='/playlist'>Playlist</Link>
      
      </div>

    </nav>
  )
}

export default Navbar