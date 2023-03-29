import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {links} from './data';
import {FaBars, FaWindowClose} from 'react-icons/fa'

function Nav() {

  const [activeLink, setActiveLink] = React.useState(true);

  const changeActiveLink = () => {
    setActiveLink(activeLink => !activeLink);
  }

  const [burger, setBurger] = React.useState(false);

  const changeBurger = () => {
    setBurger(burger => !burger);
  }

  const navLinks = links.map((link,index) => {
      return(
        <li key={index}>
          <NavLink className={({isActive}) => isActive ? 'nav__active nav__links-link' : 'nav__links-link' } onClick={() => {changeActiveLink();
          }} to={link.path} >{link.name}</NavLink>
        </li>
      )
  });

  return (
    <nav className='nav'>
      <Link to='/' className='nav__logo'>
        <img src='../images/logo.png' alt='logo' className='nav__logo-img' />
      </Link>
      <ul className={activeLink ? 'nav__links':'nav__links-active' }>
        {navLinks}
      </ul>
      <button className='nav__bars' onClick={changeActiveLink}>{activeLink ? <FaBars /> : <FaWindowClose />}</button>
      
    </nav>
  )
}

export default Nav
