import React from 'react'
import './Menu.css';
import ButtonAddRemoveItem from './ButtonAddRemoveItem';

const Menu = ({ list }) => {
  return (
    <div id="menu">
      <h1 className='menu-heading'>
      "Savor a Culinary Journey: Indulge in Our Irresistible Menu Selections!"
      </h1>
      {list.map(({ id, name, info, price, img }) => {
        return (
          <div key={id} className='menu-card'>
            <div className='menu-img'>
              <img src={img} alt={name} />
            </div>
            <div className='menu-data'>
              <h1>{name}</h1>
              <p>{info}</p>
              <div className='order-btn'>
                <p>$ {price}</p>
                <ButtonAddRemoveItem quantity={10}/>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu