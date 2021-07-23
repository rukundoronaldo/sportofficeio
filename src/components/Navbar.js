import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/Accueil' className='navbar-logo' onClick={closeMobileMenu}>
          SPORTOFFICE
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Accueil' className='nav-links' onClick={closeMobileMenu}>
              Accueil              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Mentions Légales'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mentions Légales
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Politique de confidentialité'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
