import React from 'react'
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CartCountButton from '../CartCountButton';


const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
      <div className='image-logo'>
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <h1>Taste</h1>
      </div>
      </div>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" >
            About Us
          </Link>
        </li>
        <li>
          <Link to="/menu">
            Menu
          </Link>
        </li>
      </ul>
      
      <Link to="/cart">
            <CartCountButton />
          </Link>
    </nav>
  )
}

export default Navbar