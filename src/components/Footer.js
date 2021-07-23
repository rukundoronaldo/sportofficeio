import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Footer() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className='footer'>
            <div className='navbar-container'>
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
        <p>Copyright ©. Tous droits réservés.</p>
        </div>
    )
}
