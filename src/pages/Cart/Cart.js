import React from 'react';
import './Cart.css';
import Menu from '../Menu/Menu';
import  menuItemsData from '../Menu/data';
import EmptyCart from './EmptyCart';

const Cart = () => {
  return (
    <div id="cart">
    <EmptyCart />
      <div className='orders'>
        <h1 className='orders-heading'>Your Orders</h1>
        <div className='orders-menu'>
          <Menu list={menuItemsData}/>
        </div>
        <h3 className='orders-total'>Your Total $23</h3>
      </div>
    </div>
  )
}

export default Cart