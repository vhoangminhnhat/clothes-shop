import React from 'react';
import "./FeatureProducts.css";
import Card from '../Card/Card';

const data = [
    {
        id: 1,
        img1: "",
        img2: "",
        title: "",
        isNew: true,
        price: 2000000,
    },
    {
        id: 2,
        img1: "",
        img2: "",
        title: "",
        isNew: true,
        price: 5000000
    }
]

const FeatureProducts = () => {
  return (
    <div className='featureProducts'>
        <div className='top'>
            <h1>Products</h1>
        </div>
        <div className='bottom'>
            {data.map(item => (
                <Card item={data} key={item?.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeatureProducts