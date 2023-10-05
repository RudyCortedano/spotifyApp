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
        <label htmlFor="checkRigth">
          <span className="menu__rigth">
            <i class="fa-solid fa-bars"></i>
          </span>
        </label>
      </div>

    </nav>
  )
}

export default Navbar