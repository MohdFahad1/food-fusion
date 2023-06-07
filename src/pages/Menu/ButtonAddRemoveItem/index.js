import React from 'react'
import './index.css';
import { FaMinus,  FaPlus } from "react-icons/fa";

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className='btnAddRemove'>
        {quantity !== 0 ? (
            <div className='btnAddRemove-positive'>
                <FaMinus onClick={handleRemoveItem}/>
                <span>{quantity}</span>
                <FaPlus onClick={handleAddItem} />
            </div>
        ) : (
            <div className='btnAddRemove-negative' onClick={handleAddItem}>
            <span>ADD</span> 
                <FaPlus />
            </div>
            )
        }
    </div>
  )
}

export default ButtonAddRemoveItem