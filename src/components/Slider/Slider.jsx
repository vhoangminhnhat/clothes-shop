import React, { useState } from 'react'
import "./Slider.css";
import { EastOutlined, WestOutlined } from '@mui/icons-material';

const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const SliderComponent = () => {
  const [carousel, setCarousel] = useState(0);

  const previousCarousel = () => {
    setCarousel(carousel === 0 ? 2 : (value) => value - 1);
  };

  const nextCarousel = () => {
    setCarousel(carousel === 2 ? 0 : (value) => value + 1);
  };

  return (
    <div className='slider'>
        <div className='container' style={{transform: `translateX(-${carousel*100}vw)`}}>
            <img src={data[0]} alt='carousel'/>
            <img src={data[1]} alt='carousel'/>
            <img src={data[2]} alt='carousel'/>
        </div>
       <div className='icons'>
        <div className='icon' onClick={previousCarousel}>
          <WestOutlined/>
        </div>
        <div className='icon'onClick={nextCarousel}>
          <EastOutlined/>
        </div>
       </div>

    </div>
  )
}

export default SliderComponent;