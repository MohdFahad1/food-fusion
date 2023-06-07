import React from 'react';
import './index.css';
import { FaShoppingCart } from "react-icons/fa";

const CartCountButton = ({ cartCount }) => {
  return (
    <div className="btnCartCount">
        <div className='count'>
            {cartCount >=100 ? '99+' : cartCount}
            <FaShoppingCart className='icon'/>
        </div>
    </div>
  )
}

export default CartCountButton