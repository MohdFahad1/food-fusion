import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import { FaLongArrowAltLeft } from "react-icons/fa";
import emptyCart from '../../../Assets/empty cart.png'
const EmptyCart = () => {
  return (
    <div className='emptyCart'>
        <img src={emptyCart} alt="" />
        <Link to='/menu'><button><FaLongArrowAltLeft /> Shop Now</button></Link>
    </div>
  )
}

export default EmptyCart