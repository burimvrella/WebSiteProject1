import React, {useState} from 'react';
import Logo from './/assets/LogoWT.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import './Navbar.css';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
        <img src={Logo} alt="Logo" />
        <div className='hiddenLinks'>
          <Link to='/'> <HomeIcon /> </Link>
          <Link to='/project'> <CodeIcon /> </Link>
          <Link to='/about'> <PersonIcon /> </Link>
          <Link to='/contact'> <ContactMailIcon /> </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'> <HomeIcon /> home </Link>
        <Link to='/project'> <CodeIcon /> project </Link>
        <Link to='/about'> <PersonIcon /> about </Link>
        <Link to='/contact'> <ContactMailIcon /> contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar