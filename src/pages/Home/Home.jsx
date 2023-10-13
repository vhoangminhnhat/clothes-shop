import React from 'react'
import SliderComponent from '../../components/Slider/Slider';
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts';
import Categories from '../../components/Categories/Categories';
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <SliderComponent/>
      <FeatureProducts type="featured"/>
      <Categories/>
      <FeatureProducts type="trending"/>
    </div>
  )
}

export default Home