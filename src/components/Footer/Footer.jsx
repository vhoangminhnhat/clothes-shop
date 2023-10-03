import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>

        </div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>NHAT DRESS SHOP</span>
          <span className='copyright'>&copy; Copyright 2023. All Rights Reserved</span>
        </div>
        <div className='right'>
          <img src='/img/payment.png' alt='payment-methods'/>
        </div>
      </div>
    </div>
  )
}

export default Footer