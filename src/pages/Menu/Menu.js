import React from 'react'
import './Menu.css';
import menuItemsData from './data';
import { FaMinus, FaPlaneSlash, FaPlus } from "react-icons/fa";

const Menu = () => {
  return (
    <div id="menu">
      <h1 className='menu-heading'>
        "Savor a Culinary Journey: Indulge in Our Irresistible Menu Selections!"
      </h1>
      {menuItemsData.map(({ id, name, info, price, img }) => {
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
                <button><FaMinus /> Add <FaPlus /></button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu