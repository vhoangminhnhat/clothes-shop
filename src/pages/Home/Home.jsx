import React from 'react'
import SliderComponent from '../../components/Slider/Slider';
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts';
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <SliderComponent type="featured"/>
      <FeatureProducts type="trending"/>
    </div>
  )
}

export default Home