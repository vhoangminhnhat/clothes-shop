import React from 'react'
import "./Slider.css";
import { EastOutlined, WestOutlined } from '@mui/icons-material';

const SliderComponent = () => {
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]
  return (
    <div className='slider'>
        <div className='container'>
            <img src={data[0]} alt='carousel'/>
            <img src={data[1]} alt='carousel'/>
            <img src={data[2]} alt='carousel'/>
        </div>
       <div className='icons'>
        <div className='icon'></div>
        <div className='icon'></div>
       </div>

    </div>
  )
}

export default SliderComponent;